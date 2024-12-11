import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Row_Master } from "../entity/Rows";


const rowsSchema = Joi.object({
          iconClass: Joi.string().allow('',null),
          enableDragging: Joi.boolean().allow('',null),
          enableResize: Joi.boolean().allow('',null),
          label : Joi.string().allow('',null),
          children : Joi.string().allow('',null),
          expanded : Joi.boolean().allow('',null),
          userId: Joi.string().allow('',null),
          class: Joi.string().allow('',null),
          id: Joi.string().allow('',null),
});

export const createRowsMaster = async (req: Request, res: Response) => {
          const { error } = rowsSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
          try {
            const rowMaster = new Row_Master();
            rowMaster.enableDragging = req.body.enableDragging;
            rowMaster.enableResize = req.body.enableResize;
            rowMaster.label  = req.body.label ;
            rowMaster.children  = req.body.children ;
            rowMaster.expanded  = req.body.expanded ;
            rowMaster.userId = req.body.userId;
            rowMaster.iconClass = req.body.iconClass;
            rowMaster.class = req.body.class;
            rowMaster.id = req.body.id;
            await rowMaster.save();
            return res.status(201).json(rowMaster);
          } catch (error) {
            return InternalServerError(res, error);
          }
        };

export const getAllRowMaster = async (_: Request, res: Response) => {
          try {
                    const rowMaster = await Row_Master.find();
                    return res.json(rowMaster);
          } catch (error) {
                    return InternalServerError(res, error);
          }
};

export const RowMasterById = async (req: Request, res: Response) => {
          try {
            const rowMaster = await Row_Master.findOne(req.params.id);
            if (!rowMaster) {
              return res.status(404).json({ error: 'rowMaster not found' });
            }
            return res.json(rowMaster);
          } catch (error) {
            return InternalServerError(res, error);
          }
        };

export const deleteRowMaster = async (req: Request, res: Response) => {
          try {
                    const rowMaster = await Row_Master.findOne(req.params.id);
                    if (!rowMaster) {
                    return res.status(404).json({ error: 'rowMaster not found' });
                    }
                    await rowMaster.remove();
                    return res.status(204).end();
          } catch (error) {
                    return InternalServerError(res, error);
          }
};

export const updateBulkRowMaster = async (req: Request, res: Response) => {

  if (req.body.rowMaster.length) {
    const taskData = req.body.rowMaster
    console.log(taskData, "adding")

    let responseData: any = []


    for (let i = 0; i < taskData.length; i++) {
      const element = taskData[i];
      console.log(element);

      const { error } = rowsSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }


    try {

      for (let i = 0; i < taskData.length; i++) {
        const element = taskData[i];
        let taskUpdateData: any;

        if (element.RowId) {
          console.log("update");
          taskUpdateData = await updateDataRowMaster(element)
        }

        else {
          taskUpdateData = await createDataRowMaster(element)
          console.log("add");
        }
        responseData.push(taskUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataRowMaster = async (data: any) => {
  const { error } = rowsSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const rowMaster = await Row_Master.findOne(data.RowId);
    if (!rowMaster) {
      return { error: 'rowMaster not found' }
    }
    rowMaster.enableDragging = data.enableDragging;
    rowMaster.enableResize = data.enableResize;
    rowMaster.label  = data.label ;
    rowMaster.children  = data.children ;
    rowMaster.expanded  = data.expanded ;
    rowMaster.userId = data.userId;
    rowMaster.iconClass = data.iconClass;
    rowMaster.class = data.class;
    rowMaster.id = data.id;

    await rowMaster.save();
    return rowMaster
  } catch (error) {
    return error
  }
};

const createDataRowMaster = async (data: any) => {
  const { error } = rowsSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const rowMaster = new Row_Master();
    rowMaster.enableDragging = data.enableDragging;
    rowMaster.enableResize = data.enableResize;
    rowMaster.label  = data.label;
    rowMaster.children  = data.children;
    rowMaster.expanded  = data.expanded;
    rowMaster.userId = data.userId;
    rowMaster.iconClass = data.iconClass;
    rowMaster.class = data.class;
    rowMaster.id = data.id;
    await rowMaster.save();

    return rowMaster
  } catch (error) {
    console.log(error)
    return error
  }
};