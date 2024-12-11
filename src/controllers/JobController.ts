import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Jobs } from "../entity/Job";
import { Shift } from "../entity/Shift";

const JobsSchema = Joi.object({
  branchId: Joi.string().required(),
  date: Joi.date().required(),
  duration: Joi.string().required(),
  jobassign: Joi.string().required(),
  shift: Joi.string().required(),
  // batch: Joi.string().required(),
  // activitylog: Joi.string().required(),
  userId: Joi.string().required(),
  shiftName: Joi.string().required(),
  jobDescription: Joi.string().required(),
});


export const createJobs = async (req: Request, res: Response) => {
  const { error } = JobsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {

    const shift = await Shift.findOne(req.body.shiftId);
    const jobs = new Jobs();
    jobs.branchId = req.body.branchId;
    jobs.date = req.body.date;
    jobs.duration = req.body.duration;
    jobs.shift = shift;
    jobs.shiftName = req.body.shiftName;
    jobs.userId = req.body.userId;
    jobs.jobDescription = req.body.jobDescription;

    await jobs.save();
    return res.status(201).json(jobs);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllJobs = async (_: Request, res: Response) => {
  try {
    const jobs = await Jobs.find();
    return res.json(jobs);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateJobs = async (req: Request, res: Response) => {
  const { error } = JobsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const jobs = await Jobs.findOne(req.params.id);
    if (!jobs) {
      return res.status(404).json({ error: 'jobs not found' });
    }
    const shift = await Shift.findOne(req.body.shiftId);

    jobs.branchId = req.body.branchId;
    jobs.date = req.body.date;
    jobs.shift = shift;
    // jobs.shiftId = req.body.shiftId;
    jobs.userId = req.body.userId;
    jobs.shiftName = req.body.shiftName;
    jobs.duration = req.body.duration;
    jobs.jobDescription = req.body.jobDescription;

    await jobs.save();
    return res.json(jobs);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkJob = async (req: Request, res: Response) => {
  console.log(123);

  if (req.body.jobs.length) {
    const jobsData = req.body.jobs

    let responseData: any = []

    for (let i = 0; i < jobsData.length; i++) {
      const element = jobsData[i];
      const { error } = JobsSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < jobsData.length; i++) {
        const element = jobsData[i];
        let jobUpdateData: any;

        if (element.id) {
          console.log("update");
          jobUpdateData = await updateDataJob(element)
        }

        else {
          jobUpdateData = await createDataJob(element)
          console.log("add");
        }

        responseData.push(jobUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataJob = async (data: any) => {
  const { error } = JobsSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const jobs = await Jobs.findOne(data.id);
    if (!jobs) {
      return { error: error.details[0].message }
    }
    const shift = await Shift.findOne(data.shiftId);

    jobs.branchId = data.branchId;
    jobs.date = data.date;
    jobs.shift = shift
    jobs.duration = data.duration;
    jobs.shiftName = data.shiftName;
    // jobs.shiftId = data.shiftId
    jobs.userId = data.userId
    jobs.jobDescription = data.jobDescription;
    await jobs.save();

    return jobs

  } catch (error) {
    return error
  }
};

const createDataJob = async (data: any) => {
  const { error } = JobsSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const shift = await Shift.findOne(data.shiftId);

    const jobs = new Jobs();
    jobs.branchId = data.branchId;
    jobs.date = data.date;
    jobs.shift = shift
    // jobs.shiftId = data.shiftId
    jobs.userId = data.userId
    jobs.shiftName = data.shiftName;
    jobs.duration = data.duration;
    jobs.jobDescription = data.jobDescription;
    await jobs.save();

    return jobs
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Jobs.findOne(req.params.id);
    if (!jobs) {
      return res.status(404).json({ error: 'EmpType not found' });
    }

    await jobs.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const jobsById = async (req: Request, res: Response) => {
  try {
    const EmpType = await Jobs.findOne(req.params.id);
    if (!EmpType) {
      return res.status(404).json({ error: 'jobs not found' });
    }
    return res.json(EmpType);
  } catch (error) {
    return InternalServerError(res, error);
  }
};