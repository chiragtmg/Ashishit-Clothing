import express from "express";
import {
	loginUser,
	registerUser,
	adminLogin,
	logoutUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin", adminLogin);
router.post("/logout", logoutUser)

export default router;
