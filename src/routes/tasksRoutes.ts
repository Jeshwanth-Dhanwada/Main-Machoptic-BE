import * as express from "express";
import {
  createTasksMaster, getAllTaskMaster, updateBulkTaskMaster,deleteTaskMaster, TaskMasterById
} from "../controllers/TasksControllers";

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/",getAllTaskMaster);
router.post("/", createTasksMaster);
router.get("/:id",TaskMasterById);
router.put("/bulk", updateBulkTaskMaster);
router.delete("/:id", deleteTaskMaster);


export = router;
