import * as express from "express";
import {
  createShift, getAllShift, updateShift,deleteShift, shiftById,uploadImage
} from "../controllers/shiftController";
import multer from 'multer';
let router = express.Router();
const authorize = require('../middleware/authorize');
const upload = multer();


router.get("/",getAllShift);
router.post("/", createShift);
router.post('/upload',upload.single('file'), uploadImage);
router.get("/:id",shiftById);
router.put("/:id", updateShift);
router.delete("/:id", deleteShift);


export = router;
