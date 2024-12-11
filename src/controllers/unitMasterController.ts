import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { UnitMaster } from "../entity/UnitMaster";

const unitMasterSchema = Joi.object({
  // unitId: Joi.string().required(),
  branchId: Joi.string().required(),
  unitDescription: Joi.string().required(),
  conversionRate: Joi.string().required(),
  refUnitId: Joi.string().required(),
  userId: Joi.string().required(),
});

export const createUnitMaster = async (req: Request, res: Response) => {
  const { error } = unitMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const unitMaster = new UnitMaster();
    // unitMaster.unitId = req.body.unitId;
    unitMaster.branchId = req.body.branchId;
    unitMaster.unitDescription = req.body.unitDescription;
    unitMaster.conversionRate = req.body.conversionRate;
    unitMaster.refUnitId = req.body.refUnitId;
    unitMaster.userId = req.body.userId;
    await unitMaster.save();
    return res.status(201).json(unitMaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllUnitMaster = async (_: Request, res: Response) => {
  try {
    const unitMasteres = await UnitMaster.find();
    return res.json(unitMasteres);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateUnitMaster = async (req: Request, res: Response) => {
  const { error } = unitMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const unitMaster = await UnitMaster.findOne(req.params.id);
    if (!unitMaster) {
      return res.status(404).json({ error: 'unitMaster not found' });
    }

    // unitMaster.unitId = req.body.unitId;
    unitMaster.branchId = req.body.branchId;
    unitMaster.unitDescription = req.body.unitDescription;
    unitMaster.conversionRate = req.body.conversionRate;
    unitMaster.refUnitId = req.body.refUnitId;
    unitMaster.userId = req.body.userId;

    await unitMaster.save();
    return res.json(unitMaster);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteUnitMaster = async (req: Request, res: Response) => {
  try {
    const unitMaster = await UnitMaster.findOne(req.params.id);
    if (!unitMaster) {
      return res.status(404).json({ error: 'unitMaster not found' });
    }

    await unitMaster.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const unitMasterById = async (req: Request, res: Response) => {
  try {
    const unitMaster = await UnitMaster.findOne(req.params.id);
    if (!unitMaster) {
      return res.status(404).json({ error: 'Unit master not found' });
    }
    return res.json(unitMaster);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

