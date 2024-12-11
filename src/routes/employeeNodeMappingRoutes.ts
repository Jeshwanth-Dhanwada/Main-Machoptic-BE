import * as express from "express";
import {
  createEmployeeNodeMapping, getAllEmployeeNodeMapping,updateBulkEmployeeNodeMapping, updateEmployeeNodeMapping,deleteEmployeeNodeMapping, EmployeeNodeMappingById
} from "../controllers/employeeNodeMappingController";

let router = express.Router();
// const authorize = require('../middleware/authorize');

router.get("/",getAllEmployeeNodeMapping);
router.post("/", createEmployeeNodeMapping);
router.get("/:id",EmployeeNodeMappingById);
router.put("/bulk", updateBulkEmployeeNodeMapping);
router.put("/:id", updateEmployeeNodeMapping);
router.delete("/:id", deleteEmployeeNodeMapping);
// router.get("/",getAllEmployeeNodeMapping);
// router.post("/",authorize("employee_node_mapping","create"), createEmployeeNodeMapping);
// router.get("/:id",EmployeeNodeMappingById);
// router.put("/bulk",authorize("employee_node_mapping","create"), updateBulkEmployeeNodeMapping);
// router.put("/:id",authorize("employee_node_mapping","update"), updateEmployeeNodeMapping);
// router.delete("/:id",authorize("employee_node_mapping","delete"), deleteEmployeeNodeMapping);


export = router;
