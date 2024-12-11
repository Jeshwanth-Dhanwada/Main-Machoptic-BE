import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Department } from "../entity/Department";

const departmentSchema = Joi.object({

  branchId: Joi.string().required(),
  deptName: Joi.string().required(),
  userId: Joi.string().required(),
});

export const createDepartment = async (req: Request, res: Response) => {
  const { error } = departmentSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const department = new Department();
    department.branchId = req.body.branchId;
    department.deptName = req.body.deptName;
    department.userId = req.body.userId;
    await department.save();
    return res.status(201).json(department);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllDepartment = async (_: Request, res: Response) => {
  try {
    const departmentes = await Department.find();
    return res.json(departmentes);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateDepartment = async (req: Request, res: Response) => {
  const { error } = departmentSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const department = await Department.findOne(req.params.id);
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    department.branchId = req.body.branchId;
    department.deptName = req.body.deptName;
    department.userId = req.body.userId;

    await department.save();
    return res.json(department);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteDepartment = async (req: Request, res: Response) => {
  try {
    const department = await Department.findOne(req.params.id);
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }

    await department.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const departmentById = async (req: Request, res: Response) => {
  try {
    const department = await Department.findOne(req.params.id);
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    return res.json(department);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


