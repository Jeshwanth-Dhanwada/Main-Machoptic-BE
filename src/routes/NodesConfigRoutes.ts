import * as express from "express";
import {
  createNodeConfig, getAllNodeConfig, updateNodeConfig,deleteNodeConfig, nodeConfigById,updateBulkNodesConfig
} from "../controllers/NodesConfigControllers";

let router = express.Router();

router.get("/",getAllNodeConfig);
router.get("/:id",nodeConfigById);
router.post("/",createNodeConfig);
router.put("/bulk", updateBulkNodesConfig);
router.delete("/:id", deleteNodeConfig);
router.put("/:id", updateNodeConfig);

export = router;
