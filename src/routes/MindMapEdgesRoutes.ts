import * as express from "express";
import {
  createEdgeMaster, getAllEdges, updateEdgeMaster,deleteEdgeMaster, edgeMasterById, createBulkEdgeMaster, updateBulkEdgeMaster
} from "../controllers/MindMapEdgesControllers";

let router = express.Router();

router.get("/",getAllEdges);
router.post("/", createEdgeMaster);
router.post("/bulk", createBulkEdgeMaster);
router.put("/bulk", updateBulkEdgeMaster);
router.put("/:id", updateEdgeMaster);
router.get("/:id",edgeMasterById);
router.delete("/:id", deleteEdgeMaster);


export = router;
