import * as express from "express";
import {
  createRouteMaster, getAllRouteMaster, updateRouteMaster,deleteRouteMaster, routeMasterById
} from "../controllers/RouteMasterController";

let router = express.Router();

router.get("/",getAllRouteMaster);
router.post("/", createRouteMaster);
router.get("/:id",routeMasterById);
router.put("/:id", updateRouteMaster);
router.delete("/:id", deleteRouteMaster);


export = router;
