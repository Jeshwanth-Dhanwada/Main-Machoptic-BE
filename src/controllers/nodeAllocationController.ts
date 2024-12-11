import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { NodeAllocation } from "../entity/nodeAllocation";

const NodeAllocationSchema = Joi.object({
  NodeAllocationId:Joi.number(),
  branchId: Joi.string().required(),
  date: Joi.date().required(),
  shiftNumber: Joi.string().required(),
  nodeId: Joi.string().required(),
  empId: Joi.string().required(),
  userId: Joi.string().required(),
});

export const createNodeAllocation = async (req: Request, res: Response) => {
  const { error } = NodeAllocationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const nodeAllocation = new NodeAllocation();
    nodeAllocation.branchId = req.body.branchId;
    nodeAllocation.date = req.body.date;
    nodeAllocation.shiftNumber = req.body.shiftNumber;
    nodeAllocation.nodeId = req.body.nodeId;
    nodeAllocation.empId = req.body.empId;
    nodeAllocation.userId = req.body.userId;

    await nodeAllocation.save();
    return res.status(201).json(nodeAllocation);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllNodeAllocation = async (_: Request, res: Response) => {
  try {
    const nodeAllocation = await NodeAllocation.find();
    return res.json(nodeAllocation);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateNodeAllocation = async (req: Request, res: Response) => {
  const { error } = NodeAllocationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nodeAllocation = await NodeAllocation.findOne(req.params.id);
    if (!nodeAllocation) {
      return res.status(404).json({ error: 'nodeAllocation not found' });
    }
    nodeAllocation.branchId = req.body.branchId;
    nodeAllocation.date = req.body.date;
    nodeAllocation.shiftNumber = req.body.shiftNumber;
    nodeAllocation.nodeId = req.body.nodeId;
    nodeAllocation.empId = req.body.empId;
    nodeAllocation.userId = req.body.userId;

    await nodeAllocation.save();
    return res.json(nodeAllocation);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkNodeAllocation = async (req: Request, res: Response) => {
console.log(123);

  if (req.body.nodeAllocation.length) {
    const nodeAllocation = req.body.nodeAllocation

    let responseData: any = []

    for (let i = 0; i < nodeAllocation.length; i++) {
      const element = nodeAllocation[i];
      const { error } = NodeAllocationSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < nodeAllocation.length; i++) {
        const element = nodeAllocation[i];
        let nodeAllocationUpdateData:any;

        if(element.NodeAllocationId){
          console.log("update");
          nodeAllocationUpdateData = await updateDataNodeAllocation(element)
        }

        else{
          nodeAllocationUpdateData = await createDataNodeAllocation(element)
          console.log("add");
        }

        responseData.push(nodeAllocationUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataNodeAllocation = async (data: any) => {
  const { error } = NodeAllocationSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const nodeAllocation = await NodeAllocation.findOne(data.NodeAllocationById);
    if (!nodeAllocation) {
      return { error: error.details[0].message }
    }

    nodeAllocation.branchId = data.branchId;
    nodeAllocation.date = data.date;
    nodeAllocation.shiftNumber = data.shiftNumber;
    nodeAllocation.nodeId = data.nodeId;
    nodeAllocation.empId = data.empId;
    nodeAllocation.userId = data.userId;
    await nodeAllocation.save();

    return nodeAllocation

  } catch (error) {
    return error
  }
};

const createDataNodeAllocation = async (data: any) => {
  const { error } = NodeAllocationSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const nodeAllocation = new NodeAllocation();
    nodeAllocation.branchId = data.branchId;
    nodeAllocation.date = data.date;
    nodeAllocation.shiftNumber = data.shiftNumber;
    nodeAllocation.nodeId = data.nodeId;
    nodeAllocation.empId = data.empId;
    nodeAllocation.userId = data.userId;
    await nodeAllocation.save();

    return nodeAllocation
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteNodeAllocation = async (req: Request, res: Response) => {
  try {
    const nodeAllocation = await NodeAllocation.findOne(req.params.id);
    if (!nodeAllocation) {
      return res.status(404).json({ error: 'EmpType not found' });
    }

    await nodeAllocation.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const NodeAllocationById = async (req: Request, res: Response) => {
  try {
    const nodeAllocation = await NodeAllocation.findOne(req.params.id);
    if (!nodeAllocation) {
      return res.status(404).json({ error: 'nodeAllocation not found' });
    }
    return res.json(nodeAllocation);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



