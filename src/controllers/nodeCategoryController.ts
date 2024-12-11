import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { NodeCategory } from "../entity/NodeCategory";

const nodeCategorySchema = Joi.object({
  userId: Joi.string().required(),
  branchId: Joi.string().required(),
  nodeType: Joi.string().required(),
  nodeCategoryName: Joi.string().required(),
  purpose: Joi.string().required(),
});

export const createNodeCategory = async (req: Request, res: Response) => {
  const { error } = nodeCategorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nodeCategory = new NodeCategory();
    nodeCategory.userId = req.body.userId;
    nodeCategory.nodeType = req.body.nodeType;
    nodeCategory.branchId = req.body.branchId;
    nodeCategory.nodeCategoryName = req.body.nodeCategoryName;
    nodeCategory.purpose = req.body.purpose;
    await nodeCategory.save();
    return res.status(201).json(nodeCategory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllNodeCategory = async (_: Request, res: Response) => {
  try {
    const nodeCategoryes = await NodeCategory.find();
    return res.json(nodeCategoryes);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateNodeCategory = async (req: Request, res: Response) => {
  const { error } = nodeCategorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nodeCategory = await NodeCategory.findOne(req.params.id);
    if (!nodeCategory) {
      return res.status(404).json({ error: 'nodeCategory not found' });
    }

    nodeCategory.branchId = req.body.branchId;
    nodeCategory.nodeType = req.body.nodeType;
    nodeCategory.nodeCategoryName = req.body.nodeCategoryName;
    nodeCategory.purpose = req.body.purpose;
    nodeCategory.userId = req.body.userId;


    await nodeCategory.save();
    return res.json(nodeCategory);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteNodeCategory = async (req: Request, res: Response) => {
  try {
    const nodeCategory = await NodeCategory.findOne(req.params.id);
    if (!nodeCategory) {
      return res.status(404).json({ error: 'nodeCategory not found' });
    }

    await nodeCategory.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const nodeCategoryById = async (req: Request, res: Response) => {
  try {
    const nodeCategory = await NodeCategory.findOne(req.params.id);
    if (!nodeCategory) {
      return res.status(404).json({ error: 'Node category not found' });
    }
    return res.json(nodeCategory);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


