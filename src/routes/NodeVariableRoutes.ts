import * as express from "express";
import { createNodeVariable, deleteNodeVariable, getAllNodeVariable, NodeVariableById, updateNodeVariable } from "../controllers/NodeVariableControllers";

let router = express.Router();

router.get("/",getAllNodeVariable);
router.post("/", createNodeVariable);
router.get("/:id",NodeVariableById);
router.put("/:id", updateNodeVariable);
router.delete("/:id", deleteNodeVariable);


export = router;
