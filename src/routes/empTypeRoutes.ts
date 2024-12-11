import * as express from "express";
import {
  createEmpType, getAllEmpType, updateEmpType,deleteEmpType, empTypeById
} from "../controllers/empTypeController";


let router = express.Router();

router.get("/", getAllEmpType);
router.post("/", createEmpType);
router.get("/:id", empTypeById);
router.put("/:id", updateEmpType);
router.delete("/:id", deleteEmpType);


export = router;
