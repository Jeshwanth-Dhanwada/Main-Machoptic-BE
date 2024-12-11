import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Maintenance } from "../entity/Maintenance";

const maintenanceSchema = Joi.object({
          MaintenanceId : Joi.string().required(),
          Description : Joi.string().allow('',null),
          MachineId : Joi.string().required(),
          StartDate : Joi.string().required(),
          EndDate : Joi.string().required(),
          userId : Joi.string().required(),
});

export const createMaintenance = async (req: Request, res: Response) => {
  const { error } = maintenanceSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const maintenance = new Maintenance();
          maintenance.MaintenanceId = req.body.MaintenanceId
          maintenance.Description = req.body.Description
          maintenance.MachineId = req.body.MachineId
          maintenance.StartDate = req.body.StartDate
          maintenance.EndDate = req.body.EndDate
          maintenance.userId = req.body.userId
    await maintenance.save();
    return res.status(201).json(maintenance);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateMaintenance = async (req: Request, res: Response) => {
          const { error } = maintenanceSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
          try {
            const maintenance = await Maintenance.findOne(req.params.id);
            if (!maintenance) {
              return res.status(404).json({ error: 'Maintenance not found' });
            }
        
            maintenance.MaintenanceId = req.body.MaintenanceId;
            maintenance.Description = req.body.Description;
            maintenance.MachineId = req.body.MachineId;
            maintenance.StartDate = req.body.StartDate;
            maintenance.EndDate = req.body.EndDate;
            maintenance.userId = req.body.userId;
        
            await maintenance.save();
            return res.json(maintenance);
          }  catch (error) {
            return InternalServerError(res, error);
          }
        };

export const getAllMaintenance = async (_: Request, res: Response) => {
  try {
    const maintenance = await Maintenance.find();
    return res.json(maintenance);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteMaintenance = async (req: Request, res: Response) => {
  try {
    const maintenance = await Maintenance.findOne(req.params.id);
    if (!maintenance) {
      return res.status(404).json({ error: 'maintenance not found' });
    }

    await maintenance.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const MaintenanceById = async (req: Request, res: Response) => {
  try {
    const maintenance = await Maintenance.findOne(req.params.id);
    if (!maintenance) {
      return res.status(404).json({ error: 'maintenance not found' });
    }
    return res.json(maintenance);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};



