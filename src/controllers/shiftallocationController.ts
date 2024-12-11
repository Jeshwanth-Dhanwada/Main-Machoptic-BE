import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { ShiftAllocation } from "../entity/ShiftAllocation";

const shiftAllocationSchema = Joi.object({
  allocationId: Joi.string().required(),
  branchId: Joi.string().required(),
  date: Joi.date().iso().allow(null),
  shift: Joi.string().required(),
  nodeId: Joi.string().required(),
  empId: Joi.string().required(),
});

export const createShiftAllocation = async (req: Request, res: Response) => {
  const { error } = shiftAllocationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    
    const shiftAllocation = new ShiftAllocation();
    shiftAllocation.allocationId = req.body.allocationId;
    shiftAllocation.branchId = req.body.branchId;
    shiftAllocation.date = req.body.date;
    shiftAllocation.shift = req.body.shift;
    shiftAllocation.nodeId = req.body.nodeId;
    shiftAllocation.empId = req.body.empId;

    await shiftAllocation.save();
    return res.status(201).json(shiftAllocation);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllShiftAllocation = async (_: Request, res: Response) => {
  try {
    const shiftAllocationes = await ShiftAllocation.find();
    return res.json(shiftAllocationes);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateShiftAllocation = async (req: Request, res: Response) => {
  const { error } = shiftAllocationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const shiftAllocation = await ShiftAllocation.findOne(req.params.id);
    if (!shiftAllocation) {
      return res.status(404).json({ error: 'ShiftAllocation not found' });
    }

    shiftAllocation.allocationId = req.body.allocationId;
    shiftAllocation.branchId = req.body.branchId;
    shiftAllocation.date = req.body.date;
    shiftAllocation.shift = req.body.shift;
    shiftAllocation.nodeId = req.body.nodeId;
    shiftAllocation.empId = req.body.empId;


    await shiftAllocation.save();
    return res.json(shiftAllocation);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteShiftAllocation = async (req: Request, res: Response) => {
  try {
    const shiftAllocation = await ShiftAllocation.findOne(req.params.id);
    if (!shiftAllocation) {
      return res.status(404).json({ error: 'ShiftAllocation not found' });
    }

    await shiftAllocation.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const shiftAllocationById = async (req: Request, res: Response) => {
  try {
    const shiftAllocation = await ShiftAllocation.findOne(req.params.id);
    if (!shiftAllocation) {
      return res.status(404).json({ error: 'ShiftAllocation not found' });
    }
    return res.json(shiftAllocation);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

