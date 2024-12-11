import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Branch } from "../entity/Branch";

const branchSchema = Joi.object({
  userId: Joi.string().required(),
  orgId: Joi.string().required(),
  branchName: Joi.string().required(),
  location: Joi.string().required(),
  address: Joi.string().required(),
  contactPerson: Joi.string().required(),
  contactNumber: Joi.string().required(),
  contactEmail: Joi.string().email().required(),
  industry: Joi.string().required(),
});

export const createBranch = async (req: Request, res: Response) => {
  const { error } = branchSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const branch = new Branch();
    branch.userId = req.body.userId;
    branch.orgId = req.body.orgId;
    branch.branchName = req.body.branchName;
    branch.location = req.body.location;
    branch.address = req.body.address;
    branch.contactPerson = req.body.contactPerson;
    branch.contactNumber = req.body.contactNumber;
    branch.contactEmail = req.body.contactEmail;
    branch.industry = req.body.industry;
    await branch.save();
    return res.status(201).json(branch);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllBranch = async (_: Request, res: Response) => {
  try {
    const branches = await Branch.find();
    return res.json(branches);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBranch = async (req: Request, res: Response) => {
  const { error } = branchSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const branch = await Branch.findOne(req.params.id);
    if (!branch) {
      return res.status(404).json({ error: 'Branch not found' });
    }

    branch.userId = req.body.userId;
    branch.orgId = req.body.orgId;
    branch.branchName = req.body.branchName;
    branch.location = req.body.location;
    branch.address = req.body.address;
    branch.contactPerson = req.body.contactPerson;
    branch.contactNumber = req.body.contactNumber;
    branch.contactEmail = req.body.contactEmail;
    branch.industry = req.body.industry;

    await branch.save();
    return res.json(branch);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteBranch = async (req: Request, res: Response) => {
  try {
    const branch = await Branch.findOne(req.params.id);
    if (!branch) {
      return res.status(404).json({ error: 'Branch not found' });
    }

    await branch.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const branchById = async (req: Request, res: Response) => {
  try {
    const branch = await Branch.findOne(req.params.id);
    if (!branch) {
      return res.status(404).json({ error: 'Branch not found' });
    }
    return res.json(branch);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};





