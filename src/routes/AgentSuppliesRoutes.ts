import * as express from "express";
import { createSupplies, deleteSupplies, getAllSupplies, SuppliesById, updateSupplies } from "../controllers/AgentSuppliesControllers";

let router = express.Router();

router.post("/",createSupplies);
router.get("/",getAllSupplies);
router.get("/:id",SuppliesById);
router.put("/:id", updateSupplies);
router.delete("/:id", deleteSupplies);


export = router;
