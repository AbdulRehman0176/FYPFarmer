import { getAllMachines, createMachine, updateMachineById, deleteMachineById } from "../models/machineModel.js";

export const getMachines = async (req, res) => {
  try {
    const machines = await getAllMachines();
    res.json(machines);
  } catch (error) {
    console.error("Error fetching machines:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addMachine = async (req, res) => {
  const { name, price, city } = req.body;

  try {
    if (!name || !price || !city) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newMachine = await createMachine(name, price, city, req.user.userId);

    res.status(201).json({ message: "Machine added successfully", machine: newMachine });
  } catch (error) {
    console.error("Error adding machine:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateMachine = async (req, res) => {
  const { id } = req.params;
  const { name, price, city } = req.body;

  try {
    const updatedMachine = await updateMachineById(id, name, price, city);

    if (!updatedMachine) {
      return res.status(404).json({ message: "Machine not found" });
    }

    res.json({ message: "Machine updated successfully", machine: updatedMachine });
  } catch (error) {
    console.error("Error updating machine:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteMachine = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMachine = await deleteMachineById(id);

    if (!deletedMachine) {
      return res.status(404).json({ message: "Machine not found" });
    }

    res.json({ message: "Machine deleted successfully" });
  } catch (error) {
    console.error("Error deleting machine:", error);
    res.status(500).json({ message: "Server error" });
  }
};
