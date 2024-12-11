import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { NodeTypes } from "../entity/nodeTypes";

const nodeTypesSchema = Joi.object({
  NodeTypeById: Joi.number(),
  Type: Joi.string().required(),
  branchId: Joi.string().required(),
  userId: Joi.string().required(),
});

export const createNodeType = async (req: Request, res: Response) => {
  const { error } = nodeTypesSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const nodeType = new NodeTypes();
    nodeType.Type = req.body.Type;
    nodeType.branchId = req.body.branchId;
    nodeType.userId = req.body.userId;

    await nodeType.save();
    return res.status(201).json(nodeType);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllNodeTypes = async (_: Request, res: Response) => {
  try {
    const nodeType = await NodeTypes.find();
    return res.json(nodeType);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateNodeTypes = async (req: Request, res: Response) => {
  const { error } = nodeTypesSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nodeType = await NodeTypes.findOne(req.params.id);
    if (!nodeType) {
      return res.status(404).json({ error: 'nodeType not found' });
    }
    nodeType.Type = req.body.Type;
    nodeType.branchId = req.body.branchId;
    nodeType.userId = req.body.userId;

    await nodeType.save();
    return res.json(nodeType);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkNodeType = async (req: Request, res: Response) => {
console.log(123);
  if (req.body.nodeType.length) {
    const nodeTypeData = req.body.nodeType

    let responseData: any = []

    for (let i = 0; i < nodeTypeData.length; i++) {
      const element = nodeTypeData[i];
      const { error } = nodeTypesSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < nodeTypeData.length; i++) {
        const element = nodeTypeData[i];
        let NodeTypeUpdateData:any;

        if(element.NodeTypeById){
          console.log("update");
          NodeTypeUpdateData = await updateDataNodeType(element)
        }

        else{
          NodeTypeUpdateData = await createDataNodeType(element)
          console.log("add");
        }

        responseData.push(NodeTypeUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataNodeType = async (data: any) => {
  const { error } = nodeTypesSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const nodeType = await NodeTypes.findOne(data.id);
    if (!nodeType) {
      return { error: error.details[0].message }
    }

    nodeType.Type = data.Type;
    nodeType.branchId = data.branchId;
    nodeType.userId = data.userId;
    await nodeType.save();

    return nodeType

  } catch (error) {
    return error
  }
};

const createDataNodeType = async (data: any) => {
  const { error } = nodeTypesSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const nodeType = new NodeTypes();
    nodeType.Type = data.Type;
    nodeType.branchId = data.branchId;
    nodeType.userId = data.userId;
    await nodeType.save();

    return nodeType
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteNodeType = async (req: Request, res: Response) => {
  try {
    const nodeType = await NodeTypes.findOne(req.params.id);
    if (!nodeType) {
      return res.status(404).json({ error: 'nodeType not found' });
    }

    await nodeType.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const NodeTypeById = async (req: Request, res: Response) => {
  try {
    const nodeType = await NodeTypes.findOne(req.params.id);
    if (!nodeType) {
      return res.status(404).json({ error: 'nodeType not found' });
    }
    return res.json(nodeType);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



