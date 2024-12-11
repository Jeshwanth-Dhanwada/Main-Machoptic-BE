import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { MachineMaster } from "../entity/MachineMaster";

const machineMasterSchema = Joi.object({
  Id: Joi.number(),
  MachineId: Joi.number().required(),
  capacity: Joi.string().allow("", null),
  capacityUnits: Joi.string().allow("", null),
  FuelConsumed: Joi.string().allow("", null),
  FuelUnits: Joi.string().allow("", null),
  AllowAccessQuantity: Joi.string().allow("", null),
  PercentagesRejects: Joi.string().allow("", null),
  branchId: Joi.string().required(),
  userId: Joi.string().required(),
});

export const createMachineMaster = async (req: Request, res: Response) => {
  const { error } = machineMasterSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const machinemaster = new MachineMaster();
    machinemaster.MachineId = req.body.MachineId;
    machinemaster.capacity = req.body.capacity;
    machinemaster.capacityUnits = req.body.capacityUnits;
    machinemaster.FuelConsumed = req.body.FuelConsumed;
    machinemaster.FuelUnits = req.body.FuelUnits;
    machinemaster.AllowAccessQuantity = req.body.AllowAccessQuantity;
    machinemaster.PercentagesRejects = req.body.PercentagesRejects;
    machinemaster.branchId = req.body.branchId;
    machinemaster.userId = req.body.userId;
    await machinemaster.save();
    return res.status(201).json(machinemaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateMachineMaster = async (req: Request, res: Response) => {
  const { error } = machineMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const machinemaster = await MachineMaster.findOne(req.params.id);
    if (!machinemaster) {
      return res.status(404).json({ error: "machinemaster not found" });
    }
    machinemaster.MachineId = req.body.MachineId;
    machinemaster.capacity = req.body.capacity;
    machinemaster.capacityUnits = req.body.capacityUnits;
    machinemaster.FuelConsumed = req.body.FuelConsumed;
    machinemaster.FuelUnits = req.body.FuelUnits;
    machinemaster.AllowAccessQuantity = req.body.AllowAccessQuantity;
    machinemaster.PercentagesRejects = req.body.PercentagesRejects;
    machinemaster.branchId = req.body.branchId;
    machinemaster.userId = req.body.userId;

    await machinemaster.save();
    return res.json(machinemaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllMachineMaster = async (_: Request, res: Response) => {
  try {
    const machinemaster = await MachineMaster.find();
    return res.json(machinemaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const MachineMasterById = async (req: Request, res: Response) => {
  try {
    const machinemaster = await MachineMaster.findOne(req.params.id);
    if (!machinemaster) {
      return res.status(404).json({ error: "machinemaster not found" });
    }
    return res.json(machinemaster);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteMachineMaster = async (req: Request, res: Response) => {
  try {
    const machinemaster = await MachineMaster.findOne(req.params.id);
    if (!machinemaster) {
      return res.status(404).json({ error: "machinemaster not found" });
    }
    await machinemaster.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkMachineMaster = async (req: Request, res: Response) => {
  if (req.body.machinemaster.length) {
    const machinemasterData = req.body.machinemaster;
    let responseData: any = [];

    for (let i = 0; i < machinemasterData.length; i++) {
      const element = machinemasterData[i];
      const { error } = machineMasterSchema.validate(element);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }

    try {
      for (let i = 0; i < machinemasterData.length; i++) {
        const element = machinemasterData[i];
        let machinemasterDataUpdateData: any;

        if (element.Id) {
          console.log("update");
          machinemasterDataUpdateData = await updateDataMachinemaster(element);
        } else {
          machinemasterDataUpdateData = await createDataMachineMaster(element);
          console.log("add");
        }

        responseData.push(machinemasterDataUpdateData);
      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }
};
export const updateDataMachinemaster = async (data: any) => {
  const { error } = machineMasterSchema.validate(data);

  if (error) {
    return { error: error.details[0].message };
  }

  try {
    const machinemaster = await MachineMaster.findOne(data.Id);
    if (!machinemaster) {
      return { error: " machinemaster not found" };
    }
    machinemaster.MachineId = data.MachineId
    machinemaster.capacity = data.capacity
    machinemaster.capacityUnits = data.capacityUnits
    machinemaster.FuelConsumed = data.FuelConsumed
    machinemaster.FuelUnits = data.FuelUnits
    machinemaster.AllowAccessQuantity = data.AllowAccessQuantity
    machinemaster.PercentagesRejects = data.PercentagesRejects
    machinemaster.branchId = data.branchId
    machinemaster.userId = data.userId

    await machinemaster.save();
    return machinemaster;
  } catch (error) {
    return error;
  }
};
export const createDataMachineMaster = async (data: any) => {
  const { error } = machineMasterSchema.validate(data);
  if (error) {
    return { error: error.details[0].message };
  }
  try {
    const machinemaster = new MachineMaster();
    machinemaster.MachineId = data.MachineId
    machinemaster.capacity = data.capacity
    machinemaster.capacityUnits = data.capacityUnits
    machinemaster.FuelConsumed = data.FuelConsumed
    machinemaster.FuelUnits = data.FuelUnits
    machinemaster.AllowAccessQuantity = data.AllowAccessQuantity
    machinemaster.PercentagesRejects = data.PercentagesRejects
    machinemaster.branchId = data.branchId
    machinemaster.userId = data.userId

    await machinemaster.save();

    return machinemaster;
  } catch (error) {
    console.log(error);
    return error;
  }
};
