import * as express from "express";
import {
  createOA_DETMaster2, getAllQA_DET2, updateOA_DETMaster2,deleteOA_DETMaster2, OA_DETMaster2ById,updateBulkOA_DETMaster2
} from "../controllers/OA_DET2Controller"

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/",getAllQA_DET2);
router.post("/",authorize("oa_det_master2", "create"), createOA_DETMaster2);
router.get("/:id",OA_DETMaster2ById);
router.put("/bulk",authorize("oa_det_master2", "create"), updateBulkOA_DETMaster2);
router.put("/:id",authorize("oa_det_master2", "update"), updateOA_DETMaster2);
router.delete("/:id",authorize("oa_det_master2", "delete"), deleteOA_DETMaster2);


export = router;
