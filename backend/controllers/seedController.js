import { getAllSeeds, createSeed, updateSeedById, deleteSeedById } from "../models/seedModel.js";

export const getSeeds = async (req, res) => {
  try {
    const seeds = await getAllSeeds();
    res.json(seeds);
  } catch (error) {
    console.error("Error fetching seeds:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addSeed = async (req, res) => {
  const { name, type, quantity, city } = req.body;

  try {
    if (!name || !type || !quantity || !city) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newSeed = await createSeed(name, type, quantity, city, req.user.userId);

    res.status(201).json({ message: "Seed added successfully", seed: newSeed });
  } catch (error) {
    console.error("Error adding seed:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateSeed = async (req, res) => {
  const { id } = req.params;
  const { name, type, quantity, city } = req.body;

  try {
    const updatedSeed = await updateSeedById(id, name, type, quantity, city);

    if (!updatedSeed) {
      return res.status(404).json({ message: "Seed not found" });
    }

    res.json({ message: "Seed updated successfully", seed: updatedSeed });
  } catch (error) {
    console.error("Error updating seed:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteSeed = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSeed = await deleteSeedById(id);

    if (!deletedSeed) {
      return res.status(404).json({ message: "Seed not found" });
    }

    res.json({ message: "Seed deleted successfully" });
  } catch (error) {
    console.error("Error deleting seed:", error);
    res.status(500).json({ message: "Server error" });
  }
};
