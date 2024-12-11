import * as express from "express";
import { createNodeVariableDetails, deleteNodeVariableDetails, getAllNodeVariableDetails, NodeVariableDetailsById, updateNodeVariableDetails } from "../controllers/NodeVariableDetailsControllers";

let router = express.Router();

router.post("/",createNodeVariableDetails);
router.get("/",getAllNodeVariableDetails);
router.get("/:id",NodeVariableDetailsById);
router.put("/:id", updateNodeVariableDetails);
router.delete("/:id", deleteNodeVariableDetails);


export = router;
