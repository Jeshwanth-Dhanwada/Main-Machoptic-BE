import * as express from "express";
import {
  createNodeAllocation, getAllNodeAllocation, updateNodeAllocation,deleteNodeAllocation, NodeAllocationById,updateBulkNodeAllocation
} from "../controllers/nodeAllocationController";

let router = express.Router();

router.get("/",getAllNodeAllocation);
router.post("/",createNodeAllocation);
router.get("/:id", NodeAllocationById);
router.put("/bulk",updateBulkNodeAllocation);
router.put("/:id",updateNodeAllocation);
router.delete("/:id",deleteNodeAllocation);


export = router;
