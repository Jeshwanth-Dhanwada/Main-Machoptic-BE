import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { NodeMaterialspecification } from "../entity/MaterialSpecification";

const materialSpecifcationSchema = Joi.object({
          Value : Joi.number().allow('',null),
          nodeId : Joi.number().allow('',null),
          ActivityId : Joi.number().allow('',null),
          userId : Joi.string().required(),
});

export const createMaterialSpecification = async (req: Request, res: Response) => {
  const { error } = materialSpecifcationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const materialspecfication = new NodeMaterialspecification();
          materialspecfication.Value =  req.body.Value
          materialspecfication.nodeId =  req.body.nodeId
          materialspecfication.ActivityId =  req.body.ActivityId
          materialspecfication.userId =  req.body.userId

    await materialspecfication.save();
    return res.status(201).json(materialspecfication);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateMaterialSpecification = async (req: Request, res: Response) => {
          const { error } = materialSpecifcationSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
          try {
            const materialspecfication = await NodeMaterialspecification.findOne(req.params.id);
            if (!materialspecfication) {
              return res.status(404).json({ error: 'NodeMaterialspecification not found' });
            }
        
            materialspecfication.Value = req.body.Value;
            materialspecfication.nodeId = req.body.nodeId;
            materialspecfication.ActivityId = req.body.ActivityId;
            materialspecfication.userId = req.body.userId;
        
            await materialspecfication.save();
            return res.json(materialspecfication);
          }  catch (error) {
            return InternalServerError(res, error);
          }
}

export const getAllMaterialSpecification = async (_: Request, res: Response) => {
  try {
    const materialspecfication = await NodeMaterialspecification.find();
    return res.json(materialspecfication);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteMaterialSpecification = async (req: Request, res: Response) => {
  try {
    const materialspecfication = await NodeMaterialspecification.findOne(req.params.id);
    if (!materialspecfication) {
      return res.status(404).json({ error: 'materialspecfication not found' });
    }
    await materialspecfication.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const NodeMaterialSpecificationById = async (req: Request, res: Response) => {
  try {
    const materialspecfication = await NodeMaterialspecification.findOne(req.params.id);
    if (!materialspecfication) {
      return res.status(404).json({ error: 'materialspecfication not found'});
    }
    return res.json(materialspecfication);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};



