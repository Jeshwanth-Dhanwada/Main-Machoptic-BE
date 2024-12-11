import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { ActivityLog } from "../entity/activitylog";
const { DateTime } = require('luxon');
// import { Employee } from "../entity/Employee";
// import { NodeMaster } from "../entity/NodeMaster";
// import { EmployeeNodeMapping } from "../entity/EmployeeNodeMapping";
// import { getConnection } from "typeorm";
// import { Shift } from "../entity/Shift";
// import { Jobs } from "../entity/Job";
// import { JobAssign } from "../entity/JobAssign";
// import { Batch } from "../entity/Batch";
// import { EdgeMaster } from "../entity/EdgeMaster";

const activityLogSchema = Joi.object({
  branchId: Joi.string().required(),
  activityType: Joi.string().required(),
  date: Joi.date().required(),
  shiftStartTime: Joi.date().required(),
  shiftEndTime: Joi.date().required(),
  nodeId: Joi.string().required(),
  employeeName: Joi.string().required(),
  Shift: Joi.string().required(),
  jobId: Joi.string().allow('', null),
  userId: Joi.string().allow('', null),
  // inputId: Joi.string().required(),
  // outputId: Joi.string().required(),
  // inputQuantity: Joi.array().required(),
  // outputQuantity: Joi.number().required(),
});

// export const createActivitylog = async (req: Request, res: Response) => {
//   const { error } = activityLogSchema.validate(req.body);

//   if (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }

//   try {


//     const employee = await Employee.findOne(req.body.empId);
//     const jobdata = await Jobs.findOne(req.body.jobId);
//     const shiftdata = await Shift.findOne(req.body.shiftId);

//     const job = await getConnection()
//       .getRepository(JobAssign)
//       .createQueryBuilder("jobassign")
//       .leftJoinAndSelect("jobassign.job", "job")
//       .where("job.jobId = :jobId", { jobId: req.body.jobId })
//       .select('node_id')
//       .execute()
//     // const job = await Jobs.findOne(req.body.jobId);

//     const node = await NodeMaster.findOne(job.node_id);

//     // console.log(node, "**");
//     // console.log(employee, "**");
//     // console.log(jobdata, "**");

//     const activitylog = new ActivityLog();
//     activitylog.branchId = req.body.branchId || 1;
//     activitylog.emp = employee.empId;
//     activitylog.node = node.nodeId;
//     activitylog.job = jobdata.jobId;
//     activitylog.shift = shiftdata;
//     activitylog.activityType = req.body.activityType;
//     activitylog.date = req.body.date;
//     activitylog.shiftStartTime = req.body.shiftStartTime;
//     activitylog.shiftEndTime = req.body.shiftEndTime;
//     // activitylog.inputId = req.body.inputId;
//     // activitylog.outputId = req.body.outputId;
//     // activitylog.inputQuantity = "1";
//     // activitylog.outputQuantity = req.body.outputQuantity;

//     await activitylog.save();


//     const outputData = await EdgeMaster
//       .createQueryBuilder("edgeMaster")
//       .where("edgeMaster.source_node_id = :source_node_id", { source_node_id: node.nodeId })
//       .select('target_node_id')
//       .execute();


//     const targetnode = await NodeMaster.findOne(outputData[0].target_node_id);

//     // for produced
//     const producedBatch = new Batch()

//     producedBatch.branchId = req.body.branchId || 1;
//     producedBatch.emp = employee.empId;
//     producedBatch.machineNode = node.nodeId;
//     producedBatch.materialNode = targetnode;
//     producedBatch.date = req.body.date;
//     producedBatch.shift = shiftdata;
//     producedBatch.job = jobdata.jobId;
//     producedBatch.quantity = req.body.outputQuantity;
//     producedBatch.type = "Produced";
//     producedBatch.unit = 1;
//     producedBatch.balanceQuantity = req.body.outputQuantity;
//     producedBatch.activitylog = activitylog;


//     await producedBatch.save();

//     // for consume 

//     for (let i = 0; i < req.body.inputQuantity.length; i++) {
//       let element = req.body.inputQuantity[i];
//       let oldBatchData = await Batch
//         .createQueryBuilder("batch")
//         .where("batch.materialNode = :materialNode", { materialNode: element.materialId })
//         .orderBy('batch.date', 'DESC')
//         .execute();


//       let sourcenode = await NodeMaster.findOne(element.materialId);


//       let consumedBatch = new Batch()
//       consumedBatch.branchId = req.body.branchId || 1;
//       consumedBatch.emp = employee.empId;
//       consumedBatch.machineNode = node.nodeId;
//       consumedBatch.materialNode = sourcenode;
//       consumedBatch.date = req.body.date;
//       consumedBatch.shift = shiftdata;
//       consumedBatch.job = jobdata.jobId;
//       consumedBatch.quantity = element.qty;
//       consumedBatch.type = "Consumed";
//       consumedBatch.unit = 1;
//       consumedBatch.balanceQuantity = oldBatchData[0].batch_balanceQuantity - element.qty;
//       consumedBatch.activitylog = activitylog

//       // console.log(consumedBatch,"final");


//       await consumedBatch.save();



//     }

//     // const inputData = await EdgeMaster
//     //   .createQueryBuilder("edgeMaster")
//     //   .where("edgeMaster.target_node_id = :target_node_id", { target_node_id: node.nodeId })
//     //   .select('source_node_id')
//     //   .execute();


//     return res.status(201).json(activitylog);
//   } catch (error) {
//     return InternalServerError(res, error);
//   }
// };

// function getCurrentShift(shifts: any) {
//   const currentTime = new Date();
//   const currentHours = currentTime.getHours();
//   const currentMinutes = currentTime.getMinutes();

//   return shifts.find((shift: any) => {
//     const [startHour, startMinute] = shift.startTime.split(':');
//     const [endHour, endMinute] = shift.endTime.split(':');

//     // const shiftStart = new Date(0, 0, 0, startHour, startMinute);
//     // const shiftEnd = new Date(0, 0, 0, endHour, endMinute);

//     const currentTimeInMinutes = currentHours * 60 + currentMinutes;
//     const shiftStartInMinutes = parseInt(startHour) * 60 + parseInt(startMinute);
//     const shiftEndInMinutes = parseInt(endHour) * 60 + parseInt(endMinute);

//     return currentTimeInMinutes >= shiftStartInMinutes && currentTimeInMinutes < shiftEndInMinutes;
//   });
// }


// export const getAllBranch = async (_ = Request, res: Response) => {
//   try {
//     const branches = await Branch.find();
//     return res.json(branches);
//   }  catch (error) {
//     return InternalServerError(res, error);
//   }
// };

// export const updateBranch = async (req: Request, res: Response) => {
//   const { error } = branchSchema.validate(req.body);

//   if (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }

//   try {
//     const branch = await Branch.findOne(req.params.id);
//     if (!branch) {
//       return res.status(404).json({ error: 'Branch not found' });
//     }

//     branch.branchId = req.body.branchId;
//     branch.orgId = req.body.orgId;
//     branch.branchName = req.body.branchName;
//     branch.location = req.body.location;
//     branch.address = req.body.address;
//     branch.contactPerson = req.body.contactPerson;
//     branch.contactNumber = req.body.contactNumber;
//     branch.contactEmail = req.body.contactEmail;
//     branch.industry = req.body.industry;

//     await branch.save();
//     return res.json(branch);
//   }  catch (error) {
//     return InternalServerError(res, error);
//   }
// };

// export const deleteBranch = async (req: Request, res: Response) => {
//   try {
//     const branch = await Branch.findOne(req.params.id);
//     if (!branch) {
//       return res.status(404).json({ error: 'Branch not found' });
//     }

//     await branch.remove();
//     return res.status(204).end();
//   } catch (error) {
//     return InternalServerError(res, error);
//   }
// };

// export const branchById = async (req: Request, res: Response) => {
//   try {
//     const branch = await Branch.findOne(req.params.id);
//     if (!branch) {
//       return res.status(404).json({ error: 'Branch not found' });
//     }
//     return res.json(branch);
//   }  catch (error) {
//     return InternalServerError(res, error);
//   }
// };

// export const getInputForActivity = async (req: Request, res: Response) => {
//   try {

//     let response: any = {
//       "JobList": []
//     }
//     let responses: any = {}

//     const shiftList = await Shift.find();

//     let currentshift = getCurrentShift(shiftList)

//     console.log(currentshift);


//     let jobList = await getConnection()
//       .getRepository(EmployeeNodeMapping)
//       .createQueryBuilder("empnode")
//       .leftJoin("empnode.emp", "emp")
//       .leftJoin("empnode.node", "node")
//       .leftJoin("node.jobassign", "jobassign")
//       .leftJoinAndSelect("jobassign.job", "job")
//       .leftJoinAndSelect("job.shift", "shift")
//       .where("emp.empId = :empId", { empId: req.query.empId })
//       .andWhere("shift.shiftId = :shiftId", { shiftId: currentshift.shiftId })
//       .andWhere("node.nodeType = :nodeType", { nodeType: "Machine" })
//       .select('startTime')
//       .addSelect('jobId')
//       .execute()
//     console.log(jobList);


//     if (jobList.length > 0) {
//       response['JobList'] = jobList.map((item: any) => { return item.jobId })
//       response['StartTime'] = jobList[0].startTime

//     }
//     else {
//       response['JobList'] = []
//       response['StartTime'] = ''
//     }


//     responses = await getConnection()
//       .getRepository(EmployeeNodeMapping)
//       .createQueryBuilder("empnode")
//       .leftJoin("empnode.emp", "emp")
//       .leftJoin("empnode.node", "node")
//       .where("emp.empId = :empId", { empId: req.query.empId })
//       .select('node_id')
//       .execute()

//     if (responses.length > 0) {

//       let nodeList = responses.map((item: any) => { return item.node_id })
//       console.log(nodeList);

//       let dateData = await getConnection()
//         .getRepository(ActivityLog)
//         .createQueryBuilder("activity")
//         .leftJoin("activity.emp", "emp")
//         .leftJoin("activity.node", "node")
//         .where("emp.empId = :empId", { empId: req.query.empId })
//         .andWhere("node.nodeId IN (:...nodeList)", { nodeList })
//         .orderBy('activity.date', 'DESC')
//         .select('shiftEndTime')
//         .execute()

//       if (dateData.length > 0) {
//         console.log(1223);

//         response['StartTime'] = dateData[0]['shiftEndTime']
//         // response['JobList'] = responses.
//       }

//     }

//     // const nodeData = await EmployeeNodeMapping.find({'nodeId': req.query.empId});
//     // if (!branch) {
//     //   return res.status(404).json({ error: 'Branch not found' });
//     // }
//     return res.json(response);
//   } catch (error) {
//     return InternalServerError(res, error);
//   }
// };

export const createActivitylogg = async (req: Request, res: Response) => {
  const { error } = activityLogSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {

    const activitylog = new ActivityLog();
    activitylog.branchId = req.body.branchId;
    activitylog.activityType = req.body.activityType;
    activitylog.date = req.body.date
    // activitylog.shiftStartTime = req.body.shiftStartTime
    // activitylog.shiftEndTime = req.body.shiftEndTime

    activitylog.shiftStartTime = (DateTime.fromISO(req.body.shiftStartTime, { zone: 'Asia/Kolkata' })).toISO();
    activitylog.shiftEndTime = (DateTime.fromISO(req.body.shiftEndTime, { zone: 'Asia/Kolkata' })).toISO();
    activitylog.nodeId = req.body.nodeId
    activitylog.employeeName = req.body.employeeName
    activitylog.Shift = req.body.Shift
    activitylog.jobId = req.body.jobId
    activitylog.userId = req.body.userId

    await activitylog.save();
    // console.log("#######",activitylog)
    return res.status(201).json(activitylog);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllActivityLog = async (_: Request, res: Response) => {
  try {
    const activitylog = await ActivityLog.find();
    console.log(activitylog, "********************")
    return res.json(activitylog);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteActivity = async (req: Request, res: Response) => {
  try {
    const activitylog = await ActivityLog.findOne(req.params.id);
    if (!activitylog) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    await activitylog.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};
