import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { JobAssign } from "../entity/JobAssign";
import { NodeMaster } from "../entity/NodeMaster";
// import { Jobs } from "../entity/Job";
import { Shift } from "../entity/Shift";

const JobAssignSchema = Joi.object({
  branchId: Joi.string().required(),
  date: Joi.date().required(),
  shift: Joi.string().required(),
  node: Joi.string().required(),
  status: Joi.string().required(),
  routeId: Joi.string().required(),
  userId: Joi.string().required(),
  jobId: Joi.string().required(),
  totalProducedQty: Joi.number().allow('',null),
  outstandingQty: Joi.number().allow('',null),
  targetQty: Joi.number().allow('',null),
  priority: Joi.number().allow('',null),
});

export const createJobAssign = async (req: Request, res: Response) => {
  const { error } = JobAssignSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {

    const node = await NodeMaster.findOne(req.body.nodeId);
    // const job = await Jobs.findOne(req.body.jobId);
    const shift = await Shift.findOne(req.body.shiftId);

    const jobAssign = new JobAssign();
    jobAssign.branchId = req.body.branchId;
    jobAssign.date = req.body.date;
    jobAssign.shift = shift;
    jobAssign.node = node;
    jobAssign.userId = req.body.userId;
    jobAssign.routeId = req.body.routeId;
    jobAssign.status = req.body.status;
    jobAssign.jobId = req.body.jobId;
    jobAssign.totalProducedQty = req.body.totalProducedQty,
    jobAssign.outstandingQty = req.body.outstandingQty,
    jobAssign.targetQty = req.body.targetQty,
    jobAssign.priority = req.body.priority,

      await jobAssign.save();
    return res.status(201).json(jobAssign);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllJobAssign = async (_: Request, res: Response) => {
  try {
    // const jobAssign = await JobAssign.find();
    const jobAssign = await JobAssign.find({
      relations: ["shift", "node"], // Include relations
    });
    return res.json(jobAssign);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateJobAssign = async (req: Request, res: Response) => {
  const { error } = JobAssignSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const jobAssign = await JobAssign.findOne(req.params.id);
    if (!jobAssign) {
      return res.status(404).json({ error: 'jobAssign not found' });
    }

    const node = await NodeMaster.findOne(req.body.node);
    // const job = await Jobs.findOne(req.body.job);
    const shift = await Shift.findOne(req.body.shift);

    jobAssign.branchId = req.body.branchId;
    jobAssign.date = req.body.date;
    jobAssign.shift = shift;
    jobAssign.node = node;
    jobAssign.routeId = req.body.routeId;
    jobAssign.userId = req.body.userId;
    jobAssign.status = req.body.status;
    jobAssign.jobId = req.body.jobId;
    jobAssign.totalProducedQty = req.body.totalProducedQty,
    jobAssign.outstandingQty = req.body.outstandingQty,
    jobAssign.targetQty = req.body.targetQty,
    jobAssign.priority = req.body.priority,


      await jobAssign.save();
    return res.json(jobAssign);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkJobAssign = async (req: Request, res: Response) => {
  console.log(123);
  if (req.body.jobAssign.length) {
    const jobAssignData = req.body.jobAssign

    let responseData: any = []

    for (let i = 0; i < jobAssignData.length; i++) {
      const element = jobAssignData[i];
      const { error } = JobAssignSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < jobAssignData.length; i++) {
        const element = jobAssignData[i];
        let jobAssignUpdateData: any;

        if (element.id) {
          console.log("update");
          jobAssignUpdateData = await updateDataJobAssign(element)
        }

        else {
          jobAssignUpdateData = await createDataJobAssign(element)
          console.log("add");
        }

        responseData.push(jobAssignUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataJobAssign = async (data: any) => {
  const { error } = JobAssignSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const jobAssign = await JobAssign.findOne(data.id);
    if (!jobAssign) {
      return { error: error.details[0].message }
    }

    const node = await NodeMaster.findOne(data.node);
    // const job = await Jobs.findOne(data.job);
    const shift = await Shift.findOne(data.shift);

    jobAssign.branchId = data.branchId;
    jobAssign.date = data.date;
    jobAssign.shiftName = shift;
    jobAssign.node = node;
    jobAssign.userId = data.userId;
    jobAssign.routeId = data.routeId;
    jobAssign.status = data.status;
    jobAssign.jobId = data.jobId;
    jobAssign.totalProducedQty = data.totalProducedQty,
    jobAssign.outstandingQty = data.outstandingQty,
    jobAssign.targetQty = data.body.targetQty,
    jobAssign.priority = data.body.priority,

      await jobAssign.save();

    return jobAssign

  } catch (error) {
    return error
  }
};

const createDataJobAssign = async (data: any) => {
  const { error } = JobAssignSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {

    const node = await NodeMaster.findOne(data.node);
    // const job = await Jobs.findOne(data.job);
    const shift = await Shift.findOne(data.shift);

    const jobAssign = new JobAssign();
    jobAssign.branchId = data.branchId;
    jobAssign.date = data.date;
    jobAssign.shift = shift;
    jobAssign.node = node;
    jobAssign.routeId = data.routeId;
    jobAssign.userId = data.userId;
    jobAssign.status = data.status;
    jobAssign.jobId = data.jobId;
    jobAssign.totalProducedQty = data.totalProducedQty,
    jobAssign.outstandingQty = data.outstandingQty,
    jobAssign.targetQty = data.targetQty,
    jobAssign.priority = data.priority,

      await jobAssign.save();

    return jobAssign
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteJobAssign = async (req: Request, res: Response) => {
  try {
    const jobAssign = await JobAssign.findOne(req.params.id);
    if (!jobAssign) {
      return res.status(404).json({ error: 'EmpType not found' });
    }

    await jobAssign.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const jobAssignById = async (req: Request, res: Response) => {
  try {
    const jobAssign = await JobAssign.findOne(req.params.id);
    if (!jobAssign) {
      return res.status(404).json({ error: 'jobAssign not found' });
    }
    return res.json(jobAssign);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



