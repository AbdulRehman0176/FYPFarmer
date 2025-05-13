import express from "express";
import { registerUser, loginUser, states } from "../controllers/userController.js";

const router = express.Router();

// User Registration
router.post("/register", registerUser);

// User Login
router.post("/login", loginUser);

// States
router.post("/states", states);

export default router;
