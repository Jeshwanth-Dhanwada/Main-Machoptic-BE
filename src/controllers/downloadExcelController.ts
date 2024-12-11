import { Request, Response } from "express";
const ExcelJS = require('exceljs');
import { InternalServerError } from "../response/InternalServerErrorResponse";

export const downloadExcel = async (req: Request, res: Response) => {
    try {
        const data = [
            ...req.body.filteredData,
        ];
        console.log(req.body.MachineWiseHeader);
        // Create a new workbook and add a worksheet
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet 1');

        // Add column headers
        worksheet.columns = req.body.MachineWiseHeader.map((item: any) => {
            return ({
                header: item,
                key: item,
                width: 20
            })
        })

        // Add data to the worksheet
        worksheet.addRows(data);

        // // Set the response headers for Excel file
        // res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        // res.setHeader('Content-Disposition', 'attachment; filename=output.xlsx');

        // Send the Excel file to the client
        return workbook.xlsx.write(res)
            .then(() => {
                res.status(200).end();
                console.log('Excel file sent successfully!');
            })
            .catch((error: any) => {
                console.error('Error:', error);
                res.status(500).send('Internal Server Error');
            });

    } catch (error) {
        return InternalServerError(res, error);
    }
}