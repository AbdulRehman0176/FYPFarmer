import express from "express";
import { getMachines, addMachine, updateMachine, deleteMachine } from "../controllers/machineController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// ✅ Get all machines (Public)
router.get("/", getMachines);

// ✅ Add new machine (Protected - Only logged-in users)
router.post("/", authMiddleware, upload.single("image"), addMachine);

// ✅ Update machine (Protected - Only logged-in users)
router.put("/:id", authMiddleware, updateMachine);

// ✅ Delete machine (Protected - Only logged-in users)
router.delete("/:id", authMiddleware, deleteMachine);

export default router;
