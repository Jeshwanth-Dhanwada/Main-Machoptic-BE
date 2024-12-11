import * as express from "express";
import {
  createSection, getAllSection, updateSection,deleteSection, sectionById
} from "../controllers/sectionController";

let router = express.Router();
const authorize = require('../middleware/authorize');

router.get("/",getAllSection);
router.post("/", createSection);
router.get("/:id",sectionById);
router.put("/:id", updateSection);
router.delete("/:id",deleteSection);


export = router;
