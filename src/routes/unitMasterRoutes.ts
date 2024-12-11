import * as express from "express";
import {
  createUnitMaster, getAllUnitMaster, updateUnitMaster,deleteUnitMaster, unitMasterById
} from "../controllers/unitMasterController";

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/",getAllUnitMaster);
router.post("/", createUnitMaster);
router.get("/:id",unitMasterById);
router.put("/:id", updateUnitMaster);
router.delete("/:id",deleteUnitMaster);


export = router;
