import { getAllSchemes, createScheme, updateSchemeById, deleteSchemeById } from "../models/schemeModel.js";

export const getSchemes = async (req, res) => {
  try {
    const schemes = await getAllSchemes();
    res.json(schemes);
  } catch (error) {
    console.error("Error fetching schemes:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addScheme = async (req, res) => {
  const { title, description, image_url, apply_link } = req.body;

  try {
    if (!title || !description || !apply_link) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newScheme = await createScheme(title, description, image_url, apply_link);

    res.status(201).json({ message: "Scheme added successfully", scheme: newScheme });
  } catch (error) {
    console.error("Error adding scheme:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateScheme = async (req, res) => {
  const { id } = req.params;
  const { title, description, image_url, apply_link } = req.body;

  try {
    const updatedScheme = await updateSchemeById(id, title, description, image_url, apply_link);

    if (!updatedScheme) {
      return res.status(404).json({ message: "Scheme not found" });
    }

    res.json({ message: "Scheme updated successfully", scheme: updatedScheme });
  } catch (error) {
    console.error("Error updating scheme:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteScheme = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedScheme = await deleteSchemeById(id);

    if (!deletedScheme) {
      return res.status(404).json({ message: "Scheme not found" });
    }

    res.json({ message: "Scheme deleted successfully" });
  } catch (error) {
    console.error("Error deleting scheme:", error);
    res.status(500).json({ message: "Server error" });
  }
};
