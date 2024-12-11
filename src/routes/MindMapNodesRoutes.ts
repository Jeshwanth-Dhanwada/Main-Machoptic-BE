import * as express from "express";
import {
  createNodeMaster,
  getAllNodeMaster,
  updateNodeMaster,
  deleteNodeMaster,
  nodeMasterById,
  // createBulkNodeMaster,
  updateBulkNodeMaster,
  getNodes,
  updateCheckFlagNodeMaster,
  // uploadFile
} from "../controllers/MindMapNodeController";

let router = express.Router();

router.get("/",getAllNodeMaster);
router.get("/",getNodes);
// router.post("/upload", uploadFile);
router.post("/", createNodeMaster);
// router.post("/bulk", createBulkNodeMaster);
router.put("/bulk", updateBulkNodeMaster);
router.get("/:id",nodeMasterById);
router.put("/:id", updateNodeMaster);
router.delete("/:id", deleteNodeMaster);
router.put("/:nodeId/checkFlag", updateCheckFlagNodeMaster);


export = router;
