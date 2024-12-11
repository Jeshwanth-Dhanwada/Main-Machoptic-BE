import * as express from "express";
import {
  createFGMapping, getAllFGMapping, updateFGMapping,deleteFGMapping, FGMappingById,updateBulkFGMapping
} from "../controllers/FGController";

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/",getAllFGMapping);
router.post("/", createFGMapping);
router.get("/:id",FGMappingById);
router.put("/bulk", updateBulkFGMapping);
router.put("/:id", updateFGMapping);
router.delete("/:id", deleteFGMapping);


export = router;
