import db from "../config/db.js";

// Get all lands with user info (optional)
export const getAllLands = async () => {
  const result = await db.query(`
    SELECT lands.*, users.name AS owner_name, users.email 
    FROM lands 
    JOIN users ON lands.user_id = users.id
    ORDER BY lands.created_at DESC
  `);
  return result.rows;
};

// Create a new land
export const createLand = async (user_id, location, area, price, city) => {
  const result = await db.query(
    "INSERT INTO lands (user_id, location, area, price, city) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [user_id, location, area, price, city]
  );
  return result.rows[0];
};

// Update a land
export const updateLandById = async (id, location, area, price, city) => {
  const result = await db.query(
    "UPDATE lands SET location = $1, area = $2, price = $3, city = $4 WHERE id = $5 RETURNING *",
    [location, area, price, city, id]
  );
  return result.rowCount > 0 ? result.rows[0] : null;
};

// Delete a land
export const deleteLandById = async (id) => {
  const result = await db.query("DELETE FROM lands WHERE id = $1 RETURNING *", [id]);
  return result.rowCount > 0 ? result.rows[0] : null;
};
