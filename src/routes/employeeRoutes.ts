import * as express from "express";
import {
  createEmployee, getAllEmployee, updateEmployee,deleteEmployee, employeeById
} from "../controllers/employeeController";

let router = express.Router();

router.get("/", getAllEmployee);
router.post("/", createEmployee);
router.get("/:id", employeeById);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);


export = router;
