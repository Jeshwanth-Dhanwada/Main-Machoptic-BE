import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { NodesConfig } from "../entity/NodesConfig";

const nodeCongifSchema = Joi.object({
  width: Joi.string().allow(null, ""),
  height: Joi.string().allow(null, ""),
  borderRadius: Joi.number().allow(null, ""),
  borderColor: Joi.string().allow(null, ""),
  borderThickness: Joi.number().allow(null, ""),
  borderPattern: Joi.string().allow(null, ""),
  nodeColor: Joi.string().allow(null, ""),
  nodeLabel: Joi.string().allow(null, ""),
  labelStyle: Joi.string().allow(null, ""),
  labelSize: Joi.string().allow(null, ""),
  labelPosition: Joi.string().allow(null, ""),
  labelColor: Joi.string().allow(null, ""),
  userId: Joi.string().allow(null, ""),
  modelid: Joi.number().allow(null, ""),
  Collapse: Joi.boolean().allow(null, ""),
});

export const createNodeConfig = async (req: Request, res: Response) => {
  const { error } = nodeCongifSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const nodeconfig = new NodesConfig();
    nodeconfig.width = req.body.width;
    nodeconfig.height = req.body.height;
    nodeconfig.borderRadius = req.body.borderRadius;
    nodeconfig.borderColor = req.body.borderColor;
    nodeconfig.borderThickness = req.body.borderThickness;
    nodeconfig.borderPattern = req.body.borderPattern;
    nodeconfig.nodeColor = req.body.nodeColor;
    nodeconfig.nodeLabel = req.body.nodeLabel;
    nodeconfig.labelStyle = req.body.labelStyle;
    nodeconfig.labelSize = req.body.labelSize;
    nodeconfig.labelPosition = req.body.labelPosition;
    nodeconfig.labelColor = req.body.labelColor;
    nodeconfig.userId = req.body.userId;
    nodeconfig.modelid = req.body.modelid;
    nodeconfig.Collapse = req.body.Collapse;
    await nodeconfig.save();
    return res.status(201).json(nodeconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllNodeConfig = async (_: Request, res: Response) => {
  try {
    const nodeconfig = await NodesConfig.find();
    return res.json(nodeconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateNodeConfig = async (req: Request, res: Response) => {
  const { error } = nodeCongifSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nodeconfig = await NodesConfig.findOne(req.params.nodeId);
    if (!nodeconfig) {
      return res.status(404).json({ error: "nodeconfig not found" });
    }

    nodeconfig.width = req.body.width;
    nodeconfig.height = req.body.height;
    nodeconfig.borderRadius = req.body.borderRadius;
    nodeconfig.borderColor = req.body.borderColor;
    nodeconfig.borderThickness = req.body.borderThickness;
    nodeconfig.borderPattern = req.body.borderPattern;
    nodeconfig.nodeColor = req.body.nodeColor;
    nodeconfig.nodeLabel = req.body.nodeLabel;
    nodeconfig.labelStyle = req.body.labelStyle;
    nodeconfig.labelSize = req.body.labelSize;
    nodeconfig.labelPosition = req.body.labelPosition;
    nodeconfig.labelColor = req.body.labelColor;
    nodeconfig.userId = req.body.userId;
    nodeconfig.modelid = req.body.modelid;
    nodeconfig.Collapse = req.body.Collapse;

    await nodeconfig.save();
    return res.json(nodeconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkNodesConfig = async (req: Request, res: Response) => {
  console.log("Incoming")
  if (req.body.nodeconfig.length) {
    console.log("Incoming")
    const nodeconfigData = req.body.nodeconfig;
    let responseData: any = [];

    for (let i = 0; i < nodeconfigData.length; i++) {
      const element = nodeconfigData[i];
      const { error } = nodeCongifSchema.validate(element);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }

    try {
      for (let i = 0; i < nodeconfigData.length; i++) {
        const element = nodeconfigData[i];
        let nodesconfigUpdateData: any;

        if (element.id) {
          console.log("update");
          nodesconfigUpdateData = await updateDataNodesConfig(element);
        } else {
          nodesconfigUpdateData = await createDataNodesConfig(element);
          console.log("add");
        }

        responseData.push(nodesconfigUpdateData);
      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }
};
export const updateDataNodesConfig = async (data: any) => {
  const { error } = nodeCongifSchema.validate(data);

  if (error) {
    return { error: error.details[0].message };
  }

  try {
    const nodeconfig = await NodesConfig.findOne(data.id);
    if (!nodeconfig) {
      return { error: " nodeconfig not found" };
    }
    nodeconfig.width = data.width;
    nodeconfig.height = data.height;
    nodeconfig.borderRadius = data.borderRadius;
    nodeconfig.borderColor = data.borderColor;
    nodeconfig.borderThickness = data.borderThickness;
    nodeconfig.borderPattern = data.borderPattern;
    nodeconfig.nodeColor = data.nodeColor;
    nodeconfig.nodeLabel = data.nodeLabel;
    nodeconfig.labelStyle = data.labelStyle;
    nodeconfig.labelSize = data.labelSize;
    nodeconfig.labelPosition = data.labelPosition;
    nodeconfig.labelColor = data.labelColor;
    nodeconfig.userId = data.userId;
    nodeconfig.modelid = data.modelid;
    nodeconfig.Collapse = data.Collapse;

    await nodeconfig.save();
    return nodeconfig;
  } catch (error) {
    return error;
  }
};
export const createDataNodesConfig = async (data: any) => {
  const { error } = nodeCongifSchema.validate(data);

  if (error) {
    return { error: error.details[0].message };
  }
  console.log("************", error);
  try {
    const nodesConfig = new NodesConfig();
    nodesConfig.width = data.width;
    nodesConfig.height = data.height;
    nodesConfig.borderRadius = data.borderRadius;
    nodesConfig.borderColor = data.borderColor;
    nodesConfig.borderThickness = data.borderThickness;
    nodesConfig.borderPattern = data.borderPattern;
    nodesConfig.nodeColor = data.nodeColor;
    nodesConfig.nodeLabel = data.nodeLabel;
    nodesConfig.labelStyle = data.labelStyle;
    nodesConfig.labelSize = data.labelSize;
    nodesConfig.labelPosition = data.labelPosition;
    nodesConfig.labelColor = data.labelColor;
    nodesConfig.userId = data.userId;
    nodesConfig.modelid = data.modelid;
    nodesConfig.Collapse = data.Collapse;

    await nodesConfig.save();

    return nodesConfig;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const deleteNodeConfig = async (req: Request, res: Response) => {
  try {
    const nodeconfig = await NodesConfig.findOne(req.params.id);
    if (!nodeconfig) {
      return res.status(404).json({ error: "nodeconfig not found" });
    }

    await nodeconfig.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};
export const nodeConfigById = async (req: Request, res: Response) => {
  try {
    const nodeconfig = await NodesConfig.findOne(req.params.id);
    if (!nodeconfig) {
      return res.status(404).json({ error: "Node master not found" });
    }
    return res.json(nodeconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};
