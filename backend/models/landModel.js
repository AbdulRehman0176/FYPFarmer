import db from "../config/db.js";

// ✅ Get all lands
export const getAllLands = async () => {
  const result = await db.query("SELECT * FROM lands");
  return result.rows;
};

// ✅ Create a new land
export const createLand = async (location, area, price, city, user_id) => {
  const result = await db.query(
    "INSERT INTO lands (location, area, price, city, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [location, area, price, city, user_id]
  );
  return result.rows[0];
};

// ✅ Update a land by ID
export const updateLandById = async (id, location, area, price, city) => {
  const result = await db.query(
    "UPDATE lands SET location = $1, area = $2, price = $3, city = $4 WHERE id = $5 RETURNING *",
    [location, area, price, city, id]
  );
  return result.rowCount > 0 ? result.rows[0] : null;
};

// ✅ Delete a land by ID
export const deleteLandById = async (id) => {
  const result = await db.query("DELETE FROM lands WHERE id = $1 RETURNING *", [id]);
  return result.rowCount > 0 ? result.rows[0] : null;
};
