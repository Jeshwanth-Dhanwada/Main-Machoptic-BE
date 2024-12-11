import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Menus } from "../entity/Menu";

const menuSchema = Joi.object({
  Description: Joi.string().required(),
  Url: Joi.string().allow(null, ''),
});

// export const createDepartment = async (req: Request, res: Response) => {
//   const { error } = menuSchema.validate(req.body);

//   if (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }

//   try {
//     const department = new Department();
//     department.branchId = req.body.branchId;
//     department.deptName = req.body.deptName;
//     department.userId = req.body.userId;
//     await department.save();
//     return res.status(201).json(department);
//   } catch (error) {
//     return InternalServerError(res, error);
//   }
// };

export const getAllMenu = async (_: Request, res: Response) => {
  try {
    const menu = await Menus.find();
    return res.json(menu);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateMenu = async (req: Request, res: Response) => {
  const { error } = menuSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const menu = await Menus.findOne(req.params.id);
    if (!menu) {
      return res.status(404).json({ error: 'menu not found' });
    }
//     menu.branchId = req.body.branchId;
    menu.Description = req.body.Description;
    menu.Url = req.body.Url;
//     menu.userId = req.body.userId;

    await menu.save();
    return res.json(menu);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteMenu = async (req: Request, res: Response) => {
  try {
    const menu = await Menus.findOne(req.params.id);
    if (!menu) {
      return res.status(404).json({ error: 'menu not found' });
    }

    await menu.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const menuById = async (req: Request, res: Response) => {
  try {
    const menu = await Menus.findOne(req.params.id);
    if (!menu) {
      return res.status(404).json({ error: 'menu not found' });
    }
    return res.json(menu);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


// for data base tables fetching...
const sql = require('mssql');

const config = {
  user: 'jeshwanth',
  password: 'nodejs@123',
  server: 'JESHWANTH',
  database: 'Taxonanalytica',
  // options: {
  //   encrypt: true, // For Azure SQL Database
  // },
};

// export const getAllTableMaster = async (_: Request, res: Response) => {  
//           try{
//             await sql.connect(config)
//             let result = await new sql.Request().query(`SELECT * FROM information_schema.tables WHERE table_type = 'BASE TABLE';`);
            
//             const tableNames = result.recordset.map((table:any) => table.TABLE_NAME);   
//             for (const tableName of tableNames) {
//                     const menu = new Menus();
//                     menu.Description = tableName;
//                     menu.Url = '';
//                     await menu.save();
//                   }
              
//                   return res.json({ message: "Tables inserted successfully." }); 
//             return res.json(tableNames.sort());
//           }catch (error) {
//             return InternalServerError(res, error);
//           } 
//         };


export const getAllTableMaster = async (_: Request, res: Response) => {
          try {
            await sql.connect(config);
            let result = await new sql.Request().query(`SELECT * FROM information_schema.tables WHERE table_type = 'BASE TABLE';`);
        
            const tableNames = result.recordset.map((table: any) => table.TABLE_NAME);
        
            for (const tableName of tableNames) {
              // Check if the table with the same Description already exists
              const existingMenu = await Menus.findOne({ Description: tableName });
        
              if (!existingMenu) {
                const menu = new Menus();
                menu.Description = tableName;
                menu.Url = '';
                await menu.save();
              }
            }
            return res.json({ message: "Tables inserted successfully." });
          } catch (error) {
            return InternalServerError(res, error);
          } finally {
            // Close the SQL connection
            await sql.close();
          }
        };
        