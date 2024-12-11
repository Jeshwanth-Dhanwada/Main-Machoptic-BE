import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { WorkingHourSchedule } from "../entity/workingHourSchedule";


const workingHourScheduleSchema = Joi.object({

          StartTime: Joi.date().required(),
          EndTime: Joi.date().required(),
          Working: Joi.string().required(),
});

export const createWorkingHourSchedule = async (req: Request, res: Response) => {
  const { error } = workingHourScheduleSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const workinghourschedule = new WorkingHourSchedule();
    workinghourschedule.ShiftName = req.body.ShiftName;
    workinghourschedule.StartTime = req.body.StartTime;
    workinghourschedule.EndTime = req.body.EndTime;
    workinghourschedule.Working = req.body.Working;
    await workinghourschedule.save();
    return res.status(201).json(workinghourschedule);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllWorkingHourSchedule = async (_: Request, res: Response) => {
  try {
    const workinghourschedule = await WorkingHourSchedule.find();
    return res.json(workinghourschedule);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateWorkingHourSchedule = async (req: Request, res: Response) => {
  const { error } = workingHourScheduleSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const workinghourschedule = await WorkingHourSchedule.findOne(req.params.id);
    if (!workinghourschedule) {
      return res.status(404).json({ error: 'WorkingHourSchedule not found' });
    }
    workinghourschedule.ShiftName = req.body.ShiftName;
    workinghourschedule.StartTime = req.body.StartTime;
    workinghourschedule.EndTime = req.body.EndTime;
    workinghourschedule.Working = req.body.Working;

    await workinghourschedule.save();
    return res.json(workinghourschedule);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteWorkingHourSchedule = async (req: Request, res: Response) => {
  try {
    const workinghourschedule = await WorkingHourSchedule.findOne(req.params.id);
    if (!workinghourschedule) {
      return res.status(404).json({ error: 'WorkingHourSchedule not found' });
    }

    await workinghourschedule.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const WorkingHourScheduleById = async (req: Request, res: Response) => {
  try {
    const workinghourschedule = await WorkingHourSchedule.findOne(req.params.id);
    if (!workinghourschedule) {
      return res.status(404).json({ error: 'WorkingHourSchedule not found' });
    }
    return res.json(workinghourschedule);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


