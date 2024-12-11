import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { HolidayCalendar } from "../entity/HolidayCalendar";


const HolidayCalendarSchema = Joi.object({

          Date: Joi.date().required(),
          WeekDay: Joi.date().required(),
          Occassion: Joi.string().required(),
          Working: Joi.string().required(),
});

export const createHolidayCalendar = async (req: Request, res: Response) => {
  const { error } = HolidayCalendarSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const holidayCalendar = new HolidayCalendar();
    holidayCalendar.Date = req.body.Date;
    holidayCalendar.WeekDay = req.body.WeekDay;
    holidayCalendar.Occassion = req.body.Occassion;
    holidayCalendar.Working = req.body.Working;
    await holidayCalendar.save();
    return res.status(201).json(holidayCalendar);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllHolidayCalendar = async (_: Request, res: Response) => {
  try {
    const holidayCalendar = await HolidayCalendar.find();
    return res.json(holidayCalendar);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateHolidayCalendar = async (req: Request, res: Response) => {
  const { error } = HolidayCalendarSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const holidayCalendar = await HolidayCalendar.findOne(req.params.id);
    if (!holidayCalendar) {
      return res.status(404).json({ error: 'HolidayCalendar not found' });
    }
    holidayCalendar.Date = req.body.Date;
    holidayCalendar.WeekDay = req.body.WeekDay;
    holidayCalendar.Occassion = req.body.Occassion;
    holidayCalendar.Working = req.body.Working;

    await holidayCalendar.save();
    return res.json(holidayCalendar);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteHolidayCalendar = async (req: Request, res: Response) => {
  try {
    const holidayCalendar = await HolidayCalendar.findOne(req.params.id);
    if (!holidayCalendar) {
      return res.status(404).json({ error: 'HolidayCalendar not found' });
    }

    await holidayCalendar.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const HolidayCalendarById = async (req: Request, res: Response) => {
  try {
    const holidayCalendar = await HolidayCalendar.findOne(req.params.id);
    if (!holidayCalendar) {
      return res.status(404).json({ error: 'HolidayCalendar not found' });
    }
    return res.json(holidayCalendar);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


