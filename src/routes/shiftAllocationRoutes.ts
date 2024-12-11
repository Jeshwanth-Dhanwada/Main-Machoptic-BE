import * as express from "express";
import {
  createShiftAllocation, getAllShiftAllocation, updateShiftAllocation,deleteShiftAllocation, shiftAllocationById
} from "../controllers/shiftallocationController";

let router = express.Router();

router.get("/", getAllShiftAllocation);
router.post("/", createShiftAllocation);
router.get("/:id", shiftAllocationById);
router.put("/:id", updateShiftAllocation);
router.delete("/:id", deleteShiftAllocation);


export = router;
