import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Attendance } from "../entity/attendance";

const AttendanceSchema = Joi.object({
  attendanceId:Joi.number(),
  branchId: Joi.string().required(),
  date: Joi.date().required(),
  shiftId: Joi.string().required(),
  empId: Joi.string().required(),
  userId: Joi.string().required(),
  default: Joi.string().required(),
  allocated: Joi.string().required(),
});

export const createAttendance = async (req: Request, res: Response) => {
  const { error } = AttendanceSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const attendance = new Attendance();
    attendance.branchId = req.body.branchId;
    attendance.date = req.body.date;
    attendance.shiftId = req.body.shiftId;
    attendance.empId = req.body.empId;
    attendance.userId = req.body.userId;
    attendance.default = req.body.default;
    attendance.allocated = req.body.allocated;

    await attendance.save();
    return res.status(201).json(attendance);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllAttendance = async (_: Request, res: Response) => {
  try {
    const AttendanceSchema = await Attendance.find();
    return res.json(AttendanceSchema);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateAttendance = async (req: Request, res: Response) => {
  const { error } = AttendanceSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const attendance = await Attendance.findOne(req.params.id);
    if (!attendance) {
      return res.status(404).json({ error: 'attendance not found' });
    }
    attendance.branchId = req.body.branchId;
    attendance.date = req.body.date;
    attendance.shiftId = req.body.shiftId;
    attendance.empId = req.body.empId;
    attendance.userId = req.body.userId;
    attendance.default = req.body.default;
    attendance.allocated = req.body.allocated;

    await attendance.save();
    return res.json(attendance);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkAttendance = async (req: Request, res: Response) => {
  if (req.body.attendance.length) {
    const attendanceData = req.body.attendance
    
    let responseData: any = []

    for (let i = 0; i < attendanceData.length; i++) {
      const element = attendanceData[i];
      const { error } = AttendanceSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }
    try {
      for (let i = 0; i < attendanceData.length; i++) {
        const element = attendanceData[i];
        let attendanceUpdateData:any;

        if(element.attendanceId){
          console.log("update");
          attendanceUpdateData = await updateDataAttendance(element)
          console.log(attendanceData);

        }

        else{
          attendanceUpdateData = await createDataAttendance(element)
          console.log("add");
        }

        responseData.push(attendanceUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataAttendance = async (data: any) => {
  const { error } = AttendanceSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const attendance = await Attendance.findOne(data.id);
    if (!attendance) {
      return { error: error.details[0].message }
    }

    attendance.branchId = data.branchId;
    attendance.date = data.date;
    attendance.shiftId = data.shiftId;
    attendance.empId = data.empId;
    attendance.userId = data.userId;
    attendance.default = data.default;
    attendance.allocated = data.allocated;
    await attendance.save();

    return attendance

  } catch (error) {
    return error
  }
};

const createDataAttendance = async (data: any) => {
  const { error } = AttendanceSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }
  try {
    const attendance = new Attendance();
    attendance.branchId = data.branchId;
    attendance.date = data.date;
    attendance.shiftId = data.shiftId;
    attendance.empId = data.empId;
    attendance.userId = data.userId;
    attendance.default = data.default;
    attendance.allocated = data.allocated;
    await attendance.save();

    return attendance
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteAttendance = async (req: Request, res: Response) => {
  try {
    const attendance = await Attendance.findOne(req.params.id);
    if (!attendance) {
      return res.status(404).json({ error: 'EmpType not found' });
    }

    await attendance.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const AttendanceById = async (req: Request, res: Response) => {
  try {
    const attendance = await Attendance.findOne(req.params.id);
    if (!attendance) {
      return res.status(404).json({ error: 'attendance not found' });
    }
    return res.json(attendance);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



