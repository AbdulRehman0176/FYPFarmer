import express from "express";
import { getSchemes, addScheme, updateScheme, deleteScheme } from "../controllers/schemeController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Get all schemes (Public)
router.get("/", getSchemes);

// ✅ Add new scheme (Protected - Only admins)
router.post("/", authMiddleware, addScheme);

// ✅ Update scheme (Protected - Only admins)
router.put("/:id", authMiddleware, updateScheme);

// ✅ Delete scheme (Protected - Only admins)
router.delete("/:id", authMiddleware, deleteScheme);

export default router;
