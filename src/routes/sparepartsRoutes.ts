import * as express from "express";
import { createSpareParts, deleteSpareParts, getAllSpareParts, SparepartsById, updateSpareParts } from "../controllers/SparepartsControllers";

let router = express.Router();

router.get("/",getAllSpareParts);
router.post("/" ,createSpareParts);
router.get("/:id",SparepartsById);
router.put("/:id", updateSpareParts);
router.delete("/:id", deleteSpareParts);


export = router;
