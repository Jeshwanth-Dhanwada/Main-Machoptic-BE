import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { FGMapping } from "../entity/FGMapping";

const FGMappingSchema = Joi.object({
  branchId: Joi.string().required(),
  nodeIdFG: Joi.string().required(),
  nodeIdRM: Joi.string().required(),
  userId: Joi.string().required(),
  nodeId: Joi.string().required(),
  isDefault: Joi.string().allow('', null),
  nodeCategory: Joi.string().required(),
  // nodeCate

});

export const createFGMapping = async (req: Request, res: Response) => {
  const { error } = FGMappingSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {

    const mapping = new FGMapping();
    mapping.branchId = req.body.branchId;
    mapping.userId = req.body.userId;
    mapping.nodeIdFG = req.body.nodeIdFG;
    mapping.nodeIdRM = req.body.nodeIdRM;
    mapping.nodeId = req.body.nodeId;
    mapping.nodeCategory = req.body.nodeCategory;
    mapping.isDefault = req.body.isDefault;

    await mapping.save();
    return res.status(201).json(mapping);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllFGMapping = async (_: Request, res: Response) => {
  try {
    const FGMappingSchema = await FGMapping.find();
    return res.json(FGMappingSchema);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateFGMapping = async (req: Request, res: Response) => {
  const { error } = FGMappingSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const mapping = await FGMapping.findOne(req.params.id);
    if (!mapping) {
      return res.status(404).json({ error: 'FGmapping not found' });
    }
    mapping.branchId = req.body.branchId;
    mapping.nodeIdFG = req.body.nodeIdFG;
    mapping.nodeIdRM = req.body.nodeIdRM;
    mapping.nodeId = req.body.nodeId;
    mapping.userId = req.body.userId;
    mapping.nodeCategory = req.body.nodeCategory;
    mapping.isDefault = req.body.isDefault;

    await mapping.save();
    return res.json(mapping);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkFGMapping = async (req: Request, res: Response) => {
  console.log(123);
  if (req.body.mapping.length) {
    const FGMappingData = req.body.mapping

    let responseData: any = []

    for (let i = 0; i < FGMappingData.length; i++) {
      const element = FGMappingData[i];
      const { error } = FGMappingSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < FGMappingData.length; i++) {
        const element = FGMappingData[i];
        let FGMappingUpdateData: any;

        if (element.id) {
          console.log("update");
          FGMappingUpdateData = await updateDataFGMapping(element)
        }

        else {
          FGMappingUpdateData = await createDataFGMapping(element)
          console.log("add");
        }

        responseData.push(FGMappingUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataFGMapping = async (data: any) => {
  const { error } = FGMappingSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const mapping = await FGMapping.findOne(data.id);
    if (!mapping) {
      return { error: error.details[0].message }
    }

    mapping.branchId = data.branchId;
    mapping.userId = data.userId;
    mapping.nodeIdFG = data.nodeIdFG;
    mapping.nodeIdRM = data.nodeIdRM;
    mapping.nodeId = data.nodeId;
    mapping.nodeCategory = data.nodeCategory;
    mapping.isDefault = data.isDefault;
    await mapping.save();

    return mapping

  } catch (error) {
    return error
  }
};

const createDataFGMapping = async (data: any) => {
  const { error } = FGMappingSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {

    const mapping = new FGMapping();
    mapping.branchId = data.branchId;
    mapping.userId = data.userId;
    mapping.nodeIdFG = data.nodeIdFG;
    mapping.nodeIdRM = data.nodeIdRM;
    mapping.nodeId = data.nodeId;
    mapping.nodeCategory = data.nodeCategory;
    mapping.isDefault = data.isDefault;
    await mapping.save();

    return mapping
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteFGMapping = async (req: Request, res: Response) => {
  try {
    const mapping = await FGMapping.findOne(req.params.id);
    if (!mapping) {
      return res.status(404).json({ error: 'FGmapping not found' });
    }

    await mapping.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const FGMappingById = async (req: Request, res: Response) => {
  try {
    const mapping = await FGMapping.findOne(req.params.id);
    if (!mapping) {
      return res.status(404).json({ error: 'FGmapping not found' });
    }
    return res.json(mapping);
  } catch (error) {
    return InternalServerError(res, error);
  }
};