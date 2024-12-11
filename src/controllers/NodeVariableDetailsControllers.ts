import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { NodeVariabledetails } from "../entity/nodeVariableDetails";

const nodevariabledetailsSchema = Joi.object({
          Value : Joi.number().allow('',null),
          nodeId : Joi.number().allow('',null),
          ActivityId : Joi.number().allow('',null),
          userId : Joi.string().required(),
});

export const createNodeVariableDetails = async (req: Request, res: Response) => {
  const { error } = nodevariabledetailsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nodevariabledetails = new NodeVariabledetails();
          nodevariabledetails.Value =  req.body.Value
          nodevariabledetails.nodeId =  req.body.nodeId
          nodevariabledetails.ActivityId =  req.body.ActivityId
          nodevariabledetails.userId =  req.body.userId

    await nodevariabledetails.save();
    return res.status(201).json(nodevariabledetails);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateNodeVariableDetails = async (req: Request, res: Response) => {
          const { error } = nodevariabledetailsSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
          try {
            const nodevariabledetails = await NodeVariabledetails.findOne(req.params.id);
            if (!nodevariabledetails) {
              return res.status(404).json({ error: 'NodeVariabledetails not found' });
            }
        
            nodevariabledetails.Value = req.body.Value;
            nodevariabledetails.nodeId = req.body.nodeId;
            nodevariabledetails.ActivityId = req.body.ActivityId;
            nodevariabledetails.userId = req.body.userId;
        
            await nodevariabledetails.save();
            return res.json(nodevariabledetails);
          }  catch (error) {
            return InternalServerError(res, error);
          }
}

export const getAllNodeVariableDetails = async (_: Request, res: Response) => {
  try {
    const nodevariabledetails = await NodeVariabledetails.find();
    return res.json(nodevariabledetails);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteNodeVariableDetails = async (req: Request, res: Response) => {
  try {
    const nodevariabledetails = await NodeVariabledetails.findOne(req.params.id);
    if (!nodevariabledetails) {
      return res.status(404).json({ error: 'nodevariabledetails not found' });
    }
    await nodevariabledetails.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const NodeVariableDetailsById = async (req: Request, res: Response) => {
  try {
    const nodevariabledetails = await NodeVariabledetails.findOne(req.params.id);
    if (!nodevariabledetails) {
      return res.status(404).json({ error: 'nodevariabledetails not found'});
    }
    return res.json(nodevariabledetails);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};



