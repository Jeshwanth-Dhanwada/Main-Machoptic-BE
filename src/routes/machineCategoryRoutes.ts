import * as express from "express";
import {
  createMachineCategory, getAllMachineCategory, deleteMachineCategory, machineCategoryById,updateMachineCategory
} from "../controllers/machineCategoryController";

let router = express.Router();

router.get("/",getAllMachineCategory);
router.post("/" ,createMachineCategory);
router.get("/:id",machineCategoryById);
router.put("/:id", updateMachineCategory);
router.delete("/:id", deleteMachineCategory);


export = router;
