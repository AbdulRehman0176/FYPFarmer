import express from "express";
import { getSeeds, addSeed, updateSeed, deleteSeed } from "../controllers/seedController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// ✅ Get all seeds (Public)
router.get("/", getSeeds);

// ✅ Add new seed (Protected - Only logged-in users)
//    Add seed (buy or sell) with optional image
router.post("/", authMiddleware, upload.single("image") , addSeed);

// ✅ Update seed (Protected - Only logged-in users)
router.put("/:id", authMiddleware, updateSeed);

// ✅ Delete seed (Protected - Only logged-in users)
router.delete("/:id", authMiddleware, deleteSeed);

export default router;
