import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { NodeParameter } from "../entity/Nodeparameter";


const nodeParameterSchema = Joi.object({
          branchId: Joi.number().allow('',null),
          nodeId: Joi.number().allow('',null),
          description: Joi.string().allow('',null),
          parameterValue: Joi.number().allow('',null),
          parameterMinValue: Joi.number().allow('',null),
          parameterMaxValue: Joi.number().allow('',null),
          parameterUnits: Joi.string().allow('',null),
          userId: Joi.number().allow('',null),
});

export const createNodeParameter = async (req: Request, res: Response) => {
          const { error } = nodeParameterSchema.validate(req.body);
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
          try {
            const nodeparameter = new NodeParameter();
            nodeparameter.branchId = req.body.branchId;
            nodeparameter.nodeId = req.body.nodeId;
            nodeparameter.description = req.body.description;
            nodeparameter.parameterValue = req.body.parameterValue;
            nodeparameter.parameterMinValue = req.body.parameterMinValue;
            nodeparameter.parameterMaxValue = req.body.parameterMaxValue;
            nodeparameter.parameterUnits = req.body.parameterUnits;
            nodeparameter.userId = req.body.userId;
            await nodeparameter.save();
            return res.status(201).json(nodeparameter);
          } catch (error) {
            return InternalServerError(res, error);
          }
        };

        export const updateNodeParameter = async (req: Request, res: Response) => {
          const { error } = nodeParameterSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
          try {
            const nodeparameter = await NodeParameter.findOne(req.params.id);
            if (!nodeparameter) {
              return res.status(404).json({ error: 'nodeparameter not found' });
            }
        
            // materialType.materialTypeId = req.body.materialTypeId;
            nodeparameter.branchId = req.body.branchId;
            nodeparameter.nodeId = req.body.nodeId;
            nodeparameter.description = req.body.description;
            nodeparameter.parameterValue = req.body.parameterValue;
            nodeparameter.parameterMinValue = req.body.parameterMinValue;
            nodeparameter.parameterMaxValue = req.body.parameterMaxValue;
            nodeparameter.parameterUnits = req.body.parameterUnits;
            nodeparameter.userId = req.body.userId;
        
            await nodeparameter.save();
            return res.json(nodeparameter);
          }  catch (error) {
            return InternalServerError(res, error);
          }
        };
        

export const getAllNodeParameter = async (_: Request, res: Response) => {
          try {
                    const nodeparameter = await NodeParameter.find();
                    return res.json(nodeparameter);
          } catch (error) {
                    return InternalServerError(res, error);
          }
};

export const NodeParameterById = async (req: Request, res: Response) => {
          try {
            const nodeparameter = await NodeParameter.findOne(req.params.id);
            if (!nodeparameter) {
              return res.status(404).json({ error: 'nodeparameter not found' });
            }
            return res.json(nodeparameter);
          } catch (error) {
            return InternalServerError(res, error);
          }
        };

export const deleteNodeParameter = async (req: Request, res: Response) => {
          try {
                    const nodeparameter = await NodeParameter.findOne(req.params.id);
                    if (!nodeparameter) {
                    return res.status(404).json({ error: 'nodeparameter not found' });
                    }
                    await nodeparameter.remove();
                    return res.status(204).end();
          } catch (error) {
                    return InternalServerError(res, error);
          }
};