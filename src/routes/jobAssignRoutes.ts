import * as express from "express";
import {
  createJobAssign, getAllJobAssign, updateJobAssign,deleteJobAssign, jobAssignById,updateBulkJobAssign
} from "../controllers/jobAssignController";
let router = express.Router();

router.get("/",getAllJobAssign);
router.post("/", createJobAssign);
router.get("/:id",jobAssignById);
router.put("/bulk", updateBulkJobAssign);
router.put("/:id", updateJobAssign);
router.delete("/:id", deleteJobAssign);


export = router;
