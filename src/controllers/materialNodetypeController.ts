import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { MaterialNodeType } from "../entity/nodeMaterialType";

const materialTypeSchema = Joi.object({
  branchId: Joi.string().required(),
  materialName: Joi.string().required(),
  materialCategoryId: Joi.string().allow(null,''),
  userId: Joi.string().required(),
  // percentageWaste: Joi.number().required(),
});

export const createMaterialType = async (req: Request, res: Response) => {
  const { error } = materialTypeSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const materialType = new MaterialNodeType();
    materialType.branchId = req.body.branchId;
    materialType.materialName = req.body.materialName;
    materialType.materialCategoryId = req.body.materialCategoryId;
    materialType.userId = req.body.userId;
    // materialType.percentageWaste = req.body.percentageWaste;
    await materialType.save();
    return res.status(201).json(materialType);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateMaterialtypes = async (req: Request, res: Response) => {
          const { error } = materialTypeSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
          try {
            const materialType = await MaterialNodeType.findOne(req.params.id);
            if (!materialType) {
              return res.status(404).json({ error: 'MachineType not found' });
            }
        
            materialType.userId = req.body.userId;
            materialType.branchId = req.body.branchId;
            materialType.materialName = req.body.materialName;
            materialType.materialCategoryId = req.body.materialCategoryId;
            // materialType.percentageWaste = req.body.percentageWaste;
        
            await materialType.save();
            return res.json(materialType);
          }  catch (error) {
            return InternalServerError(res, error);
          }
        };

export const getAllMaterialTypes = async (_: Request, res: Response) => {
  try {
    const materialType = await MaterialNodeType.find();
    return res.json(materialType);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteMaterialTypes = async (req: Request, res: Response) => {
  try {
    const materialType = await MaterialNodeType.findOne(req.params.id);
    if (!materialType) {
      return res.status(404).json({ error: 'materialType not found' });
    }

    await materialType.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const materialTypesById = async (req: Request, res: Response) => {
  try {
    const materialType = await MaterialNodeType.findOne(req.params.id);
    if (!materialType) {
      return res.status(404).json({ error: 'materialType not found' });
    }
    return res.json(materialType);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};



