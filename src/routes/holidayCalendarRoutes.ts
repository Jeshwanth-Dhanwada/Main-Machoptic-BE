import * as express from "express";
import {
  createHolidayCalendar, getAllHolidayCalendar, updateHolidayCalendar,deleteHolidayCalendar, HolidayCalendarById
} from "../controllers/HolidayCalendarControllers";

let router = express.Router();

router.get("/",getAllHolidayCalendar);
router.post("/", createHolidayCalendar);
router.get("/:id",HolidayCalendarById);
router.put("/:id", updateHolidayCalendar);
router.delete("/:id", deleteHolidayCalendar);


export = router;
