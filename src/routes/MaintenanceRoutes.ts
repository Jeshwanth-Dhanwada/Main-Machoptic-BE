import * as express from "express";
import { createMaintenance, deleteMaintenance, getAllMaintenance, MaintenanceById, updateMaintenance } from "../controllers/MaintenanceControllers";

let router = express.Router();

router.get("/",getAllMaintenance);
router.post("/" ,createMaintenance);
router.get("/:id",MaintenanceById);
router.put("/:id", updateMaintenance);
router.delete("/:id", deleteMaintenance);


export = router;
