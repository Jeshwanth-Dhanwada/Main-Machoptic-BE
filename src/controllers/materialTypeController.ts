import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { MaterialType } from "../entity/MaterialType";

const materialTypeSchema = Joi.object({
  // materialTypeId: Joi.string().required(),
  branchId: Joi.string().required(),
  typeDescription: Joi.string().required(),
  materialCategoryId: Joi.number().required(),
  routeId: Joi.string().required(),
  nodeId: Joi.string().required(),
  specification: Joi.string().required(),
  userId: Joi.string().required(),
});

export const createMaterialType = async (req: Request, res: Response) => {
  const { error } = materialTypeSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const materialType = new MaterialType();
    // materialType.materialTypeId = req.body.materialTypeId;
    materialType.branchId = req.body.branchId;
    materialType.typeDescription = req.body.typeDescription;
    materialType.materialCategoryId = req.body.materialCategoryId;
    materialType.routeId = req.body.routeId;
    materialType.nodeId = req.body.nodeId;
    materialType.specification = req.body.specification;
    materialType.userId = req.body.userId;
    await materialType.save();
    return res.status(201).json(materialType);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllMaterialType = async (_: Request, res: Response) => {
  try {
    const materialTypees = await MaterialType.find();
    return res.json(materialTypees);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateMaterialType = async (req: Request, res: Response) => {
  const { error } = materialTypeSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const materialType = await MaterialType.findOne(req.params.id);
    if (!materialType) {
      return res.status(404).json({ error: 'materialType not found' });
    }

    // materialType.materialTypeId = req.body.materialTypeId;
    materialType.branchId = req.body.branchId;
    materialType.typeDescription = req.body.typeDescription;
    materialType.materialCategoryId = req.body.materialCategoryId;
    materialType.routeId = req.body.routeId;
    materialType.nodeId = req.body.nodeId;
    materialType.specification = req.body.specification;
    materialType.userId = req.body.userId;

    await materialType.save();
    return res.json(materialType);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteMaterialType = async (req: Request, res: Response) => {
  try {
    const materialType = await MaterialType.findOne(req.params.id);
    if (!materialType) {
      return res.status(404).json({ error: 'materialType not found' });
    }

    await materialType.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const materialTypeById = async (req: Request, res: Response) => {
  try {
    const materialType = await MaterialType.findOne(req.params.id);
    if (!materialType) {
      return res.status(404).json({ error: 'Material type not found' });
    }
    return res.json(materialType);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


