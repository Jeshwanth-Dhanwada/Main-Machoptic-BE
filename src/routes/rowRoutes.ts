import * as express from "express";
import {
  createRowsMaster, getAllRowMaster, updateBulkRowMaster,deleteRowMaster, RowMasterById
} from "../controllers/RowsController";

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/",getAllRowMaster);
router.put("/bulk", updateBulkRowMaster);
router.post("/", createRowsMaster);
router.get("/:id",RowMasterById);
router.delete("/:id", deleteRowMaster);


export = router;
