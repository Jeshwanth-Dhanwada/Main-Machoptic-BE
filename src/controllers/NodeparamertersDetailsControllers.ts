import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { NodeParameterdetails } from "../entity/NodeParamtersDetails";

const nodeparamertersdetailsSchema = Joi.object({
          Value : Joi.number().allow(null,''),
          nodeId : Joi.number().allow('',null),
          ActivityId : Joi.number().allow('',null),
          userId : Joi.string().required(),
});

export const createNodeParametersDetails = async (req: Request, res: Response) => {
  const { error } = nodeparamertersdetailsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const nodeparamertersdetails = new NodeParameterdetails();
          nodeparamertersdetails.Value =  req.body.Value
          nodeparamertersdetails.nodeId =  req.body.nodeId
          nodeparamertersdetails.ActivityId =  req.body.ActivityId
          nodeparamertersdetails.userId =  req.body.userId

    await nodeparamertersdetails.save();
    return res.status(201).json(nodeparamertersdetails);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateNodeParametersDetails = async (req: Request, res: Response) => {
          const { error } = nodeparamertersdetailsSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
          try {
            const nodeparamerters = await NodeParameterdetails.findOne(req.params.id);
            if (!nodeparamerters) {
              return res.status(404).json({ error: 'NodeParameterdetails not found' });
            }
        
            nodeparamerters.Value = req.body.Value;
            nodeparamerters.nodeId = req.body.nodeId;
            nodeparamerters.ActivityId = req.body.ActivityId;
            nodeparamerters.userId = req.body.userId;
        
            await nodeparamerters.save();
            return res.json(nodeparamerters);
          }  catch (error) {
            return InternalServerError(res, error);
          }
}

export const getAllNodeParametersDetails = async (_: Request, res: Response) => {
  try {
    const nodeparamerters = await NodeParameterdetails.find();
    return res.json(nodeparamerters);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteNodeParametersDetails = async (req: Request, res: Response) => {
  try {
    const nodeparamerters = await NodeParameterdetails.findOne(req.params.id);
    if (!nodeparamerters) {
      return res.status(404).json({ error: 'nodeparamerters not found' });
    }
    await nodeparamerters.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const NodeParametersDetailsById = async (req: Request, res: Response) => {
  try {
    const nodeparamerters = await NodeParameterdetails.findOne(req.params.id);
    if (!nodeparamerters) {
      return res.status(404).json({ error: 'nodeparamerters not found' });
    }
    return res.json(nodeparamerters);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};



