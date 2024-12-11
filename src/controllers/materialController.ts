import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Material } from "../entity/Material";

const materialSchema = Joi.object({
  branchId: Joi.string().required(),
  materialName: Joi.string().required(),
  unitId: Joi.string().required(),
  userId: Joi.string().required(),
});

export const createMaterial = async (req: Request, res: Response) => {
  const { error } = materialSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const material = new Material();
    material.userId = req.body.userId;
    material.branchId = req.body.branchId;
    material.materialName = req.body.materialName;
    material.unitId = req.body.unitId;
    await material.save();
    return res.status(201).json(material);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllMaterial = async (_: Request, res: Response) => {
  try {
    const materiales = await Material.find();
    return res.json(materiales);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateMaterial = async (req: Request, res: Response) => {
  const { error } = materialSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const material = await Material.findOne(req.params.id);
    if (!material) {
      return res.status(404).json({ error: 'material not found' });
    }

    material.userId = req.body.userId;
    material.branchId = req.body.branchId;
    material.materialName = req.body.materialName;
    material.unitId = req.body.unitId;

    await material.save();
    return res.json(material);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteMaterial = async (req: Request, res: Response) => {
  try {
    const material = await Material.findOne(req.params.id);
    if (!material) {
      return res.status(404).json({ error: 'material not found' });
    }

    await material.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const materialById = async (req: Request, res: Response) => {
  try {
    const material = await Material.findOne(req.params.id);
    if (!material) {
      return res.status(404).json({ error: 'Material not found' });
    }
    return res.json(material);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};



