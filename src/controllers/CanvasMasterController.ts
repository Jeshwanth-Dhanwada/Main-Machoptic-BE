import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { CanvasMaster } from "../entity/CanvasMaster";

const canvasMasterSchema = Joi.object({
  canvasId: Joi.string().required(),
  branchId: Joi.string().required(),
  width: Joi.string().required(),
  height: Joi.string().required(),
  backgroundColor: Joi.string().required(),
  xGridColor: Joi.string().required(),
  xGridStyle: Joi.string().required(),
  xGridThickness: Joi.string().required(),
  xGridInterval: Joi.string().required(),
  yGridColor: Joi.string().required(),
  yGridStyle: Joi.string().required(),
  yGridThickness: Joi.string().required(),
  yGridInterval: Joi.string().required(),
  process: Joi.string().required(),
});

export const createCanvasMaster = async (req: Request, res: Response) => {
  const { error } = canvasMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const canvasMaster = new CanvasMaster();
    canvasMaster.canvasId = req.body.canvasId;
    canvasMaster.branchId = req.body.branchId;
    canvasMaster.width = req.body.width;
    canvasMaster.height = req.body.height;
    canvasMaster.backgroundColor = req.body.backgroundColor;
    canvasMaster.xGridColor = req.body.xGridColor;
    canvasMaster.xGridStyle = req.body.xGridStyle;
    canvasMaster.xGridThickness = req.body.xGridThickness;
    canvasMaster.xGridInterval = req.body.xGridInterval;
    canvasMaster.yGridColor = req.body.yGridColor;
    canvasMaster.yGridStyle = req.body.yGridStyle;
    canvasMaster.yGridThickness = req.body.yGridThickness;
    canvasMaster.yGridInterval = req.body.yGridInterval;
    canvasMaster.process = req.body.process;
    await canvasMaster.save();
    return res.status(201).json(canvasMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllCanvasMaster = async (_: Request, res: Response) => {
  try {
    const canvasMasteres = await CanvasMaster.find();
    return res.json(canvasMasteres);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateCanvasMaster = async (req: Request, res: Response) => {
  const { error } = canvasMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const canvasMaster = await CanvasMaster.findOne(req.params.id);
    if (!canvasMaster) {
      return res.status(404).json({ error: 'canvasMaster not found' });
    }
    canvasMaster.canvasId = req.body.canvasId;
    canvasMaster.branchId = req.body.branchId;
    canvasMaster.width = req.body.width;
    canvasMaster.height = req.body.height;
    canvasMaster.backgroundColor = req.body.backgroundColor;
    canvasMaster.xGridColor = req.body.xGridColor;
    canvasMaster.xGridStyle = req.body.xGridStyle;
    canvasMaster.xGridThickness = req.body.xGridThickness;
    canvasMaster.xGridInterval = req.body.xGridInterval;
    canvasMaster.yGridColor = req.body.yGridColor;
    canvasMaster.yGridStyle = req.body.yGridStyle;
    canvasMaster.yGridThickness = req.body.yGridThickness;
    canvasMaster.yGridInterval = req.body.yGridInterval;
    canvasMaster.process = req.body.process;
    await canvasMaster.save();
    return res.json(canvasMaster);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteCanvasMaster = async (req: Request, res: Response) => {
  try {
    const canvasMaster = await CanvasMaster.findOne(req.params.id);
    if (!canvasMaster) {
      return res.status(404).json({ error: 'canvasMaster not found' });
    }

    await canvasMaster.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const canvasMasterById = async (req: Request, res: Response) => {
  try {
    const canvasMaster = await CanvasMaster.findOne(req.params.id);
    if (!canvasMaster) {
      return res.status(404).json({ error: 'Canvas master not found' });
    }
    return res.json(canvasMaster);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

