import * as express from "express";
import {
  createItemMaster2, getAllItemMaster2, updateItemMaster2,deleteItemMaster2, ItemMaster2ById,updateBulkItemMaster2
} from "../controllers/Item_Master2Controller";

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/", getAllItemMaster2);
router.post("/",authorize("item_master2","create"), createItemMaster2);
router.get("/:id", ItemMaster2ById);
router.put("/bulk",authorize("item_master2","create"), updateBulkItemMaster2);
router.put("/:id",authorize("item_master2","update"), updateItemMaster2);
router.delete("/:id",authorize("item_master2","delete"), deleteItemMaster2);


export = router;
