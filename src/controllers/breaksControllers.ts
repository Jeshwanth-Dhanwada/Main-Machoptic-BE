import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Breaks } from "../entity/Breaks";


const breakSchema = Joi.object({

          StartTime: Joi.date().required(),
          EndTime: Joi.date().required(),
          Working: Joi.string().required(),
});

export const createBreaks = async (req: Request, res: Response) => {
  const { error } = breakSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const breaks = new Breaks();
    breaks.StartTime = req.body.StartTime;
    breaks.EndTime = req.body.EndTime;
    breaks.Working = req.body.Working;
    await breaks.save();
    return res.status(201).json(breaks);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllBreaks = async (_: Request, res: Response) => {
  try {
    const breaks = await Breaks.find();
    return res.json(breaks);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBreaks = async (req: Request, res: Response) => {
  const { error } = breakSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const breaks = await Breaks.findOne(req.params.id);
    if (!breaks) {
      return res.status(404).json({ error: 'Breaks not found' });
    }
    breaks.StartTime = req.body.StartTime;
    breaks.EndTime = req.body.EndTime;
    breaks.Working = req.body.Working;

    await breaks.save();
    return res.json(breaks);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteBreaks = async (req: Request, res: Response) => {
  try {
    const breaks = await Breaks.findOne(req.params.id);
    if (!breaks) {
      return res.status(404).json({ error: 'Breaks not found' });
    }

    await breaks.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const BreaksById = async (req: Request, res: Response) => {
  try {
    const breaks = await Breaks.findOne(req.params.id);
    if (!breaks) {
      return res.status(404).json({ error: 'Breaks not found' });
    }
    return res.json(breaks);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


