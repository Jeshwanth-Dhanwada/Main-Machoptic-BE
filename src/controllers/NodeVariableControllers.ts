import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { NodeVariable } from "../entity/Nodevariable";


const nodeVariableSchema = Joi.object({
          branchId: Joi.number().allow('',null),
          nodeId: Joi.number().allow('',null),
          description: Joi.string().allow('',null),
          variableValue: Joi.number().allow('',null),
          variableMinValue: Joi.number().allow('',null),
          variableMaxValue: Joi.number().allow('',null),
          variableUnits: Joi.string().allow('',null),
          userId: Joi.number().allow('',null),
});

export const createNodeVariable = async (req: Request, res: Response) => {
          const { error } = nodeVariableSchema.validate(req.body);
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
          try {
            const nodevariable = new NodeVariable();
            nodevariable.branchId = req.body.branchId;
            nodevariable.nodeId = req.body.nodeId;
            nodevariable.description = req.body.description;
            nodevariable.variableValue = req.body.variableValue;
            nodevariable.variableMinValue = req.body.variableMinValue;
            nodevariable.variableMaxValue = req.body.variableMaxValue;
            nodevariable.variableUnits = req.body.variableUnits;
            nodevariable.userId = req.body.userId;
            await nodevariable.save();
            return res.status(201).json(nodevariable);
          } catch (error) {
            return InternalServerError(res, error);
          }
        };

export const updateNodeVariable = async (req: Request, res: Response) => {
const { error } = nodeVariableSchema.validate(req.body);

if (error) {
          return res.status(400).json({ error: error.details[0].message });
}

try {
          const nodevariable = await NodeVariable.findOne(req.params.id);
          if (!nodevariable) {
          return res.status(404).json({ error: 'nodevariable not found' });
          }
          nodevariable.branchId = req.body.branchId;
          nodevariable.nodeId = req.body.nodeId;
          nodevariable.description = req.body.description;
          nodevariable.variableValue = req.body.variableValue;
          nodevariable.variableMinValue = req.body.variableMinValue;
          nodevariable.variableMaxValue = req.body.variableMaxValue;
          nodevariable.variableUnits = req.body.variableUnits;
          nodevariable.userId = req.body.userId;

          await nodevariable.save();
          return res.json(nodevariable);
}  catch (error) {
          return InternalServerError(res, error);
}
};
        

export const getAllNodeVariable = async (_: Request, res: Response) => {
          try {
                    const nodevariable = await NodeVariable.find();
                    return res.json(nodevariable);
          } catch (error) {
                    return InternalServerError(res, error);
          }
};

export const NodeVariableById = async (req: Request, res: Response) => {
          try {
            const nodevariable = await NodeVariable.findOne(req.params.id);
            if (!nodevariable) {
              return res.status(404).json({ error: 'nodevariable not found' });
            }
            return res.json(nodevariable);
          } catch (error) {
            return InternalServerError(res, error);
          }
        };

export const deleteNodeVariable = async (req: Request, res: Response) => {
          try {
                    const nodevariable = await NodeVariable.findOne(req.params.id);
                    if (!nodevariable) {
                    return res.status(404).json({ error: 'nodevariable not found' });
                    }
                    await nodevariable.remove();
                    return res.status(204).end();
          } catch (error) {
                    return InternalServerError(res, error);
          }
};