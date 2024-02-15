import express from "express";
const router = express.Router();
import * as authController from "../controllers/authController.js";

router.post("/uploadFile", authController.uploadFile);
router.post("/login", authController.login);
router.post("/register", authController.signup);

export default router;
