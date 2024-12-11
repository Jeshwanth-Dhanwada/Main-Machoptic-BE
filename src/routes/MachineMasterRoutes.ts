import * as express from "express";
import { createMachineMaster, deleteMachineMaster, getAllMachineMaster, MachineMasterById, updateBulkMachineMaster, updateMachineMaster } from "../controllers/MachineMasterControllers";

let router = express.Router();

router.put("/bulk", updateBulkMachineMaster);
router.get("/",getAllMachineMaster);
router.post("/" ,createMachineMaster);
router.get("/:id",MachineMasterById);
router.put("/:id", updateMachineMaster);
router.delete("/:id", deleteMachineMaster);


export = router;
