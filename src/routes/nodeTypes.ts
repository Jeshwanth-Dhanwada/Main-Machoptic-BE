import * as express from "express";
import {
  createNodeType, getAllNodeTypes, updateNodeTypes,deleteNodeType, NodeTypeById,updateBulkNodeType
} from "../controllers/nodeTypeController";

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/",getAllNodeTypes);
router.post("/",authorize("node_types", "create"), createNodeType);
router.get("/:id",NodeTypeById);
router.put("/bulk",authorize("node_types", "create"), updateBulkNodeType);
router.put("/:id",authorize("node_types", "update"), updateNodeTypes);
router.delete("/:id",authorize("node_types", "delete"), deleteNodeType);


export = router;
