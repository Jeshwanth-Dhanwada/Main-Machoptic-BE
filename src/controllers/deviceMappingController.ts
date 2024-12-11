import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { DeviceMapping } from "../entity/deviceMapping";

const deviceMappingSchema = Joi.object({
          deviceId: Joi.string().required(),
          nodeId: Joi.string().required(),
          branchId: Joi.string().required(),
          userId: Joi.string().required(),
});

export const createDeviceMapping = async (req: Request, res: Response) => {
  const { error } = deviceMappingSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const deviceMapping = new DeviceMapping();
    deviceMapping.deviceId = req.body.deviceId;
    deviceMapping.nodeId = req.body.nodeId;
    deviceMapping.branchId = req.body.branchId;
    deviceMapping.userId = req.body.userId;
    await deviceMapping.save();
    return res.status(201).json(deviceMapping);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllDeviceMapping = async (_: Request, res: Response) => {
  try {
    const menu = await DeviceMapping.find();
    return res.json(menu);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateDeviceMapping = async (req: Request, res: Response) => {
  const { error } = deviceMappingSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const deviceMapping = await DeviceMapping.findOne(req.params.id);
    if (!deviceMapping) {
      return res.status(404).json({ error: 'deviceMapping not found' });
    }
          deviceMapping.branchId = req.body.branchId;
          deviceMapping.deviceId = req.body.deviceId;
          deviceMapping.userId = req.body.userId;
          deviceMapping.nodeId = req.body.nodeId;
    await deviceMapping.save();
    return res.json(deviceMapping);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteDeviceMapping = async (req: Request, res: Response) => {
  try {
    const deviceMapping = await DeviceMapping.findOne(req.params.id);
    if (!deviceMapping) {
      return res.status(404).json({ error: 'deviceMapping not found' });
    }
    await deviceMapping.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const deviceMappingById = async (req: Request, res: Response) => {
  try {
    const deviceMapping = await DeviceMapping.findOne(req.params.id);
    if (!deviceMapping) {
      return res.status(404).json({ error: 'deviceMapping not found' });
    }
    return res.json(deviceMapping);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};
        
export const updateBulkdeviceMapping = async (req: Request, res: Response) => {
  console.log("device...")
  if (req.body.deviceMapping.length) {
    const deviceMappingData = req.body.deviceMapping
    console.log(deviceMappingData,"device")
    let responseData: any = []

    for (let i = 0; i < deviceMappingData.length; i++) {
      const element = deviceMappingData[i];
      const { error } = deviceMappingSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < deviceMappingData.length; i++) {
        const element = deviceMappingData[i];
        let deviceMappingUpdateData: any;

        if (element.Id) {
          console.log("update");
          deviceMappingUpdateData = await updatedeviceMappingData(element)
        }

        else {
          deviceMappingUpdateData = await createdeviceMappingData(element)
          console.log("add");
        }

        responseData.push(deviceMappingUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updatedeviceMappingData = async (data: any) => {
  const { error } = deviceMappingSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const deviceMapping = await DeviceMapping.findOne(data.Id);
    if (!deviceMapping) {
      return { error: 'DeviceMapping not found' }
    }
    deviceMapping.deviceId = data.deviceId;
    deviceMapping.nodeId = data.nodeId;
    deviceMapping.branchId = data.branchId;
    deviceMapping.userId = data.userId;

    await deviceMapping.save();
    return deviceMapping

  } catch (error) {
    return error
  }
};

const createdeviceMappingData = async (data: any) => {
  const { error } = deviceMappingSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }
  try {
    const deviceMapping = new DeviceMapping();
    deviceMapping.deviceId = data.deviceId;
    deviceMapping.nodeId = data.nodeId;
    deviceMapping.branchId = data.branchId;
    deviceMapping.userId = data.userId;
    await deviceMapping.save();

    return deviceMapping
  } catch (error) {
    console.log(error)
    return error
  }
};