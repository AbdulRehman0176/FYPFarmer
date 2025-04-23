import express from "express";
import { getMandiRates, addMandiRate, updateMandiRate, deleteMandiRate } from "../controllers/mandiRateController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Get all mandi rates (Public)
router.get("/", getMandiRates);

// ✅ Add new mandi rate (Protected - Only logged-in users)
router.post("/", authMiddleware, addMandiRate);

// ✅ Update mandi rate (Protected - Only logged-in users)
router.put("/:id", authMiddleware, updateMandiRate);

// ✅ Delete mandi rate (Protected - Only logged-in users)
router.delete("/:id", authMiddleware, deleteMandiRate);

export default router;
