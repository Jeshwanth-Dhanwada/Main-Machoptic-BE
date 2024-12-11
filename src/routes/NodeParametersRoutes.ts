import * as express from "express";

import { createNodeParameter, deleteNodeParameter, getAllNodeParameter, NodeParameterById, updateNodeParameter } from "../controllers/NodeParametersControllers";

let router = express.Router();

router.get("/",getAllNodeParameter);
router.post("/", createNodeParameter);
router.get("/:id",NodeParameterById);
router.put("/:id", updateNodeParameter);
router.delete("/:id", deleteNodeParameter);


export = router;
