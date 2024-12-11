import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { EmployeeNodeMapping } from "../entity/EmployeeNodeMapping";
import { Employee } from "../entity/Employee";
import { NodeMaster } from "../entity/NodeMaster";
// import { Shift } from "../entity/Shift";

const employeeNodeMappingSchema = Joi.object({
  empnodemapId: Joi.number(),
  branchId: Joi.string().required(),
  date: Joi.date().required(),
  emp: Joi.number().required(),
  node: Joi.number().required(),
  nodeType: Joi.string().required(),
  default: Joi.string().allow('',null),
  primary: Joi.string().allow('',null),
  userId: Joi.string().required(),
  isActive: Joi.boolean(),
});

export const createEmployeeNodeMapping = async (req: Request, res: Response) => {
  const { error } = employeeNodeMappingSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {

    const employee = await Employee.findOne(req.body.empId);
    const node = await NodeMaster.findOne(req.body.nodeId);
    // const shift = await Shift.findOne(req.body.shiftId);


    const employeeNodeMapping = new EmployeeNodeMapping();
    employeeNodeMapping.branchId = req.body.branchId;
    employeeNodeMapping.date = req.body.date;
    employeeNodeMapping.emp = employee;
    employeeNodeMapping.node = node;
    employeeNodeMapping.nodeType = req.body.nodeType;
    // employeeNodeMapping.empName = req.body.empName;
    employeeNodeMapping.isActive = req.body.isActive;
    employeeNodeMapping.userId = req.body.userId;
    employeeNodeMapping.default = req.body.default;
    employeeNodeMapping.primary = req.body.primary;
    await employeeNodeMapping.save();
    return res.status(201).json(employeeNodeMapping);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllEmployeeNodeMapping = async (_: Request, res: Response) => {
  try {
    // const EmployeeNodeMappings = await EmployeeNodeMapping.find();
    const EmployeeNodeMappings = await EmployeeNodeMapping.find({
      relations: [ "emp", "node"], // Include relations
    });
    // console.log(EmployeeNodeMappings)
    return res.json(EmployeeNodeMappings);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateEmployeeNodeMapping = async (req: Request, res: Response) => {
  const { error } = employeeNodeMappingSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const employeeNodeMappingdata = await EmployeeNodeMapping.findOne(req.params.id);
    if (!EmployeeNodeMapping) {
      return res.status(404).json({ error: 'EmployeeNodeMapping not found' });
    }

    
    const employee = await Employee.findOne(req.body.emp);
    const node = await NodeMaster.findOne(req.body.node);
    // const shift = await Shift.findOne(req.body.shift);


    // const employeeNodeMapping = new EmployeeNodeMapping();
    employeeNodeMappingdata.branchId = req.body.branchId;
    employeeNodeMappingdata.date = req.body.date;
    employeeNodeMappingdata.emp = employee;
    employeeNodeMappingdata.node = node;
    employeeNodeMappingdata.nodeType = req.body.nodeType;
    employeeNodeMappingdata.isActive = req.body.isActive;
    employeeNodeMappingdata.userId = req.body.userId;
    employeeNodeMappingdata.default = req.body.default;
    employeeNodeMappingdata.primary = req.body.primary;
    await employeeNodeMappingdata.save();
    return res.json(employeeNodeMappingdata);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkEmployeeNodeMapping = async (req: Request, res: Response) => {

  if (req.body.employeeNodeMapping.length) {
    const employeeNodeMapData = req.body.employeeNodeMapping
    let responseData: any = []
    
    for (let i = 0; i < employeeNodeMapData.length; i++) {
      const element = employeeNodeMapData[i];
      
      const { error } = employeeNodeMappingSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < employeeNodeMapData.length; i++) {
        const element = employeeNodeMapData[i];
        // console.log("responsedata",element,"responsedata")
        let employeeNodeMapUpdateData: any;

        if (element.empnodemapId) {
          console.log("update");
          employeeNodeMapUpdateData = await updateDataemployeeNodeMap(element)
        }

        else {
          // console.log("*******",element)
          employeeNodeMapUpdateData = await createDataemployeeNodeMap(element)
          console.log("add");
          // console.log(employeeNodeMapUpdateData);
        }

        responseData.push(employeeNodeMapUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataemployeeNodeMap = async (data: any) => {
  const { error } = employeeNodeMappingSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const employeeNodeMappingdata = await EmployeeNodeMapping.findOne(data.empnodemapId);
    if (!EmployeeNodeMapping) {
      return { error: error.details[0].message }
    }
    // console.log(employeeNodeMappingdata)
    
    const employee = await Employee.findOne(data.empId);
    const node = await NodeMaster.findOne(data.nodeId);
    // const shift = await Shift.findOne(data.shift);

    employeeNodeMappingdata.branchId = data.branchId;
    employeeNodeMappingdata.date = data.date;
    employeeNodeMappingdata.emp = employee;
    employeeNodeMappingdata.node = node;
    employeeNodeMappingdata.nodeType = data.nodeType;
    // employeeNodeMappingdata.empName = data.empName;
    employeeNodeMappingdata.isActive = data.isActive;
    employeeNodeMappingdata.userId = data.userId;
    employeeNodeMappingdata.default = data.default;
    employeeNodeMappingdata.primary = data.primary;

    await employeeNodeMappingdata.save();

    return employeeNodeMappingdata

  } catch (error) {
    return error
  }
};

const createDataemployeeNodeMap = async (data: any) => {
  const { error } = employeeNodeMappingSchema.validate(data);
  console.log(data,"++++++++++++++++++++++")
  if (error) {
    return { error: error.details[0].message }
  }

  try {

    // console.log("---------",Employee.findOne(data.empId))
    const employee = await Employee.findOne(data.emp);
    const node = await NodeMaster.findOne(data.node);
    // const shift = await Shift.findOne(data.shift);
    console.log("employee..",data.node)
    console.log("employee..",employee)
    // console.log("node..",node)
    // console.log("shift..",shift)

    const employeeNodeMapping = new EmployeeNodeMapping();

    employeeNodeMapping.branchId = data.branchId;
    employeeNodeMapping.date = data.date;
    employeeNodeMapping.emp = employee;
    employeeNodeMapping.node = node;
    employeeNodeMapping.nodeType = data.nodeType;
    // employeeNodeMapping.empName = data.empName;
    employeeNodeMapping.isActive = data.isActive;
    employeeNodeMapping.userId = data.userId;
    employeeNodeMapping.default = data.default;
    employeeNodeMapping.primary = data.primary;

    await employeeNodeMapping.save();

    return employeeNodeMapping
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteEmployeeNodeMapping = async (req: Request, res: Response) => {
  try {
    const employee = await EmployeeNodeMapping.findOne(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'EmployeeNodeMapping not found' });
    }

    await employee.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const EmployeeNodeMappingById = async (req: Request, res: Response) => {
  try {
    const employee = await EmployeeNodeMapping.findOne(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'EmployeeNodeMapping not found' });
    }
    return res.json(employee);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



