import * as express from "express";
import {
  createNodeCategory, getAllNodeCategory, updateNodeCategory,deleteNodeCategory, nodeCategoryById
} from "../controllers/nodeCategoryController";

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/", getAllNodeCategory);
router.post("/",authorize("node_category", "create"), createNodeCategory);
router.get("/:id",nodeCategoryById);
router.put("/:id",authorize("node_category", "update"), updateNodeCategory);
router.delete("/:id",authorize("node_category", "delete"), deleteNodeCategory);


export = router;
