import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { MachineCategory } from "../entity/machineCategory";

const machineCategorySchema = Joi.object({
  userId: Joi.string().required(),
  branchId: Joi.string().required(),
  CategoryDescription: Joi.string().required(),
});

export const createMachineCategory = async (req: Request, res: Response) => {
  const { error } = machineCategorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const machineCategory = new MachineCategory();
    machineCategory.userId = req.body.userId;
    machineCategory.branchId = req.body.branchId;
    machineCategory.CategoryDescription = req.body.CategoryDescription;
    await machineCategory.save();
    return res.status(201).json(machineCategory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllMachineCategory = async (_: Request, res: Response) => {
  try {
    const machineCategory = await MachineCategory.find();
    return res.json(machineCategory);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateMachineCategory = async (req: Request, res: Response) => {
  const { error } = machineCategorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const machineCategory = await MachineCategory.findOne(req.params.id);
    if (!machineCategory) {
      return res.status(404).json({ error: 'machineCategory not found' });
    }

    machineCategory.userId = req.body.userId;
    machineCategory.branchId = req.body.branchId;
    machineCategory.CategoryDescription = req.body.CategoryDescription;

    await machineCategory.save();
    return res.json(machineCategory);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteMachineCategory = async (req: Request, res: Response) => {
  try {
    const machineCategory = await MachineCategory.findOne(req.params.id);
    if (!machineCategory) {
      return res.status(404).json({ error: 'machineCategory not found' });
    }

    await machineCategory.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const machineCategoryById = async (req: Request, res: Response) => {
  try {
    const machineCategory = await MachineCategory.findOne(req.params.id);
    if (!machineCategory) {
      return res.status(404).json({ error: 'Material category not found' });
    }
    return res.json(machineCategory);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


