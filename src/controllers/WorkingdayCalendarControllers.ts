import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { WorkingDayCalendar } from "../entity/WorkingdayCalendar";


const workingdaycalendarSchema = Joi.object({

          StartTime: Joi.date().required(),
          EndTime: Joi.date().required(),
          Working: Joi.string().required(),
});

export const createWorkingDayCalendar = async (req: Request, res: Response) => {
  const { error } = workingdaycalendarSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const workingdaycalendar = new WorkingDayCalendar();
    workingdaycalendar.StartTime = req.body.StartTime;
    workingdaycalendar.EndTime = req.body.EndTime;
    workingdaycalendar.Working = req.body.Working;
    await workingdaycalendar.save();
    return res.status(201).json(workingdaycalendar);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllWorkingDayCalendar = async (_: Request, res: Response) => {
  try {
    const workingdaycalendar = await WorkingDayCalendar.find();
    return res.json(workingdaycalendar);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateWorkingDayCalendar = async (req: Request, res: Response) => {
  const { error } = workingdaycalendarSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const workingdaycalendar = await WorkingDayCalendar.findOne(req.params.id);
    if (!workingdaycalendar) {
      return res.status(404).json({ error: 'WorkingDayCalendar not found' });
    }
    workingdaycalendar.StartTime = req.body.StartTime;
    workingdaycalendar.EndTime = req.body.EndTime;
    workingdaycalendar.Working = req.body.Working;

    await workingdaycalendar.save();
    return res.json(workingdaycalendar);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteWorkingDayCalendar = async (req: Request, res: Response) => {
  try {
    const workingdaycalendar = await WorkingDayCalendar.findOne(req.params.id);
    if (!workingdaycalendar) {
      return res.status(404).json({ error: 'WorkingDayCalendar not found' });
    }

    await workingdaycalendar.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const WorkingDayCalendarById = async (req: Request, res: Response) => {
  try {
    const workingdaycalendar = await WorkingDayCalendar.findOne(req.params.id);
    if (!workingdaycalendar) {
      return res.status(404).json({ error: 'WorkingDayCalendar not found' });
    }
    return res.json(workingdaycalendar);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


