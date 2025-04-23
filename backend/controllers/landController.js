import { getAllLands, createLand, updateLandById, deleteLandById } from "../models/landModel.js";

export const getLands = async (req, res) => {
  try {
    const lands = await getAllLands();
    res.json(lands);
  } catch (error) {
    console.error("Error fetching lands:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addLand = async (req, res) => {
  const { location, area, price, city } = req.body;

  try {
    if (!location || !area || !price || !city) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newLand = await createLand(location, area, price, city, req.user.userId);

    res.status(201).json({ message: "Land added successfully", land: newLand });
  } catch (error) {
    console.error("Error adding land:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateLand = async (req, res) => {
  const { id } = req.params;
  const { location, area, price, city } = req.body;

  try {
    const updatedLand = await updateLandById(id, location, area, price, city);

    if (!updatedLand) {
      return res.status(404).json({ message: "Land not found" });
    }

    res.json({ message: "Land updated successfully", land: updatedLand });
  } catch (error) {
    console.error("Error updating land:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteLand = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedLand = await deleteLandById(id);

    if (!deletedLand) {
      return res.status(404).json({ message: "Land not found" });
    }

    res.json({ message: "Land deleted successfully" });
  } catch (error) {
    console.error("Error deleting land:", error);
    res.status(500).json({ message: "Server error" });
  }
};
