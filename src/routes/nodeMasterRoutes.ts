import * as express from "express";
import {
  createNodeMaster,
  getAllNodeMaster,
  updateNodeMaster,
  deleteNodeMaster,
  nodeMasterById,
  createBulkNodeMaster,
  updateBulkNodeMaster,
  // uploadFile
} from "../controllers/nodeMasterController";

let router = express.Router();

router.get("/",getAllNodeMaster);
// router.post("/upload", uploadFile);
router.put("/bulk", updateBulkNodeMaster);
router.post("/bulk", createBulkNodeMaster);
router.put("/:id", updateNodeMaster);
router.post("/", createNodeMaster);
router.get("/:id",nodeMasterById);
router.delete("/:id", deleteNodeMaster);


export = router;
