import * as express from "express";
import {
    getAllTableMaster,
    getTableColumns,
    getTableData
} from "../controllers/DataConnectionController";

let router = express.Router();

router.get("/", getAllTableMaster);
router.post("/getTableColumns/:tablename", getTableColumns);
router.post("/getTableData/:table", getTableData);

// // router.post("/upload", uploadFile);
// router.post("/", createNodeMaster);
// // router.post("/bulk", createBulkNodeMaster);
// router.put("/bulk", updateBulkNodeMaster);
// router.get("/:id",nodeMasterById);
// router.put("/:id", updateNodeMaster);
// router.delete("/:id", deleteNodeMaster);


export = router;
