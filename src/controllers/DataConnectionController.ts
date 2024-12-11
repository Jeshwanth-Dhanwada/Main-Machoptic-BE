
import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import { DataConfig } from '../DataConnection/DataconnectionConfig';
// import * as Joi from "joi";
// import { NodeMaster } from "../entity/NodeMaster";


// for data base tables fetching...
const sql = require('mssql');

const config = {
  user: DataConfig.user,
  password: DataConfig.password,
  server: DataConfig.server,
  database: DataConfig.database,
  options: {
    encrypt: true, // For Azure SQL Database
  },
};

export const getAllTableMaster = async (_: Request, res: Response) => {
  try {
    await sql.connect(config);
    let result = await new sql.Request().query("SELECT * FROM information_schema.tables WHERE table_type = 'BASE TABLE';");

    const tablenames = result.recordset.map((table: any) => table.TABLE_NAME);

    return res.json({ tablenames });
  } catch (error) {
    return InternalServerError(res, error);
  } finally {
    // Close the SQL connection
    await sql.close();
  }
};

export const getTableColumns = async (req: Request, res: Response) => {
  try {
    await sql.connect(config);
    const tableName = req.params.tablename;
    console.log("tablename",typeof req.params.tablename)

    let result = await new sql.Request().query(`SELECT COLUMN_NAME FROM information_schema.columns WHERE TABLE_NAME = '${String(tableName)}';`);
    console.log("tablename",req.params.tablename,result)

    const columns = result.recordset.map((column: any) => column.COLUMN_NAME);

    return res.json({ columns });
  } catch (error) {
    return InternalServerError(res, error);
  } finally {
    // Close the SQL connection
    await sql.close();
  }
};
export const getTableData = async (req: Request, res: Response) => {
  try {
    await sql.connect(config);
    const tableName = req.params.table;
    console.log("table",typeof req.params.table)

    let result = await new sql.Request().query(`SELECT * FROM ${String(tableName)}`);
    console.log("tablename", req.params.tablename, result)

    const data = result.recordset;

    return res.json({ data });
  } catch (error) {
    console.log("tablename", error)

    return InternalServerError(res, error);
  } finally {
    // Close the SQL connection
    await sql.close();
  }
};


export const getSelectedQuery = async (req: Request, res: Response) => {
  const selectedTable = req.query.Table;
  const selectedColumn = req.query.column;
  const queryname = req.query.queryname;
  // console.log(selectedTable);
  // console.log(selectedColumn);
  // console.log(queryname);
  let result_data :any = []

  try{
    await sql.connect(config);
    if (queryname === "SUM"){
      const result = await new sql.Request().query(`SELECT SUM(${selectedColumn}) as sumcolumn FROM [${selectedTable}]`);
      // console.log("result",result);
      result_data = result.recordset.map((row:any) => row.sumcolumn);
      
    }
    else if (queryname === "AVERAGE"){
      const result = await new sql.Request().query(`SELECT AVG(${selectedColumn}) as avgcolumn FROM [${selectedTable}]`);
      // console.log("result",result);
      result_data = result.recordset.map((row:any) => row.avgcolumn);
      
    }
    else if (queryname === "COUNT"){
      const result = await new sql.Request().query(`SELECT COUNT(*) as countofrows FROM [${selectedTable}]`);
      // console.log("result",result);
      result_data = result.recordset.map((row:any) => row.countofrows); 
    }
    else if (queryname === "MINIMUM"){
      const result = await new sql.Request().query(`SELECT MIN(${selectedColumn}) as mincolumn FROM [${selectedTable}]`);
      // console.log("result",result);
      result_data = result.recordset.map((row:any) => row.mincolumn);
    }
    else if (queryname === "MAXIMUM"){
      const result = await new sql.Request().query(`SELECT MAX(${selectedColumn}) as maxcolumn FROM [${selectedTable}]`);
      // console.log("result",result);
      result_data = result.recordset.map((row:any) => row.maxcolumn);
    }
    else if (queryname === "DISTINCT"){
      const result = await new sql.Request().query(`SELECT DISTINCT ${selectedColumn} as Distinctcolumn FROM [${selectedTable}]`);
      // console.log("result",result);
      result_data = result.recordset.map((row:any) => row.Distinctcolumn);
    }
    else if (queryname === "ORDER BY(Ascending)"){
      const result = await new sql.Request().query(`SELECT * FROM [${selectedTable}]  ORDER BY ${selectedColumn} ASC`);
      // console.log("result",result);
      result_data = result.recordset
    }
    else if (queryname === "ORDER BY(Descending)"){
      const result = await new sql.Request().query(`SELECT * FROM [${selectedTable}]  ORDER BY ${selectedColumn} DESC`);
      // console.log("result",result);
      result_data = result.recordset
    }
    return res.json(result_data);
  } catch (error) {
    return InternalServerError(res, error);
  }
};