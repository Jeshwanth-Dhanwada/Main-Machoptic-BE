import * as express from "express";
import {
  createMaterial, getAllMaterial, updateMaterial,deleteMaterial, materialById
} from "../controllers/materialController";

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/",getAllMaterial);
router.post("/",authorize("material", "create"), createMaterial);
router.get("/:id",materialById);
router.put("/:id",authorize("material", "update"), updateMaterial);
router.delete("/:id",authorize("material", "delete"), deleteMaterial);


export = router;
