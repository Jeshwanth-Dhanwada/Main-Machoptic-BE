import * as express from "express";
import { createMaterialMaster, deleteMaterialMaster, getAllMaterialMaster, MaterialMasterById, updateBulkMaterialMaster, updateMaterialMaster } from "../controllers/MaterialMasterController";

let router = express.Router();

router.put("/bulk", updateBulkMaterialMaster);
router.get("/",getAllMaterialMaster);
router.post("/" ,createMaterialMaster);
router.get("/:id",MaterialMasterById);
router.put("/:id", updateMaterialMaster);
router.delete("/:id", deleteMaterialMaster);


export = router;
