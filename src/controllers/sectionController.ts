import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Section } from "../entity/Section";

const sectionSchema = Joi.object({
  branchId: Joi.string().required(),
  deptId: Joi.string().required(),
  userId: Joi.string().required(),
  sectionName: Joi.string().required(),
});

export const createSection = async (req: Request, res: Response) => {
  const { error } = sectionSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const section = new Section();
    section.branchId = req.body.branchId;
    section.deptId = req.body.deptId;
    section.userId = req.body.userId;
    section.sectionName = req.body.sectionName;
    await section.save();
    return res.status(201).json(section);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllSection = async (_: Request, res: Response) => {
  try {
    const sectiones = await Section.find();
    return res.json(sectiones);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateSection = async (req: Request, res: Response) => {
  const { error } = sectionSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const section = await Section.findOne(req.params.id);
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }
    section.branchId = req.body.branchId;
    section.deptId = req.body.deptId;
    section.userId = req.body.userId;
    section.sectionName = req.body.sectionName;

    await section.save();
    return res.json(section);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteSection = async (req: Request, res: Response) => {
  try {
    const section = await Section.findOne(req.params.id);
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }

    await section.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const sectionById = async (req: Request, res: Response) => {
  try {
    const section = await Section.findOne(req.params.id);
    if (!section) {
      return res.status(404).json({ error: 'Section not found' });
    }
    return res.json(section);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

