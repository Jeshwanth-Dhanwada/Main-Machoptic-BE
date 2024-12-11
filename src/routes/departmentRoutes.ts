import * as express from "express";
import {
  createDepartment, getAllDepartment, updateDepartment,deleteDepartment, departmentById
} from "../controllers/departmentController";

let router = express.Router();

router.get("/",getAllDepartment);
router.post("/", createDepartment);
router.get("/:id",departmentById);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);


export = router;
