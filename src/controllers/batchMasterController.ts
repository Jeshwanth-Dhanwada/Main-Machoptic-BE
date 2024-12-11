import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { BatchMaster } from "../entity/BatchMaster";
// import { OA_DETMaster } from "src/entity/OA_DET";
// import { NodeMaster } from "src/entity/NodeMaster";
// import { Shift } from "src/entity/Shift";
// import { ActivityLog } from "src/entity/activitylog";
// import { Employee } from "src/entity/Employee";

const batchSchema = Joi.object({
  id: Joi.number(),
  branchId: Joi.string().allow('', null),
  activityId: Joi.string().allow('', null),
  consumedActivityId: Joi.string().allow('', null),
  nodeId: Joi.string().allow('', null),
  producedAt: Joi.date().allow('', null),
  producedQty1: Joi.number().allow('', null),
  consumedQty1: Joi.number().allow('', null),
  balanceQty1: Joi.number().allow('', null),
  units1: Joi.string().allow('', null),
  producedQty2: Joi.number().allow('', null),
  consumedQty2: Joi.number().allow('', null),
  balanceQty2: Joi.number().allow('', null),
  units2: Joi.string().allow('', null),
  lastConsumedAt: Joi.date().allow('', null),
  fgId: Joi.string().allow('', null),
  producedJobId: Joi.string().allow('', null),
  lastConsumedJobId: Joi.string().allow('', null),
  conversionRate: Joi.number().allow('', null),
  totalProducedQty: Joi.number().allow('', null),
  targetQty: Joi.number().allow('', null),
  outstandingQty: Joi.number().allow('', null),
  userId: Joi.number().allow('', null),
});

export const createBatchMaster = async (req: Request, res: Response) => {
  const { error } = batchSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  console.log(req.body, "BATCH INPUT")
  try {
    const newBatch = new BatchMaster();
    newBatch.branchId = req.body.branchId;
    newBatch.activityId = req.body.activityId;
    newBatch.consumedActivityId = req.body.consumedActivityId;
    newBatch.nodeId = req.body.nodeId;
    newBatch.producedAt = req.body.producedAt;
    newBatch.producedQty1 = req.body.producedQty1;
    newBatch.consumedQty1 = req.body.consumedQty1;
    newBatch.balanceQty1 = req.body.balanceQty1;
    newBatch.units1 = req.body.units1;
    newBatch.producedQty2 = req.body.producedQty2;
    newBatch.consumedQty2 = req.body.consumedQty2;
    newBatch.balanceQty2 = req.body.balanceQty2;
    newBatch.units2 = req.body.units2;
    newBatch.lastConsumedAt = req.body.lastConsumedAt;
    newBatch.fgId = req.body.fgId;
    newBatch.producedJobId = req.body.producedJobId;
    newBatch.lastConsumedJobId = req.body.lastConsumedJobId;
    newBatch.conversionRate = req.body.conversionRate;
    newBatch.totalProducedQty = req.body.totalProducedQty,
      newBatch.targetQty = req.body.targetQty,
      newBatch.outstandingQty = req.body.outstandingQty,
      newBatch.userId = req.body.userId;
    console.log(newBatch);
    await newBatch.save();
    return res.status(201).json(newBatch);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllBatchMaster = async (_: Request, res: Response) => {
  try {
    const newBatch = await BatchMaster.find();
    return res.json(newBatch);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBatchMaster = async (req: Request, res: Response) => {
  const { error } = batchSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const newBatch = await BatchMaster.findOne(req.params.id);
    if (!newBatch) {
      return res.status(404).json({ error: 'newBatch not found' });
    }

    newBatch.branchId = req.body.branchId;
    newBatch.activityId = req.body.activityId;
    newBatch.consumedActivityId = req.body.consumedActivityId;
    newBatch.nodeId = req.body.nodeId;
    newBatch.producedAt = req.body.producedAt;
    newBatch.producedQty1 = req.body.producedQty1;
    newBatch.consumedQty1 = req.body.consumedQty1;
    newBatch.balanceQty1 = req.body.balanceQty1;
    newBatch.units1 = req.body.units1;
    newBatch.producedQty2 = req.body.producedQty2;
    newBatch.consumedQty2 = req.body.consumedQty2;
    newBatch.balanceQty2 = req.body.balanceQty2;
    newBatch.units2 = req.body.units2;
    newBatch.lastConsumedAt = req.body.lastConsumedAt;
    newBatch.fgId = req.body.fgId;
    newBatch.producedJobId = req.body.producedJobId;
    newBatch.lastConsumedJobId = req.body.lastConsumedJobId;
    newBatch.conversionRate = req.body.conversionRate;
    newBatch.totalProducedQty = req.body.totalProducedQty,
      newBatch.targetQty = req.body.targetQty,
      newBatch.outstandingQty = req.body.outstandingQty,
      newBatch.userId = req.body.userId;

    await newBatch.save();
    return res.json(newBatch);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBatchMasterData = async (data: any) => {
  const { error } = batchSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const newBatch = await BatchMaster.findOne(data.id);
    if (!newBatch) {
      return { error: error.details[0].message }
    }
    newBatch.branchId = data.body.branchId;
    newBatch.activityId = data.body.activityId;
    newBatch.consumedActivityId = data.consumedActivityId;
    newBatch.nodeId = data.body.nodeId;
    newBatch.producedAt = data.body.producedAt;
    newBatch.producedQty1 = data.body.producedQty1;
    newBatch.consumedQty1 = data.body.consumedQty1;
    newBatch.balanceQty1 = data.body.balanceQty1;
    newBatch.units1 = data.body.units1;
    newBatch.producedQty2 = data.body.producedQty2;
    newBatch.consumedQty2 = data.body.consumedQty2;
    newBatch.balanceQty2 = data.body.balanceQty2;
    newBatch.units2 = data.body.units2;
    newBatch.lastConsumedAt = data.body.lastConsumedAt;
    newBatch.fgId = data.body.fgId;
    newBatch.producedJobId = data.body.producedJobId;
    newBatch.lastConsumedJobId = data.body.lastConsumedJobId;
    newBatch.conversionRate = data.body.conversionRate;
    newBatch.totalProducedQty = data.body.totalProducedQty,
      newBatch.targetQty = data.body.targetQty,
      newBatch.outstandingQty = data.body.outstandingQty,
      newBatch.userId = data.body.userId;

    await newBatch.save();

    return newBatch

  } catch (error) {
    return error
  }
};

export const updateBulkBatchMaster = async (req: Request, res: Response) => {
  console.log("Incoming");
  if (req.body.newBatch.length) {
    const batchData = req.body.newBatch

    let responseData: any = []

    for (let i = 0; i < batchData.length; i++) {
      const element = batchData[i];
      const { error } = batchSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }
    try {

      for (let i = 0; i < batchData.length; i++) {
        const element = batchData[i];
        const activity = await BatchMaster.findOne({ activityId: element.activityId });
        console.log("ACTIVITYY", activity);
        let batchUpdateData: any;

        if (element.id || activity) {
          console.log("update");
          batchUpdateData = await updateBatchMasterData(element)
        }
        else {
          batchUpdateData = await createBatchMasterData(element)
          console.log("add");
        }
        responseData.push(batchUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};


export const createBatchMasterData = async (data: any) => {
  const { error } = batchSchema.validate(data);
  console.log(data);
  if (error) {
    return { error: error.details[0].message }
  }
  try {
    const newBatch = new BatchMaster();
    newBatch.branchId = data.branchId;
    newBatch.activityId = data.activityId;
    newBatch.consumedActivityId = data.consumedActivityId;
    newBatch.nodeId = data.nodeId;
    newBatch.producedAt = data.producedAt;
    newBatch.producedQty1 = data.producedQty1;
    newBatch.consumedQty1 = data.consumedQty1;
    newBatch.balanceQty1 = data.balanceQty1;
    newBatch.units1 = data.units1;
    newBatch.producedQty2 = data.producedQty2;
    newBatch.consumedQty2 = data.consumedQty2;
    newBatch.balanceQty2 = data.balanceQty2;
    newBatch.units2 = data.units2;
    newBatch.lastConsumedAt = data.lastConsumedAt;
    newBatch.fgId = data.fgId;
    newBatch.producedJobId = data.producedJobId;
    newBatch.lastConsumedJobId = data.lastConsumedJobId;
    newBatch.conversionRate = data.conversionRate;
    newBatch.totalProducedQty = data.totalProducedQty,
      newBatch.targetQty = data.targetQty,
      newBatch.outstandingQty = data.outstandingQty,
      newBatch.userId = data.userId;

    await newBatch.save();

    return newBatch
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteBatchMaster = async (req: Request, res: Response) => {
  try {
    const newBatch = await BatchMaster.findOne(req.params.id);
    if (!newBatch) {
      return res.status(404).json({ error: 'newBatch not found' });
    }

    await newBatch.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const batchById = async (req: Request, res: Response) => {
  try {
    const newBatch = await BatchMaster.findOne(req.params.id);
    if (!newBatch) {
      return res.status(404).json({ error: 'Batch not found' });
    }
    return res.json(newBatch);
  } catch (error) {
    return InternalServerError(res, error);
  }
};
