import * as express from "express";
import { BreakDownById, createBreakDown, deleteBreakDown, getAllBreakDown, updateBreakDown } from "../controllers/BreakDownController";

let router = express.Router();

router.get("/",getAllBreakDown);
router.post("/" ,createBreakDown);
router.get("/:id",BreakDownById);
router.put("/:id", updateBreakDown);
router.delete("/:id", deleteBreakDown);


export = router;
