import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Denpendency_Master } from "../entity/Dependency";



const dependencySchema = Joi.object({
          fromId : Joi.number().allow('',null),
          toId: Joi.number().allow('',null),
          stroke : Joi.string().allow('',null),
          strokeWidth: Joi.number().allow('',null),
          arrowSize: Joi.number().allow('',null),
          userId: Joi.string().allow('',null),
});

export const createDependemcyMaster = async (req: Request, res: Response) => {
          const { error } = dependencySchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
          try {
            const dependencyMaster = new Denpendency_Master();
            dependencyMaster.fromId  = req.body.fromId ;
            dependencyMaster.toId = req.body.toId;
            dependencyMaster.stroke  = req.body.stroke ;
            dependencyMaster.strokeWidth = req.body.strokeWidth;
            dependencyMaster.arrowSize = req.body.arrowSize;
            dependencyMaster.userId = req.body.userId;
            await dependencyMaster.save();
            return res.status(201).json(dependencyMaster);
          } catch (error) {
            return InternalServerError(res, error);
          }
        };

export const getAllDependencyMaster = async (_: Request, res: Response) => {
          try {
                    const dependencyMaster = await Denpendency_Master.find();
                    return res.json(dependencyMaster);
          } catch (error) {
                    return InternalServerError(res, error);
          }
};

export const DependencyMasterById = async (req: Request, res: Response) => {
          try {
            const dependencyMaster = await Denpendency_Master.findOne(req.params.id);
            if (!dependencyMaster) {
              return res.status(404).json({ error: 'dependencyMaster not found' });
            }
            return res.json(dependencyMaster);
          } catch (error) {
            return InternalServerError(res, error);
          }
        };

export const deleteDependencyMaster = async (req: Request, res: Response) => {
          try {
                    const dependencyMaster = await Denpendency_Master.findOne(req.params.id);
                    if (!dependencyMaster) {
                    return res.status(404).json({ error: 'dependencyMaster not found' });
                    }
                    await dependencyMaster.remove();
                    return res.status(204).end();
          } catch (error) {
                    return InternalServerError(res, error);
          }
};

export const updateBulkDependencyMaster = async (req: Request, res: Response) => {

  if (req.body.dependency.length) {
    const dependencyData = req.body.dependency
    console.log(dependencyData, "adding")

    let responseData: any = []

    for (let i = 0; i < dependencyData.length; i++) {
      const element = dependencyData[i];
      console.log(element);

      const { error } = dependencySchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }
    try {

      for (let i = 0; i < dependencyData.length; i++) {
        const element = dependencyData[i];
        let dependencyUpdateData: any;

        if (element.id) {
          console.log("update");
          dependencyUpdateData = await updateDataDependencyMaster(element)
        }

        else {
          dependencyUpdateData = await createDataDependencyMaster(element)
          console.log("add");
        }
        responseData.push(dependencyUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataDependencyMaster = async (data: any) => {
  const { error } = dependencySchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const dependencyMaster = await Denpendency_Master.findOne(data.id);
    if (!dependencyMaster) {
      return { error: 'dependencyMaster not found' }
    }
    dependencyMaster.fromId  = data.fromId ;
    dependencyMaster.toId = data.toId;
    dependencyMaster.stroke  = data.stroke ;
    dependencyMaster.strokeWidth = data.strokeWidth;
    dependencyMaster.arrowSize = data.arrowSize;
    dependencyMaster.userId = data.userId;

    await dependencyMaster.save();
    return dependencyMaster
  } catch (error) {
    return error
  }
};

const createDataDependencyMaster = async (data: any) => {
  const { error } = dependencySchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const dependencyMaster = new Denpendency_Master();
    dependencyMaster.fromId  = data.fromId ;
    dependencyMaster.toId = data.toId;
    dependencyMaster.stroke  = data.stroke ;
    dependencyMaster.strokeWidth = data.strokeWidth;
    dependencyMaster.arrowSize = data.arrowSize;
    dependencyMaster.userId = data.userId;
    await dependencyMaster.save();

    return dependencyMaster
  } catch (error) {
    console.log(error)
    return error
  }
};