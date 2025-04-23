import db from "../config/db.js";

// ✅ Get all seeds
export const getAllSeeds = async () => {
  const result = await db.query("SELECT * FROM seeds");
  return result.rows;
};

// ✅ Create a new seed
export const createSeed = async (name, type, quantity, city, user_id) => {
  const result = await db.query(
    "INSERT INTO seeds (name, type, quantity, city, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, type, quantity, city, user_id]
  );
  return result.rows[0];
};

// ✅ Update a seed by ID
export const updateSeedById = async (id, name, type, quantity, city) => {
  const result = await db.query(
    "UPDATE seeds SET name = $1, type = $2, quantity = $3, city = $4 WHERE id = $5 RETURNING *",
    [name, type, quantity, city, id]
  );
  return result.rowCount > 0 ? result.rows[0] : null;
};

// ✅ Delete a seed by ID
export const deleteSeedById = async (id) => {
  const result = await db.query("DELETE FROM seeds WHERE id = $1 RETURNING *", [id]);
  return result.rowCount > 0 ? result.rows[0] : null;
};
