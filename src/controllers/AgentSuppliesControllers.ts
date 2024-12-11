import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Agentsupplies } from "../entity/AgentSupplies";

const agentSuppliesSchema = Joi.object({
          FullName : Joi.string().required(),
          Address : Joi.string().required(),
          Phone : Joi.string().allow('',null),
          Email : Joi.string().required(),
          Notes : Joi.string().required(),
          userId : Joi.string().required(),
});

export const createSupplies = async (req: Request, res: Response) => {
  const { error } = agentSuppliesSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const agentsupplies = new Agentsupplies();
          agentsupplies.FullName =  req.body.FullName
          agentsupplies.Address =  req.body.Address
          agentsupplies.Phone =  req.body.Phone
          agentsupplies.Email =  req.body.Email
          agentsupplies.Notes =  req.body.Notes
          agentsupplies.userId =  req.body.userId

    await agentsupplies.save();
    return res.status(201).json(agentsupplies);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateSupplies = async (req: Request, res: Response) => {
          const { error } = agentSuppliesSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
          try {
            const agentsupplies = await Agentsupplies.findOne(req.params.id);
            if (!agentsupplies) {
              return res.status(404).json({ error: 'Agentsupplies not found' });
            }
        
            agentsupplies.FullName = req.body.FullName;
            agentsupplies.Address = req.body.Address;
            agentsupplies.Phone = req.body.Phone;
            agentsupplies.Email = req.body.Email;
            agentsupplies.Notes = req.body.Notes;
            agentsupplies.userId = req.body.userId;
        
            await agentsupplies.save();
            return res.json(agentsupplies);
          }  catch (error) {
            return InternalServerError(res, error);
          }
}

export const getAllSupplies = async (_: Request, res: Response) => {
  try {
    const agentsupplies = await Agentsupplies.find();
    return res.json(agentsupplies);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteSupplies = async (req: Request, res: Response) => {
  try {
    const agentsupplies = await Agentsupplies.findOne(req.params.id);
    if (!agentsupplies) {
      return res.status(404).json({ error: 'agentsupplies not found' });
    }

    await agentsupplies.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const SuppliesById = async (req: Request, res: Response) => {
  try {
    const agentsupplies = await Agentsupplies.findOne(req.params.id);
    if (!agentsupplies) {
      return res.status(404).json({ error: 'agentsupplies not found' });
    }
    return res.json(agentsupplies);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};



