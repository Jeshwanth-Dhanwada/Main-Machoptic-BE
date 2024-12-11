import * as express from "express";
import {
    getAllDeviceMapping,
    updateDeviceMapping,
    deleteDeviceMapping,
    deviceMappingById,
    createDeviceMapping,
    updateBulkdeviceMapping
} from "../controllers/deviceMappingController";

let router = express.Router();

router.get("/", getAllDeviceMapping);
router.post("/", createDeviceMapping);
router.get("/:id", deviceMappingById);
router.put("/bulk", updateBulkdeviceMapping);
router.put("/:id", updateDeviceMapping);
router.delete("/:id", deleteDeviceMapping);


export = router;
