import * as express from "express";
import branchRouter from "./branchRoutes";
import batchMasterRouter from "./batchMasterRoutes";
import shiftRouter from "./shiftRoutes";
import departmentRouter from "./departmentRoutes";
import sectionRouter from "./sectionRoutes";
import empTypeRouter from "./empTypeRoutes";
import employeeRouter from "./employeeRoutes";
import materialCategoryRouter from "./materialCategoryRoutes";
import materialTypeRouter from "./materialTypeRoutes";
import materialRouter from "./materialRoutes";
import nodeCategoryRouter from "./nodeCategoryRoutes";
import nodeMasterRouter from "./nodeMasterRoutes";
import nodeStateMaster from "./nodeStateMasterRoutes";
import unitMaster from "./unitMasterRoutes";
import edgeMaster from "./edgeMasterRoutes";
import canvasMaster from "./canvasMasterRoutes";
import routeMaster from "./routeMasterRoutes";
import employeeNodeMappingRouter from "./employeeNodeMappingRoutes";
import shiftAllocationRouter from "./shiftAllocationRoutes";
import jobAssignRouter from "./jobAssignRoutes";
import jobsRouter from "./jobsRoutes"
import activitylLogRouter from "./activitylogRoutes";
import batchRouter from "./batchRoutes";
import attendance from "./attendance";
import nodeAllocation from "./nodeAllocation";
import nodeTypes from "./nodeTypes";
import mappingRouter from "./FGMappingRoutes";
import itemMasterRouter from "./itemMaster";
import OA_DETMasterRouter from "./QA_DETRoute";
import ItemMaster2Router from "./Item_Master2Routes"
import OA_DET2Router from "./OA_DET2Routes"
import authRoutes from "./authRoutes";
import MenuRoutes from "./menuRoutes"
import RolePermissionsRoutes from "./rolePermissionRoutes"
import devicesMaster from "./deviceRoutes"
import DeviceMapping from "./deviceMappingRoutes"
import { downloadExcel } from "../controllers/downloadExcelController";
import { getDataRecord } from "../controllers/dataRecordController";
import breakRoutes from "./breaksRoutes"
import holidayCalendarRoutes from "./holidayCalendarRoutes"
import workinghourscheduleroutes from "./workinghourscheduleRoutes"
import workingdaycalendarroutes from "./WorkingDayCalendarRoutes"
import rowRoutes from "./rowRoutes"
import taskRoutes from "./tasksRoutes"
import dependencyRoutes from "./dependencyRoutes"

import machineTypeRoutes from "./machineRoutes"
import materialNodeTypeRoutes from  "./MaterialnodeTypeRoutes"
import machineCategoryRoutes from "./machineCategoryRoutes"

//MindMap -----------
import nodesConfiguration from "./NodesConfigRoutes";
import egdesConfig from "./edgesConfigRoutes";
import canvasConfig from "./canvasConfigRoutes"
import dataconnectionRoutes from "./DataConnectionRouter"
import MindmapNodeMaster from "./MindMapNodesRoutes"
import MindmapEdgeMaster from "./MindMapEdgesRoutes"

// Node Variables -----------

import NodeParameter from './NodeParametersRoutes'
import NodeVariable from './NodeVariableRoutes'

// New tables Machine and Material Masters......

import MachineMasterRoutes from "./MachineMasterRoutes"
import MatereialMasterRoutes from "./MaterialMasterRoutes"

import MaintenanceRoutes from "./MaintenanceRoutes"
import BreakDownRoutes from "./BreakDownRoutes"
import SparePartsRoutes from "./sparepartsRoutes"
import AgentSupplies from "./AgentSuppliesRoutes"
import NodeParameterDetails from "./NodeParamerterDetailsRoutes"
import NodeVariableDetails from "./NodeVariableDetailsRoutes"
import MaterialSpecification from "./MaterialSpecificationRoutes"

let router = express.Router();

router.use("/branch", branchRouter);
router.use("/batchMaster", batchMasterRouter);
router.use("/canvasMaster", canvasMaster);
router.use("/department", departmentRouter);
router.use("/edgeMaster", edgeMaster);
router.use("/employee", employeeRouter);
router.use("/employeeNodeMapping", employeeNodeMappingRouter);
router.use("/empType", empTypeRouter);
router.use("/materialCategory", materialCategoryRouter);
router.use("/material", materialRouter);
router.use("/materialType", materialTypeRouter);
router.use("/routeMaster", routeMaster);
router.use("/nodeCategory", nodeCategoryRouter);
router.use("/nodeMaster", nodeMasterRouter);
router.use("/nodeStateMaster", nodeStateMaster);
router.use("/section", sectionRouter);
router.use("/shift", shiftRouter);
router.use("/shiftAllocation", shiftAllocationRouter);
router.use("/unitMaster", unitMaster);
router.use("/jobassign", jobAssignRouter);
router.use("/job", jobsRouter);
router.use("/activitylog", activitylLogRouter);
router.use("/batch", batchRouter);
router.use("/attendance", attendance);
router.use("/nodeAllocation", nodeAllocation);
router.use("/nodeTypes", nodeTypes);
router.use("/mapping", mappingRouter);
router.use("/itemmaster", itemMasterRouter);
router.use("/OA_DETRoute", OA_DETMasterRouter);
router.use("/itemmaster2", ItemMaster2Router);
router.use("/OA_DETRoute2", OA_DET2Router);
router.use("/auth", authRoutes);
router.use("/menu", MenuRoutes);
router.use("/dataRecord", getDataRecord);
router.use("/rolePermissions", RolePermissionsRoutes);
router.use("/devices", devicesMaster);
router.use("/deviceMapping", DeviceMapping);
router.use("/break", breakRoutes);
router.use("/holidayCalendar", holidayCalendarRoutes);
router.use("/workinghourschedule", workinghourscheduleroutes);
router.use("/workingdaycalendar", workingdaycalendarroutes);
router.use("/rows", rowRoutes);
router.use("/tasks", taskRoutes);
router.use("/dependency", dependencyRoutes);
router.post("/downloadExcel", downloadExcel);

router.use("/machineType", machineTypeRoutes);
router.use("/materialnodetype", materialNodeTypeRoutes);
router.use("/machineCategory", machineCategoryRoutes);

//MindMap Routes --------------
router.use("/nodesConfig", nodesConfiguration);
router.use("/edgesConfig", egdesConfig);
router.use("/canvasConfig", canvasConfig);
router.use("/datasettings", dataconnectionRoutes);
router.use("/MindmapNode", MindmapNodeMaster);
router.use("/MindmapEdge", MindmapEdgeMaster);

// Node variables ---------- 
router.use("/NodeParameter", NodeParameter);
router.use("/NodeVariable", NodeVariable);

// Machine and Material tables routes ------
router.use("/MachineMaster", MachineMasterRoutes);
router.use("/MaterialMaster", MatereialMasterRoutes);
router.use("/maintenance", MaintenanceRoutes);
router.use("/breakdown", BreakDownRoutes);
router.use("/spareparts", SparePartsRoutes);
router.use("/agentsupplies", AgentSupplies);
router.use("/nodeparadetails", NodeParameterDetails);
router.use("/nodevardetails", NodeVariableDetails);
router.use("/materialspecification", MaterialSpecification);

export = router;