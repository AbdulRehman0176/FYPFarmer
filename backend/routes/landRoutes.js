import express from "express";
import { getLands, addLand, updateLand, deleteLand } from "../controllers/landController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Get all lands (Public)
router.get("/", getLands);

// ✅ Add new land (Protected - Only logged-in users)
router.post("/", authMiddleware, addLand);

// ✅ Update land (Protected - Only logged-in users)
router.put("/:id", authMiddleware, updateLand);

// ✅ Delete land (Protected - Only logged-in users)
router.delete("/:id", authMiddleware, deleteLand);

export default router;
