import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { MaterialCategory } from "../entity/MaterialCategory";

const materialCategorySchema = Joi.object({
  userId: Joi.string().required(),
  branchId: Joi.string().required(),
  productTypeDescription: Joi.string().required(),
});

export const createMaterialCategory = async (req: Request, res: Response) => {
  const { error } = materialCategorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const materialCategory = new MaterialCategory();
    materialCategory.userId = req.body.userId;
    materialCategory.branchId = req.body.branchId;
    materialCategory.productTypeDescription = req.body.productTypeDescription;
    await materialCategory.save();
    return res.status(201).json(materialCategory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllMaterialCategory = async (_: Request, res: Response) => {
  try {
    const materialCategoryes = await MaterialCategory.find();
    return res.json(materialCategoryes);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateMaterialCategory = async (req: Request, res: Response) => {
  const { error } = materialCategorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const materialCategory = await MaterialCategory.findOne(req.params.id);
    if (!materialCategory) {
      return res.status(404).json({ error: 'materialCategory not found' });
    }

    materialCategory.userId = req.body.userId;
    materialCategory.branchId = req.body.branchId;
    materialCategory.productTypeDescription = req.body.productTypeDescription;

    await materialCategory.save();
    return res.json(materialCategory);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteMaterialCategory = async (req: Request, res: Response) => {
  try {
    const materialCategory = await MaterialCategory.findOne(req.params.id);
    if (!materialCategory) {
      return res.status(404).json({ error: 'materialCategory not found' });
    }

    await materialCategory.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const materialCategoryById = async (req: Request, res: Response) => {
  try {
    const materialCategory = await MaterialCategory.findOne(req.params.id);
    if (!materialCategory) {
      return res.status(404).json({ error: 'Material category not found' });
    }
    return res.json(materialCategory);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


