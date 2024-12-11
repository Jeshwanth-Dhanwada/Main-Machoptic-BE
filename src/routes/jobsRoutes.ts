import * as express from "express";
import {
  createJobs, getAllJobs, updateJobs,deleteJobs, jobsById,updateBulkJob
} from "../controllers/JobController";

let router = express.Router();

router.get("/", getAllJobs);
router.post("/", createJobs);
router.get("/:id", jobsById);
router.put("/bulk", updateBulkJob);
router.put("/:id", updateJobs);
router.delete("/:id", deleteJobs);


export = router;
