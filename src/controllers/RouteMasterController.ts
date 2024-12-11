import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { RouteMaster } from "../entity/RouteMaster";

const routeMasterSchema = Joi.object({
  // routeId: Joi.number().required(),
  branchId: Joi.string().required(),
  routeDescription: Joi.string().required(),
  optional: Joi.string().required(),
  productCategory: Joi.string().required(),
  last_updated: Joi.date(),
  timestamp: Joi.date(),
  userId:Joi.string().required()
});

export const createRouteMaster = async (req: Request, res: Response) => {
  const { error } = routeMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const route  = new RouteMaster();
    // route.routeId = req.body.routeId;
    route.branchId = req.body.branchId;
    route.routeDescription = req.body.routeDescription;
    route.optional = req.body.optional;
    route.productCategory = req.body.productCategory;
    route.userId = req.body.userId;
    // route.last_updated = req.body.last_updated;
    // route.timestamp = req.body.timestamp;
    await route.save();
    return res.status(201).json(route);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllRouteMaster = async (_: Request, res: Response) => {
  try {
    const routeMasteres = await RouteMaster.find();
    return res.json(routeMasteres);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateRouteMaster = async (req: Request, res: Response) => {
  const { error } = routeMasterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const route = await RouteMaster.findOne(req.params.id);
    if (!route) {
      return res.status(404).json({ error: 'routeMaster not found' });
    }
    // route.routeId = req.body.routeId;
    route.branchId = req.body.branchId;
    route.routeDescription = req.body.routeDescription;
    route.optional = req.body.optional;
    route.productCategory = req.body.productCategory;
    route.userId = req.body.userId;
    // route.last_updated = req.body.last_updated;
    // route.timestamp = req.body.timestamp;
    await route.save();
    return res.json(route);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteRouteMaster = async (req: Request, res: Response) => {
  try {
    const routeMaster = await RouteMaster.findOne(req.params.id);
    if (!routeMaster) {
      return res.status(404).json({ error: 'routeMaster not found' });
    }

    await routeMaster.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const routeMasterById = async (req: Request, res: Response) => {
  try {
    const routeMaster = await RouteMaster.findOne(req.params.id);
    if (!routeMaster) {
      return res.status(404).json({ error: 'Route master not found' });
    }
    return res.json(routeMaster);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

