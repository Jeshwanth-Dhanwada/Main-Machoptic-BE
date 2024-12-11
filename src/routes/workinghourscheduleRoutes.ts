import * as express from "express";
import {
  createWorkingHourSchedule, getAllWorkingHourSchedule, updateWorkingHourSchedule,deleteWorkingHourSchedule, WorkingHourScheduleById
} from "../controllers/workingHourScheduleControllers";

let router = express.Router();

router.get("/",getAllWorkingHourSchedule);
router.post("/", createWorkingHourSchedule);
router.get("/:id",WorkingHourScheduleById);
router.put("/:id", updateWorkingHourSchedule);
router.delete("/:id", deleteWorkingHourSchedule);


export = router;
