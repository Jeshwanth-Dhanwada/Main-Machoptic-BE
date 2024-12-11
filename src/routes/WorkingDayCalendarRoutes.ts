import * as express from "express";
import {
  createWorkingDayCalendar, getAllWorkingDayCalendar, updateWorkingDayCalendar,deleteWorkingDayCalendar, WorkingDayCalendarById
} from "../controllers/WorkingdayCalendarControllers";

let router = express.Router();

router.get("/",getAllWorkingDayCalendar);
router.post("/", createWorkingDayCalendar);
router.get("/:id",WorkingDayCalendarById);
router.put("/:id", updateWorkingDayCalendar);
router.delete("/:id", deleteWorkingDayCalendar);


export = router;
