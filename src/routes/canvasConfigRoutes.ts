import * as express from "express";
import {
  createCanvasConfig, getAllCanvasConfig, updateCanvasConfig,deleteCanvasConfig, canvasConfigById
} from "../controllers/CanvasConfigControllers";

let router = express.Router();

router.get("/",getAllCanvasConfig);
router.post("/",createCanvasConfig);
router.get("/:id",canvasConfigById);
router.put("/:id", updateCanvasConfig);
router.delete("/:id",deleteCanvasConfig);

export = router;
