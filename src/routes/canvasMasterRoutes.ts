import * as express from "express";
import {
  createCanvasMaster, getAllCanvasMaster, updateCanvasMaster,deleteCanvasMaster, canvasMasterById
} from "../controllers/CanvasMasterController";

let router = express.Router();

router.get("/", getAllCanvasMaster);
router.post("/", createCanvasMaster);
router.get("/:id", canvasMasterById);
router.put("/:id", updateCanvasMaster);
router.delete("/:id", deleteCanvasMaster);


export = router;
