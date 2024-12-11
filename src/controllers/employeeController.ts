import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Employee } from "../entity/Employee";

const employeeSchema = Joi.object({
  userId: Joi.string().required(),
  branchId: Joi.string().required(),
  empTypeId: Joi.string().required(),
  employeeName: Joi.string().required(),
  designation: Joi.string().required(),
  grade: Joi.string().required(),
  dateOfJoining: Joi.date().allow('',null),
  lastDate: Joi.date().allow('', null),
  isActive: Joi.boolean().required(),
  userName: Joi.string().required(),
  password: Joi.string().required(),
  phoneno: Joi.string().allow('',null),
});

export const createEmployee = async (req: Request, res: Response) => {
  const { error } = employeeSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const employee = new Employee();
    employee.userId = req.body.userId;
    employee.branchId = req.body.branchId;
    employee.empTypeId = req.body.empTypeId;
    employee.employeeName = req.body.employeeName;
    employee.designation = req.body.designation;
    employee.grade = req.body.grade;
    employee.dateOfJoining = req.body.dateOfJoining;
    employee.lastDate = req.body.lastDate;
    employee.isActive = req.body.isActive;
    employee.userName = req.body.userName;
    employee.password = req.body.password;
    employee.phoneno = req.body.phoneno;
    await employee.save();
    return res.status(201).json(employee);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllEmployee = async (_: Request, res: Response) => {
  try {
    const Employees = await Employee.find();
    return res.json(Employees);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  const { error } = employeeSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const employee = await Employee.findOne(req.params.id);
    if (!Employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    // employee.empId = req.body.empId;
    employee.branchId = req.body.branchId;
    employee.empTypeId = req.body.empTypeId;
    employee.employeeName = req.body.employeeName;
    employee.designation = req.body.designation;
    employee.grade = req.body.grade;
    employee.dateOfJoining = req.body.dateOfJoining;
    employee.lastDate = req.body.lastDate;
    employee.isActive = req.body.isActive;
    employee.userName = req.body.userName;
    employee.password = req.body.password;
    employee.userId = req.body.userId;
    employee.phoneno = req.body.phoneno;

    await employee.save();
    return res.json(Employee);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findOne(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    await employee.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const employeeById = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findOne(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    return res.json(employee);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};



