import * as express from "express";
import {
  createMaterialType, getAllMaterialTypes, deleteMaterialTypes, materialTypesById,updateMaterialtypes
} from "../controllers/materialNodetypeController";

let router = express.Router();

router.get("/",getAllMaterialTypes);
router.post("/" ,createMaterialType);
router.get("/:id",materialTypesById);
router.put("/:id",updateMaterialtypes);
router.delete("/:id", deleteMaterialTypes);


export = router;
