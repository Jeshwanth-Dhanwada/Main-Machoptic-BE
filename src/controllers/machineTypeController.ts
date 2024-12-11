import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { MachineType } from "../entity/machineType";

const machineSchema = Joi.object({
  machineName: Joi.string().required(),
  branchId: Joi.string().required(),
  userId: Joi.string().required(),
  machineCategoryId: Joi.string().allow('',null)
});

export const createMachineTypes = async (req: Request, res: Response) => {
  const { error } = machineSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const machineType = new MachineType();
    machineType.userId = req.body.userId;
    machineType.branchId = req.body.branchId;
    machineType.machineName = req.body.machineName;
    machineType.machineCategoryId = req.body.machineCategoryId;
    await machineType.save();
    return res.status(201).json(machineType);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateMachinetypes = async (req: Request, res: Response) => {
          const { error } = machineSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
          try {
            const machineType = await MachineType.findOne(req.params.id);
            if (!machineType) {
              return res.status(404).json({ error: 'MachineType not found' });
            }
        
            machineType.userId = req.body.userId;
            machineType.branchId = req.body.branchId;
            machineType.machineName = req.body.machineName;
            machineType.machineCategoryId = req.body.machineCategoryId;
        
            await machineType.save();
            return res.json(machineType);
          }  catch (error) {
            return InternalServerError(res, error);
          }
        };

export const getAllMachineTypes = async (_: Request, res: Response) => {
  try {
    const machineType = await MachineType.find();
    return res.json(machineType);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteMachineType = async (req: Request, res: Response) => {
  try {
    const machineType = await MachineType.findOne(req.params.id);
    if (!machineType) {
      return res.status(404).json({ error: 'machineType not found' });
    }

    await machineType.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const machineTypeById = async (req: Request, res: Response) => {
  try {
    const machineType = await MachineType.findOne(req.params.id);
    if (!machineType) {
      return res.status(404).json({ error: 'machineType not found' });
    }
    return res.json(machineType);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};



