import * as express from "express";
import {
  createBreaks, getAllBreaks, updateBreaks,deleteBreaks, BreaksById
} from "../controllers/breaksControllers";

let router = express.Router();

router.get("/",getAllBreaks);
router.post("/", createBreaks);
router.get("/:id",deleteBreaks);
router.put("/:id", updateBreaks);
router.delete("/:id", BreaksById);


export = router;
