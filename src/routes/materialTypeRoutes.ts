import * as express from "express";
import {
  createMaterialType, getAllMaterialType, updateMaterialType,deleteMaterialType, materialTypeById
} from "../controllers/materialTypeController";

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/",getAllMaterialType);
router.post("/", createMaterialType);
router.get("/:id",materialTypeById);
router.put("/:id",authorize("material_type", "update"), updateMaterialType);
router.delete("/:id",authorize("material_type", "delete"), deleteMaterialType);


export = router;
