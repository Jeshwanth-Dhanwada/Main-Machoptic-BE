import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
//import * as Joi from "joi";
import { DataRecord } from "../entity/dataRecord";


export const getDataRecord = async (_: Request, res: Response) => {
    try {
        const activitylog = await DataRecord.find();
        console.log(activitylog, "********************")
        return res.json(activitylog);
    } catch (error) {
        return InternalServerError(res, error);
    }
};