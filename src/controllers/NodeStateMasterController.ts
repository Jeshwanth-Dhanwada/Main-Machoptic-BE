import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { NodeStateMaster } from "../entity/NodeStateMaster";

const nodeStateMasterSchema = Joi.object({
  stateId: Joi.string().required(),
  branchId: Joi.string().required(),
  dateTime: Joi.date().allow(null),
  shiftId: Joi.string().required(),
  nodeId: Joi.string().required(),
  state: Joi.string().required(),
});

export const createNodeStateMaster = async (req: Request, res: Response) => {
  const { error } = nodeStateMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nodeStateMaster = new NodeStateMaster();
    nodeStateMaster.stateId = req.body.stateId;
    nodeStateMaster.branchId = req.body.branchId;
    nodeStateMaster.dateTime = req.body.dateTime;
    nodeStateMaster.shiftId = req.body.shiftId;
    nodeStateMaster.nodeId = req.body.nodeId;
    nodeStateMaster.state = req.body.state;
    await nodeStateMaster.save();
    return res.status(201).json(nodeStateMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllNodeStateMaster = async (_: Request, res: Response) => {
  try {
    const nodeStateMasteres = await NodeStateMaster.find();
    return res.json(nodeStateMasteres);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateNodeStateMaster = async (req: Request, res: Response) => {
  const { error } = nodeStateMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nodeStateMaster = await NodeStateMaster.findOne(req.params.id);
    if (!nodeStateMaster) {
      return res.status(404).json({ error: 'nodeStateMaster not found' });
    }

    nodeStateMaster.stateId = req.body.stateId;
    nodeStateMaster.branchId = req.body.branchId;
    nodeStateMaster.dateTime = req.body.dateTime;
    nodeStateMaster.shiftId = req.body.shiftId;
    nodeStateMaster.nodeId = req.body.nodeId;
    nodeStateMaster.state = req.body.state;

    await nodeStateMaster.save();
    return res.json(nodeStateMaster);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteNodeStateMaster = async (req: Request, res: Response) => {
  try {
    const nodeStateMaster = await NodeStateMaster.findOne(req.params.id);
    if (!nodeStateMaster) {
      return res.status(404).json({ error: 'nodeStateMaster not found' });
    }

    await nodeStateMaster.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const nodeStateMasterById = async (req: Request, res: Response) => {
  try {
    const nodeStateMaster = await NodeStateMaster.findOne(req.params.id);
    if (!nodeStateMaster) {
      return res.status(404).json({ error: 'Node state master not found' });
    }
    return res.json(nodeStateMaster);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


