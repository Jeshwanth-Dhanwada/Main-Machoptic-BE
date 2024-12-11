import * as express from "express";
import {
  createRolePermissions, getAllRolePermissions, updateRolePermissions,deleteRolePermission, RolePermissionById,updateBulkRolePermissions
} from "../controllers/rolePermissionController";

let router = express.Router();

router.get("/", getAllRolePermissions);
router.post("/", createRolePermissions);
router.get("/:id", RolePermissionById);
router.put("/bulk", updateBulkRolePermissions);
router.put("/:id", updateRolePermissions);
router.delete("/:id", deleteRolePermission);


export = router;
