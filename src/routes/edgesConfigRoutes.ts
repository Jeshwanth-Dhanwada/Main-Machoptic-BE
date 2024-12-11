import * as express from "express";
import {
  createEdgeConfig, getAllEdgeConfig, updateEdgeConfig,deleteEdgeConfig, edgeConfigById
} from "../controllers/EdgesConfigControllers";

let router = express.Router();

router.get("/",getAllEdgeConfig);
router.post("/",createEdgeConfig);
router.get("/:id",edgeConfigById);
router.put("/:id", updateEdgeConfig);
router.delete("/:id", deleteEdgeConfig);

export = router;
