import * as express from "express";
import {
  createNodeStateMaster, getAllNodeStateMaster, updateNodeStateMaster,deleteNodeStateMaster, nodeStateMasterById
} from "../controllers/NodeStateMasterController";

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/",getAllNodeStateMaster);
router.post("/",authorize("node_state_master", "create"), createNodeStateMaster);
router.get("/:id",nodeStateMasterById);
router.put("/:id",authorize("node_state_master", "update"), updateNodeStateMaster);
router.delete("/:id",authorize("node_state_master", "delete"), deleteNodeStateMaster);


export = router;
