import * as express from "express";
import {
  getAllDevices, updateDevices,deleteDevice, deviceById,createDevice,
} from "../controllers/deviceMasterController";

let router = express.Router();

router.get("/", getAllDevices);
router.post("/", createDevice);
router.get("/:id", deviceById);
router.put("/:id", updateDevices);
router.delete("/:id", deleteDevice);


export = router;
