import * as express from "express";
import { createNodeParametersDetails, deleteNodeParametersDetails, getAllNodeParametersDetails, NodeParametersDetailsById, updateNodeParametersDetails } from "../controllers/NodeparamertersDetailsControllers";

let router = express.Router();

router.post("/",createNodeParametersDetails);
router.get("/",getAllNodeParametersDetails);
router.get("/:id",NodeParametersDetailsById);
router.put("/:id", updateNodeParametersDetails);
router.delete("/:id", deleteNodeParametersDetails);


export = router;
