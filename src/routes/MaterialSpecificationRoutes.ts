import * as express from "express";
import { createMaterialSpecification, deleteMaterialSpecification, getAllMaterialSpecification, NodeMaterialSpecificationById, updateMaterialSpecification } from "../controllers/MaterialSpecificationControllers";

let router = express.Router();

router.post("/",createMaterialSpecification);
router.get("/",getAllMaterialSpecification);
router.get("/:id",NodeMaterialSpecificationById);
router.put("/:id", updateMaterialSpecification);
router.delete("/:id", deleteMaterialSpecification);


export = router;
