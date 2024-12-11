import * as express from "express";
import {
    loginUser, logout, refresh
} from "../controllers/authController";

let router = express.Router();

router.post("/", loginUser);
router.get("/refresh", refresh);
router.post("/logout", logout);

export = router;