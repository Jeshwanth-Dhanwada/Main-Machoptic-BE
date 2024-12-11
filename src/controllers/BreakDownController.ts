import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { BreakDown } from "../entity/BreakDown";

const breakdownSchema = Joi.object({
          BreakDowneId : Joi.string().required(),
          Reason : Joi.string().required(),
          date : Joi.string().required(),
          Department : Joi.number().allow('',null),
          Equipment : Joi.string().required(),
          userId : Joi.string().required(),
});

export const createBreakDown = async (req: Request, res: Response) => {
  const { error } = breakdownSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const breakdown = new BreakDown();
          breakdown.BreakDowneId =  req.body.BreakDowneId
          breakdown.Reason =  req.body.Reason
          breakdown.date =  req.body.date
          breakdown.Department =  req.body.Department
          breakdown.Equipment =  req.body.Equipment
          breakdown.userId =  req.body.userId

    await breakdown.save();
    return res.status(201).json(breakdown);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBreakDown = async (req: Request, res: Response) => {
          const { error } = breakdownSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
          try {
            const breakdown = await BreakDown.findOne(req.params.id);
            if (!breakdown) {
              return res.status(404).json({ error: 'BreakDown not found' });
            }
        
            breakdown.BreakDowneId = req.body.BreakDowneId;
            breakdown.Reason = req.body.Reason;
            breakdown.date = req.body.date;
            breakdown.Department = req.body.Department;
            breakdown.Equipment = req.body.Equipment;
            breakdown.userId = req.body.userId;
        
            await breakdown.save();
            return res.json(breakdown);
          }  catch (error) {
            return InternalServerError(res, error);
          }
}

export const getAllBreakDown = async (_: Request, res: Response) => {
  try {
    const breakdown = await BreakDown.find();
    return res.json(breakdown);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteBreakDown = async (req: Request, res: Response) => {
  try {
    const breakdown = await BreakDown.findOne(req.params.id);
    if (!breakdown) {
      return res.status(404).json({ error: 'breakdown not found' });
    }

    await breakdown.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const BreakDownById = async (req: Request, res: Response) => {
  try {
    const breakdown = await BreakDown.findOne(req.params.id);
    if (!breakdown) {
      return res.status(404).json({ error: 'breakdown not found' });
    }
    return res.json(breakdown);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};



