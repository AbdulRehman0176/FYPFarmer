import { getAllMandiRates, createMandiRate, updateMandiRateById, deleteMandiRateById } from "../models/mandiRateModel.js";

export const getMandiRates = async (req, res) => {
  try {
    const mandiRates = await getAllMandiRates();
    res.json(mandiRates);
  } catch (error) {
    console.error("Error fetching mandi rates:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addMandiRate = async (req, res) => {
  const { item_name, rate, city } = req.body;

  try {
    if (!item_name || !rate || !city) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newRate = await createMandiRate(item_name, rate, city, req.user.userId);

    res.status(201).json({ message: "Mandi rate added successfully", mandiRate: newRate });
  } catch (error) {
    console.error("Error adding mandi rate:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateMandiRate = async (req, res) => {
  const { id } = req.params;
  const { item_name, rate, city } = req.body;

  try {
    const updatedRate = await updateMandiRateById(id, item_name, rate, city);

    if (!updatedRate) {
      return res.status(404).json({ message: "Mandi rate not found" });
    }

    res.json({ message: "Mandi rate updated successfully", mandiRate: updatedRate });
  } catch (error) {
    console.error("Error updating mandi rate:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteMandiRate = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRate = await deleteMandiRateById(id);

    if (!deletedRate) {
      return res.status(404).json({ message: "Mandi rate not found" });
    }

    res.json({ message: "Mandi rate deleted successfully" });
  } catch (error) {
    console.error("Error deleting mandi rate:", error);
    res.status(500).json({ message: "Server error" });
  }
};
