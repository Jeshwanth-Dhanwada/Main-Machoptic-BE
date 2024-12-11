import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { CanvasConfig } from "../entity/CanvasConfig";



const canvasCongifSchema = Joi.object({
  BackgroundColor: Joi.string().allow(null,''),
  Pattern: Joi.string().allow(null,''),
  TextSize: Joi.number().allow(null,''),
  FontStyle: Joi.string().allow(null,''),
  userId: Joi.string().allow('', null)
});


export const createCanvasConfig = async (req: Request, res: Response) => {
  const { error } = canvasCongifSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    
    const canvasconfig = new CanvasConfig();
    canvasconfig.BackgroundColor = req.body.BackgroundColor;
    canvasconfig.Pattern = req.body.Pattern;
    canvasconfig.TextSize = req.body.TextSize;
    canvasconfig.FontStyle = req.body.FontStyle;
    canvasconfig.userId = req.body.userId;
    await canvasconfig.save();
    return res.status(201).json(canvasconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllCanvasConfig = async (_: Request, res: Response) => {
  try {
    const canvasconfig = await CanvasConfig.find();
    return res.json(canvasconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateCanvasConfig = async (req: Request, res: Response) => {

  const { error } = canvasCongifSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const canvasconfig = await CanvasConfig.findOne(req.params.nodeId);
    if (!canvasconfig) {
      return res.status(404).json({ error: 'canvasconfig not found' });
    }

    canvasconfig.BackgroundColor = req.body.BackgroundColor;
    canvasconfig.Pattern = req.body.Pattern;
    canvasconfig.TextSize = req.body.TextSize;
    canvasconfig.FontStyle = req.body.FontStyle;
    canvasconfig.userId = req.body.userId;

    await canvasconfig.save();
    return res.json(canvasconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteCanvasConfig = async (req: Request, res: Response) => {
  try {
    const canvasconfig = await CanvasConfig.findOne(req.params.id);
    if (!canvasconfig) {
      return res.status(404).json({ error: 'canvasconfig not found' });
    }

    await canvasconfig.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const canvasConfigById = async (req: Request, res: Response) => {
  try {
    const canvasconfig = await CanvasConfig.findOne(req.params.id);
    if (!canvasconfig) {
      return res.status(404).json({ error: 'canvasconfig not found' });
    }
    return res.json(canvasconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

