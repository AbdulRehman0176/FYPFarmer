import db from "../config/db.js";

// ✅ Get all schemes
export const getAllSchemes = async () => {
  const result = await db.query("SELECT * FROM schemes");
  return result.rows;
};

// ✅ Create a new scheme
export const createScheme = async (title, description, image_url, apply_link) => {
  const result = await db.query(
    "INSERT INTO schemes (title, description, image_url, apply_link) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, description, image_url, apply_link]
  );
  return result.rows[0];
};

// ✅ Update a scheme by ID
export const updateSchemeById = async (id, title, description, image_url, apply_link) => {
  const result = await db.query(
    "UPDATE schemes SET title = $1, description = $2, image_url = $3, apply_link = $4 WHERE id = $5 RETURNING *",
    [title, description, image_url, apply_link, id]
  );
  return result.rowCount > 0 ? result.rows[0] : null;
};

// ✅ Delete a scheme by ID
export const deleteSchemeById = async (id) => {
  const result = await db.query("DELETE FROM schemes WHERE id = $1 RETURNING *", [id]);
  return result.rowCount > 0 ? result.rows[0] : null;
};
