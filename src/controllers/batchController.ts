import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Batch } from "../entity/Batch";
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
  shift: Joi.string().allow('', null),
  date: Joi.date().allow('', null),
  MachinenodeId: Joi.number().allow('', null),
  jobId: Joi.string().allow('', null),
  FGID: Joi.string().allow('', null),
  ItemCode: Joi.string().allow('', null),
  MaterialId: Joi.string().allow('', null),
  units1: Joi.string().allow('', null),
  Availablequantity1: Joi.number().allow('', null),
  Consumedquantity1: Joi.number().allow('', null),
  Balancequantity1: Joi.number().allow('', null),
  units2: Joi.string().allow('', null),
  Availablequantity2: Joi.number().allow('', null),
  Consumedquantity2: Joi.number().allow('', null),
  Balancequantity2: Joi.number().allow('', null),
  userId: Joi.number().allow('', null),
});

export const createBatch = async (req: Request, res: Response) => {
  const { error } = batchSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  console.log(req.body, "BATCH INPUT")
  try {
    const newBatch = new Batch();
    newBatch.branchId = req.body.branchId;
    newBatch.activityId = req.body.activityId;
    newBatch.consumedActivityId = req.body.consumedActivityId;
    newBatch.shift = req.body.shift;
    newBatch.date = req.body.date;
    newBatch.MachinenodeId = req.body.MachinenodeId;
    newBatch.jobId = req.body.jobId;
    newBatch.FGID = req.body.FGID;
    newBatch.ItemCode = req.body.ItemCode;
    newBatch.MaterialId = req.body.MaterialId;
    newBatch.units1 = req.body.units1;
    newBatch.Availablequantity1 = req.body.Availablequantity1;
    newBatch.Consumedquantity1 = req.body.Consumedquantity1;
    newBatch.Balancequantity1 = req.body.Balancequantity1;
    newBatch.units2 = req.body.units2;
    newBatch.Availablequantity2 = req.body.Availablequantity2;
    newBatch.Consumedquantity2 = req.body.Consumedquantity2;
    newBatch.Balancequantity2 = req.body.Balancequantity2;
    newBatch.userId = req.body.userId;
    await newBatch.save();
    return res.status(201).json(newBatch);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllBatch = async (_: Request, res: Response) => {
  try {
    const newBatch = await Batch.find();
    return res.json(newBatch);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBatch = async (req: Request, res: Response) => {
  const { error } = batchSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const newBatch = await Batch.findOne(req.params.id);
    if (!newBatch) {
      return res.status(404).json({ error: 'newBatch not found' });
    }

    newBatch.id = req.body.id;
    newBatch.branchId = req.body.branchId;
    newBatch.activityId = req.body.activityId;
    newBatch.consumedActivityId = req.body.consumedActivityId;
    newBatch.shift = req.body.shift;
    newBatch.date = req.body.date;
    newBatch.MachinenodeId = req.body.MachinenodeId;
    newBatch.jobId = req.body.jobId;
    newBatch.FGID = req.body.FGID;
    newBatch.ItemCode = req.body.ItemCode;
    newBatch.MaterialId = req.body.MaterialId;
    newBatch.units1 = req.body.units1;
    newBatch.Availablequantity1 = req.body.Availablequantity1;
    newBatch.Consumedquantity1 = req.body.Consumedquantity1;
    newBatch.Balancequantity1 = req.body.Balancequantity1;
    newBatch.units2 = req.body.units2;
    newBatch.Availablequantity2 = req.body.Availablequantity2;
    newBatch.Consumedquantity2 = req.body.Consumedquantity2;
    newBatch.Balancequantity2 = req.body.Balancequantity2;
    newBatch.userId = req.body.userId;

    await newBatch.save();
    return res.json(newBatch);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

// export const updateBulkBatch = async (req: Request, res: Response) => {
//   console.log(123);
//   if (req.body.newBatch.length) {
//     const batchData = req.body.newBatch

//     let responseData: any = []

//     for (let i = 0; i < batchData.length; i++) {
//       const element = batchData[i];
//       const { error } = batchSchema.validate(element);

//       if (error) {
//         return res.status(400).json({ error: error.details[0].message });
//       }
//     }

//     try {

//       for (let i = 0; i < batchData.length; i++) {
//         const element = batchData[i];
//         let BatchUpdateData: any;

//         if (element.id) {
//           console.log("update");
//           BatchUpdateData = await updateBatchData(element)
//         }

//         else {
//           BatchUpdateData = await createBatchData(element)
//           console.log("add");
//         }

//         responseData.push(BatchUpdateData);

//       }
//       return res.status(201).json(responseData);
//     } catch (error) {
//       return InternalServerError(res, error);
//     }
//   }

// };

export const updateBulkBatch = async (req: Request, res: Response) => {
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
        const activity = await Batch.findOne({ activityId: element.activityId });
        console.log("ACTIVITYY", activity);
        let batchUpdateData: any;

        if (element.id || activity) {
          console.log("update");
          batchUpdateData = await updateBatchData(element)
        }
        else {
          batchUpdateData = await createBatchData(element)
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

// export const updateBatchData = async (data: any) => {
//   const { error } = batchSchema.validate(data);

//   if (error) {
//     return { error: error.details[0].message }
//   }

//   try {
//     const newBatch = await Batch.findOne(data.id);
//     if (!newBatch) {
//       return { error: error.details[0].message }
//     }
//     newBatch.branchId = data.branchId;
//     newBatch.activityId = data.activityId;
//     newBatch.consumedActivityId = data.consumedActivityId;
//     newBatch.shift = data.shift;
//     newBatch.date = data.date;
//     newBatch.MachinenodeId = data.MachinenodeId;
//     newBatch.jobId = data.jobId;
//     newBatch.FGID = data.FGID;
//     newBatch.ItemCode = data.ItemCode;
//     newBatch.MaterialId = data.MaterialId;
//     newBatch.units1 = data.units1;
//     newBatch.Availablequantity1 = data.Availablequantity1;
//     newBatch.Consumedquantity1 = data.Consumedquantity1;
//     newBatch.Balancequantity1 = data.Balancequantity1;
//     newBatch.units2 = data.units2;
//     newBatch.Availablequantity2 = data.Availablequantity2;
//     newBatch.Consumedquantity2 = data.Consumedquantity2;
//     newBatch.Balancequantity2 = data.Balancequantity2;
//     newBatch.userId = data.userId;

//     await newBatch.save();

//     return newBatch

//   } catch (error) {
//     return error
//   }
// };

export const updateBatchData = async (data: any) => {
  const { error } = batchSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const newBatch = await Batch.findOne({ activityId: data.activityId });
    if (!newBatch) {
      return { error: ' batch not found' }
    }
    newBatch.branchId = data.branchId;
    newBatch.activityId = data.activityId;
    newBatch.consumedActivityId = data.consumedActivityId;
    newBatch.shift = data.shift;
    newBatch.date = data.date;
    newBatch.MachinenodeId = data.MachinenodeId;
    newBatch.jobId = data.jobId;
    newBatch.FGID = data.FGID;
    newBatch.ItemCode = data.ItemCode;
    newBatch.MaterialId = data.MaterialId;
    newBatch.units1 = data.units1;
    newBatch.Availablequantity1 = data.Availablequantity1;
    newBatch.Consumedquantity1 = data.Consumedquantity1;
    newBatch.Balancequantity1 = data.Balancequantity1;
    newBatch.units2 = data.units2;
    newBatch.Availablequantity2 = data.Availablequantity2;
    newBatch.Consumedquantity2 = data.Consumedquantity2;
    newBatch.Balancequantity2 = data.Balancequantity2;
    newBatch.userId = data.userId;

    await newBatch.save();
    return newBatch

  } catch (error) {
    return error
  }
};

// export const createBatchData = async (data: any) => {
//   const { error } = batchSchema.validate(data);

//   if (error) {
//     return { error: error.details[0].message }
//   }
//   try {
//     const newBatch = new Batch();
//     newBatch.branchId = data.branchId;
//     newBatch.activityId = data.activityId;
//     newBatch.consumedActivityId = data.consumedActivityId;
//     newBatch.shift = data.shift;
//     newBatch.date = data.date;
//     newBatch.MachinenodeId = data.MachinenodeId;
//     newBatch.jobId = data.jobId;
//     newBatch.FGID = data.FGID;
//     newBatch.ItemCode = data.ItemCode;
//     newBatch.MaterialId = data.MaterialId;
//     newBatch.units1 = data.units1;
//     newBatch.Availablequantity1 = data.Availablequantity1;
//     newBatch.Consumedquantity1 = data.Consumedquantity1;
//     newBatch.Balancequantity1 = data.Balancequantity1;
//     newBatch.units2 = data.units2;
//     newBatch.Availablequantity2 = data.Availablequantity2;
//     newBatch.Consumedquantity2 = data.Consumedquantity2;
//     newBatch.Balancequantity2 = data.Balancequantity2;
//     newBatch.userId = data.userId;

//     await newBatch.save();

//     return newBatch
//   } catch (error) {
//     console.log(error)
//     return error
//   }
// };

export const createBatchData = async (data: any) => {
  const { error } = batchSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }
  console.log("************", error)
  try {
    const newBatch = new Batch();
    newBatch.branchId = data.branchId;
    newBatch.activityId = data.activityId;
    newBatch.consumedActivityId = data.consumedActivityId;
    newBatch.shift = data.shift;
    newBatch.date = data.date;
    newBatch.MachinenodeId = data.MachinenodeId;
    newBatch.jobId = data.jobId;
    newBatch.FGID = data.FGID;
    newBatch.ItemCode = data.ItemCode;
    newBatch.MaterialId = data.MaterialId;
    newBatch.units1 = data.units1;
    newBatch.Availablequantity1 = data.Availablequantity1;
    newBatch.Consumedquantity1 = data.Consumedquantity1;
    newBatch.Balancequantity1 = data.Balancequantity1;
    newBatch.units2 = data.units2;
    newBatch.Availablequantity2 = data.Availablequantity2;
    newBatch.Consumedquantity2 = data.Consumedquantity2;
    newBatch.Balancequantity2 = data.Balancequantity2;
    newBatch.userId = data.userId;
    await newBatch.save();

    return newBatch
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteBatch = async (req: Request, res: Response) => {
  try {
    const newBatch = await Batch.findOne(req.params.id);
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
    const newBatch = await Batch.findOne(req.params.id);
    if (!newBatch) {
      return res.status(404).json({ error: 'Batch not found' });
    }
    return res.json(newBatch);
  } catch (error) {
    return InternalServerError(res, error);
  }
};
