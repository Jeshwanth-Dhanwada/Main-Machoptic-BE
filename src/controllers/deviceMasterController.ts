import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Devices } from "../entity/deviceMater";

const deviceSchema = Joi.object({
          deviceName: Joi.string().required(),
          branchId: Joi.string().required(),
          userId: Joi.string().required(),
});

export const createDevice = async (req: Request, res: Response) => {
  const { error } = deviceSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const device = new Devices();
    device.branchId = req.body.branchId;
    device.deviceName = req.body.deviceName;
    device.userId = req.body.userId;
    await device.save();
    return res.status(201).json(device);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllDevices = async (_: Request, res: Response) => {
  try {
    const menu = await Devices.find();
    return res.json(menu);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateDevices = async (req: Request, res: Response) => {
  const { error } = deviceSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const device = await Devices.findOne(req.params.id);
    if (!device) {
      return res.status(404).json({ error: 'device not found' });
    }
          device.branchId = req.body.branchId;
          device.deviceName = req.body.deviceName;
          device.userId = req.body.userId;
    await device.save();
    return res.json(device);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteDevice = async (req: Request, res: Response) => {
  try {
    const device = await Devices.findOne(req.params.id);
    if (!device) {
      return res.status(404).json({ error: 'device not found' });
    }
    await device.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const deviceById = async (req: Request, res: Response) => {
  try {
    const device = await Devices.findOne(req.params.id);
    if (!device) {
      return res.status(404).json({ error: 'device not found' });
    }
    return res.json(device);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};
        