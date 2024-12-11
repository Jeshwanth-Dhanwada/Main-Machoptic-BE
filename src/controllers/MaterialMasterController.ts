import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { MaterialMaster } from "../entity/MaterialMaster";

const matereialMasterSchema = Joi.object({
          Id : Joi.number(),
          MaterialId : Joi.number().required(),
          ProducedQuntity : Joi.number().allow('',null),
          ProducingUnits : Joi.string().allow('',null),
          ConsumedQuantity : Joi.number().allow('',null),
          ConsumingUnits : Joi.string().allow('',null),
          BalanceQuantity : Joi.number().allow('',null),
          EquvalentFGUnits : Joi.string().allow('',null),
          ConversionRate : Joi.number().allow('',null),
          MeasurableUnits : Joi.string().allow('',null),
          branchId : Joi.string().required(),
          userId : Joi.string().required(),
});

export const createMaterialMaster = async (req: Request, res: Response) => {
  const { error } = matereialMasterSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const materialmaster = new MaterialMaster();
    materialmaster.MaterialId = req.body.MaterialId;
    materialmaster.ProducedQuntity = req.body.ProducedQuntity;
    materialmaster.ProducingUnits = req.body.ProducingUnits;
    materialmaster.ConsumedQuantity = req.body.ConsumedQuantity;
    materialmaster.ConsumingUnits = req.body.ConsumingUnits;
    materialmaster.BalanceQuantity = req.body.BalanceQuantity;
    materialmaster.EquvalentFGUnits = req.body.EquvalentFGUnits;
    materialmaster.ConversionRate = req.body.ConversionRate;
    materialmaster.MeasurableUnits = req.body.MeasurableUnits;
    materialmaster.branchId = req.body.branchId;
    materialmaster.userId = req.body.userId;
    await materialmaster.save();
    return res.status(201).json(materialmaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateMaterialMaster = async (req: Request, res: Response) => {
  const { error } = matereialMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const materialmaster = await MaterialMaster.findOne(req.params.id);
    if (!materialmaster) {
      return res.status(404).json({ error: "materialmaster not found" });
    }
    materialmaster.MaterialId = req.body.MaterialId;
    materialmaster.ProducedQuntity = req.body.ProducedQuntity;
    materialmaster.ProducingUnits = req.body.ProducingUnits;
    materialmaster.ConsumedQuantity = req.body.ConsumedQuantity;
    materialmaster.ConsumingUnits = req.body.ConsumingUnits;
    materialmaster.BalanceQuantity = req.body.BalanceQuantity;
    materialmaster.EquvalentFGUnits = req.body.EquvalentFGUnits;
    materialmaster.ConversionRate = req.body.ConversionRate;
    materialmaster.MeasurableUnits = req.body.MeasurableUnits;
    materialmaster.branchId = req.body.branchId;
    materialmaster.userId = req.body.userId;

    await materialmaster.save();
    return res.json(materialmaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllMaterialMaster = async (_: Request, res: Response) => {
  try {
    const materialmaster = await MaterialMaster.find();
    return res.json(materialmaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const MaterialMasterById = async (req: Request, res: Response) => {
  try {
    const materialmaster = await MaterialMaster.findOne(req.params.id);
    if (!materialmaster) {
      return res.status(404).json({ error: "materialmaster not found" });
    }
    return res.json(materialmaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteMaterialMaster = async (req: Request, res: Response) => {
  try {
    const materialmaster = await MaterialMaster.findOne(req.params.id);
    if (!materialmaster) {
      return res.status(404).json({ error: "materialmaster not found" });
    }
    await materialmaster.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkMaterialMaster = async (req: Request, res: Response) => {
  if (req.body.materialmaster.length) {
    const materialmasterData = req.body.materialmaster;
    let responseData: any = [];

    for (let i = 0; i < materialmasterData.length; i++) {
      const element = materialmasterData[i];
      const { error } = matereialMasterSchema.validate(element);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }

    try {
      for (let i = 0; i < materialmasterData.length; i++) {
        const element = materialmasterData[i];
        let machinemasterDataUpdateData: any;

        if (element.Id) {
          machinemasterDataUpdateData = await updateDataMaterialmaster(element);
        } else {
          machinemasterDataUpdateData = await createDataMaterialMaster(element);
        }

        responseData.push(machinemasterDataUpdateData);
      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }
};
export const updateDataMaterialmaster = async (data: any) => {
  const { error } = matereialMasterSchema.validate(data);

  if (error) {
    return { error: error.details[0].message };
  }

  try {
    const materialmaster = await MaterialMaster.findOne(data.Id);
    if (!materialmaster) {
      return { error: " materialmaster not found" };
    }
    materialmaster.MaterialId = data.MaterialId;
    materialmaster.ProducedQuntity = data.ProducedQuntity;
    materialmaster.ProducingUnits = data.ProducingUnits;
    materialmaster.ConsumedQuantity = data.ConsumedQuantity;
    materialmaster.ConsumingUnits = data.ConsumingUnits;
    materialmaster.BalanceQuantity = data.BalanceQuantity;
    materialmaster.EquvalentFGUnits = data.EquvalentFGUnits;
    materialmaster.ConversionRate = data.ConversionRate;
    materialmaster.MeasurableUnits = data.MeasurableUnits;
    materialmaster.branchId = data.branchId;
    materialmaster.userId = data.userId;

    await materialmaster.save();
    return materialmaster;
  } catch (error) {
    return error;
  }
};
export const createDataMaterialMaster = async (data: any) => {
  const { error } = matereialMasterSchema.validate(data);
  if (error) {
    return { error: error.details[0].message };
  }
  try {
    const materialmaster = new MaterialMaster();
    materialmaster.MaterialId = data.MaterialId;
    materialmaster.ProducedQuntity = data.ProducedQuntity;
    materialmaster.ProducingUnits = data.ProducingUnits;
    materialmaster.ConsumedQuantity = data.ConsumedQuantity;
    materialmaster.ConsumingUnits = data.ConsumingUnits;
    materialmaster.BalanceQuantity = data.BalanceQuantity;
    materialmaster.EquvalentFGUnits = data.EquvalentFGUnits;
    materialmaster.ConversionRate = data.ConversionRate;
    materialmaster.MeasurableUnits = data.MeasurableUnits;
    materialmaster.branchId = data.branchId;
    materialmaster.userId = data.userId;

    await materialmaster.save();

    return materialmaster;
  } catch (error) {
    console.log(error);
    return error;
  }
};
