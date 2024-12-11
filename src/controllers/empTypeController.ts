import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Emptype } from "../entity/Emptype";

const EmpTypeSchema = Joi.object({
  branchId: Joi.string().required(),
  empType: Joi.string().required(),
  userId: Joi.string().required(),
});

export const createEmpType = async (req: Request, res: Response) => {
  const { error } = EmpTypeSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const empType = new Emptype();
    empType.branchId = req.body.branchId;
    empType.userId = req.body.userId;
    empType.empType = req.body.empType;
    await empType.save();
    return res.status(201).json(empType);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllEmpType = async (_: Request, res: Response) => {
  try {
    const EmpTypees = await Emptype.find();
    return res.json(EmpTypees);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateEmpType = async (req: Request, res: Response) => {
  const { error } = EmpTypeSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const EmpType = await Emptype.findOne(req.params.id);
    if (!EmpType) {
      return res.status(404).json({ error: 'EmpType not found' });
    }
    EmpType.branchId = req.body.branchId;
    EmpType.userId = req.body.userId;
    EmpType.empType = req.body.empType;

    await EmpType.save();
    return res.json(EmpType);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteEmpType = async (req: Request, res: Response) => {
  try {
    const EmpType = await Emptype.findOne(req.params.id);
    if (!EmpType) {
      return res.status(404).json({ error: 'EmpType not found' });
    }

    await EmpType.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const empTypeById = async (req: Request, res: Response) => {
  try {
    const EmpType = await Emptype.findOne(req.params.id);
    if (!EmpType) {
      return res.status(404).json({ error: 'Employee type not found' });
    }
    return res.json(EmpType);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



