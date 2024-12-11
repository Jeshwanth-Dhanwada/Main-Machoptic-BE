import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Spareparts } from "../entity/Spareparts";


const sparePartsSchema = Joi.object({

          Code : Joi.string().allow('',null),
          Name : Joi.string().allow('',null),
          EquipmentCode : Joi.string().allow('',null),
          Amount : Joi.string().allow('',null),
          AgentId : Joi.string().allow('',null),
          photo : Joi.string().allow('',null),
          userId : Joi.string().allow('',null),
});

export const createSpareParts = async (req: Request, res: Response) => {
  const { error } = sparePartsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const spareparts = new Spareparts();
          spareparts.Code =  req.body.Code
          spareparts.Name =  req.body.Name
          spareparts.EquipmentCode =  req.body.EquipmentCode
          spareparts.Amount =  req.body.Amount
          spareparts.AgentId =  req.body.AgentId
          spareparts.photo =  req.body.photo
          spareparts.userId =  req.body.userId

    await spareparts.save();
    return res.status(201).json(spareparts);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateSpareParts = async (req: Request, res: Response) => {
          const { error } = sparePartsSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
          try {
            const spareparts = await Spareparts.findOne(req.params.id);
            if (!spareparts) {
              return res.status(404).json({ error: 'Spareparts not found' });
            }
        
            spareparts.Code = req.body.Code;
            spareparts.Name = req.body.Name;
            spareparts.EquipmentCode = req.body.EquipmentCode;
            spareparts.Amount = req.body.Amount;
            spareparts.AgentId = req.body.AgentId;
            spareparts.photo = req.body.photo;
            spareparts.userId = req.body.userId;
        
            await spareparts.save();
            return res.json(spareparts);
          }  catch (error) {
            return InternalServerError(res, error);
          }
}

export const getAllSpareParts = async (_: Request, res: Response) => {
  try {
    const spareparts = await Spareparts.find();
    return res.json(spareparts);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteSpareParts = async (req: Request, res: Response) => {
  try {
    const spareparts = await Spareparts.findOne(req.params.id);
    if (!spareparts) {
      return res.status(404).json({ error: 'spareparts not found' });
    }

    await spareparts.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const SparepartsById = async (req: Request, res: Response) => {
  try {
    const spareparts = await Spareparts.findOne(req.params.id);
    if (!spareparts) {
      return res.status(404).json({ error: 'spareparts not found' });
    }
    return res.json(spareparts);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};



