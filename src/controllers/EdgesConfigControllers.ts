import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { EdgesConfig } from "../entity/EdgeConfig";



const edgeCongifSchema = Joi.object({
  EdgeColor: Joi.string().allow(null,''),
  EdgeThickness: Joi.number().allow(null,''),
  EdgeArrow: Joi.string().allow(null,''),
  EdgeStyle: Joi.string().allow(null,''),
  EdgeAnimation: Joi.boolean().allow('', null),
  EdgeShape: Joi.string().allow('', null),
  EdgeTitle: Joi.string().allow('', null),
  EdgeTitleSize: Joi.number().allow('', null),
  EdgeTitleAglinment: Joi.string().allow('', null),
  EdgeTitleColor: Joi.string().allow('', null),
  EdgeTitleFontStyle: Joi.string().allow('', null),
  EdgeTitlePosition: Joi.string().allow('', null),
  EdgeType: Joi.string().allow('', null),
  userId: Joi.string().allow('', null),
  
});


export const createEdgeConfig = async (req: Request, res: Response) => {
  const { error } = edgeCongifSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    
    const edgeconfig = new EdgesConfig();
    edgeconfig.EdgeColor = req.body.EdgeColor;
    edgeconfig.EdgeThickness = req.body.EdgeThickness;
    edgeconfig.EdgeArrow = req.body.EdgeArrow;
    edgeconfig.EdgeStyle = req.body.EdgeStyle;
    edgeconfig.EdgeAnimation = req.body.EdgeAnimation;
    edgeconfig.EdgeShape = req.body.EdgeShape;
    edgeconfig.EdgeTitle = req.body.EdgeTitle;
    edgeconfig.EdgeTitleSize = req.body.EdgeTitleSize;
    edgeconfig.EdgeTitleAglinment = req.body.EdgeTitleAglinment;
    edgeconfig.EdgeTitleColor = req.body.EdgeTitleColor;
    edgeconfig.EdgeTitleFontStyle = req.body.EdgeTitleFontStyle;
    edgeconfig.EdgeTitlePosition = req.body.EdgeTitlePosition;
    edgeconfig.EdgeType = req.body.EdgeType;
    edgeconfig.userId = req.body.userId
    await edgeconfig.save();
    return res.status(201).json(edgeconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllEdgeConfig = async (_: Request, res: Response) => {
  try {
    const edgeconfig = await EdgesConfig.find();
    return res.json(edgeconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateEdgeConfig = async (req: Request, res: Response) => {

  const { error } = edgeCongifSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const edgeconfig = await EdgesConfig.findOne(req.params.nodeId);
    if (!edgeconfig) {
      return res.status(404).json({ error: 'edgeconfig not found' });
    }

    edgeconfig.EdgeColor = req.body.EdgeColor;
    edgeconfig.EdgeThickness = req.body.EdgeThickness;
    edgeconfig.EdgeArrow = req.body.EdgeArrow;
    edgeconfig.EdgeStyle = req.body.EdgeStyle;
    edgeconfig.EdgeAnimation = req.body.EdgeAnimation;
    edgeconfig.EdgeShape = req.body.EdgeShape;
    edgeconfig.EdgeTitle = req.body.EdgeTitle;
    edgeconfig.EdgeTitleSize = req.body.EdgeTitleSize;
    edgeconfig.EdgeTitleAglinment = req.body.EdgeTitleAglinment;
    edgeconfig.EdgeTitleColor = req.body.EdgeTitleColor;
    edgeconfig.EdgeTitleFontStyle = req.body.EdgeTitleFontStyle;
    edgeconfig.EdgeTitlePosition = req.body.EdgeTitlePosition;
    edgeconfig.EdgeType = req.body.EdgeType;
    edgeconfig.userId = req.body.userId

    await edgeconfig.save();
    return res.json(edgeconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkEdgeConfig = async (req: Request, res: Response) => {
  console.log("Incoming");
  if (req.body.edgeconfig.length) {
    const EdgeConfigData = req.body.edgeconfig

    let responseData: any = []

    for (let i = 0; i < EdgeConfigData.length; i++) {
      const element = EdgeConfigData[i];
      const { error } = edgeCongifSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }
    try {

      for (let i = 0; i < EdgeConfigData.length; i++) {
        const element = EdgeConfigData[i];
        let edgeconfigUpdateData: any;

        if (element.id) {
          console.log("update");
          edgeconfigUpdateData = await updateEdgeConfigData(element)
        }
        else {
          edgeconfigUpdateData = await createEdgeConfigData(element)
          console.log("add");
        }
        responseData.push(edgeconfigUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

export const updateEdgeConfigData = async (data: any) => {
  const { error } = edgeCongifSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const edgeconfig = await EdgesConfig.findOne(data.id);
    if (!edgeconfig) {
      return { error: ' batch not found' }
    }
    edgeconfig.EdgeColor = data.EdgeColor;
    edgeconfig.EdgeThickness = data.EdgeThickness;
    edgeconfig.EdgeArrow = data.EdgeArrow;
    edgeconfig.EdgeStyle = data.EdgeStyle;
    edgeconfig.EdgeAnimation = data.EdgeAnimation;
    edgeconfig.EdgeShape = data.EdgeShape;
    edgeconfig.EdgeTitle = data.EdgeTitle;
    edgeconfig.EdgeTitleSize = data.EdgeTitleSize;
    edgeconfig.EdgeTitleAglinment = data.EdgeTitleAglinment;
    edgeconfig.EdgeTitleColor = data.EdgeTitleColor;
    edgeconfig.EdgeTitleFontStyle = data.EdgeTitleFontStyle;
    edgeconfig.EdgeTitlePosition = data.EdgeTitlePosition;
    edgeconfig.EdgeType = data.EdgeType;
    edgeconfig.userId = data.userId;

    await edgeconfig.save();
    return edgeconfig

  } catch (error) {
    return error
  }
};

export const createEdgeConfigData = async (data: any) => {
  const { error } = edgeCongifSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }
  console.log("************", error)
  try {
    const edgeconfig = new EdgesConfig();
    edgeconfig.EdgeColor = data.EdgeColor;
    edgeconfig.EdgeThickness = data.EdgeThickness;
    edgeconfig.EdgeArrow = data.EdgeArrow;
    edgeconfig.EdgeStyle = data.EdgeStyle;
    edgeconfig.EdgeAnimation = data.EdgeAnimation;
    edgeconfig.EdgeShape = data.EdgeShape;
    edgeconfig.EdgeTitle = data.EdgeTitle;
    edgeconfig.EdgeTitleSize = data.EdgeTitleSize;
    edgeconfig.EdgeTitleAglinment = data.EdgeTitleAglinment;
    edgeconfig.EdgeTitleColor = data.EdgeTitleColor;
    edgeconfig.EdgeTitleFontStyle = data.EdgeTitleFontStyle;
    edgeconfig.EdgeTitlePosition = data.EdgeTitlePosition;
    edgeconfig.EdgeType = data.EdgeType;
    edgeconfig.userId = data.userId;
    await edgeconfig.save();

    return edgeconfig
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteEdgeConfig = async (req: Request, res: Response) => {
  try {
    const edgeconfig = await EdgesConfig.findOne(req.params.id);
    if (!edgeconfig) {
      return res.status(404).json({ error: 'edgeconfig not found' });
    }

    await edgeconfig.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const edgeConfigById = async (req: Request, res: Response) => {
  try {
    const edgeconfig = await EdgesConfig.findOne(req.params.id);
    if (!edgeconfig) {
      return res.status(404).json({ error: 'edgeconfig not found' });
    }
    return res.json(edgeconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

