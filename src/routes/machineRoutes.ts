import * as express from "express";
import {
  createMachineTypes, getAllMachineTypes, deleteMachineType, machineTypeById,updateMachinetypes
} from "../controllers/machineTypeController";

let router = express.Router();

router.get("/",getAllMachineTypes);
router.post("/" ,createMachineTypes);
router.get("/:id",machineTypeById);
router.put("/:id", updateMachinetypes);
router.delete("/:id", deleteMachineType);


export = router;
