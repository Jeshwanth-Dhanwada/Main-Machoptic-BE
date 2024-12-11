import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Shift } from "../entity/Shift";
import multer from "multer";
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now()
    cb(null, `${file.originalname}`)
  }
})

const upload = multer({ storage: storage });

const shiftSchema = Joi.object({
  branchId: Joi.string().required(),
  shiftName: Joi.string().required(),
  shiftNumber: Joi.string().required(),
  startTime: Joi.string().required(),
  endTime: Joi.string().required(),
  userId: Joi.string().required(),
  Working: Joi.string().allow('',null),
});

export const createShift = async (req: Request, res: Response) => {
  try {
    const { error } = shiftSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const shift = new Shift();
    shift.branchId = req.body.branchId;
    shift.shiftName = req.body.shiftName;
    shift.shiftNumber = req.body.shiftNumber;
    shift.startTime = req.body.startTime;
    shift.endTime = req.body.endTime;
    shift.userId = req.body.userId;
    shift.Working = req.body.Working;
    await shift.save();

    return res.status(201).json(shift);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllShift = async (_: Request, res: Response) => {
  try {
    const shifts = await Shift.find();
    return res.json(shifts);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateShift = async (req: Request, res: Response) => {
  try {
    const { error } = shiftSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const shift = await Shift.findOne(req.params.id);
    if (!shift) {
      return res.status(404).json({ error: 'Shift not found' });
    }

    shift.branchId = req.body.branchId;
    shift.shiftName = req.body.shiftName;
    shift.startTime = req.body.startTime;
    shift.endTime = req.body.endTime;
    shift.userId = req.body.userId;
    shift.Working = req.body.Working;

    await shift.save();
    return res.json(shift);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteShift = async (req: Request, res: Response) => {
  try {
    const shift = await Shift.findOne(req.params.id);
    if (!shift) {
      return res.status(404).json({ error: 'Shift not found' });
    }

    await shift.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const shiftById = async (req: Request, res: Response) => {
  try {
    const shift = await Shift.findOne(req.params.id);
    if (!shift) {
      return res.status(404).json({ error: 'Shift not found' });
    }
    return res.json(shift);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const uploadImage = async (req: Request, res: Response) => {
  try {
    // Handle the uploaded file here
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    // Access the uploaded file using req.file
    const fileName = req.file.originalname;
    // Do something with the uploaded file, such as saving it to a database or processing it
    // Send a response indicating successful upload
    res.status(200).json({ message: "File uploaded successfully", filename: fileName });
    console.log(fileName,"****");
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// export const uploadImageMiddleware = upload.single("file");
