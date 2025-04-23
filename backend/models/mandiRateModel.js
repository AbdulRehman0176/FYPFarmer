import db from "../config/db.js";

// ✅ Get all mandi rates
export const getAllMandiRates = async () => {
  const result = await db.query("SELECT * FROM mandi_rates");
  return result.rows;
};

// ✅ Create a new mandi rate
export const createMandiRate = async (item_name, rate, city, mandi_user_id) => {
  const result = await db.query(
    "INSERT INTO mandi_rates (item_name, rate, city, mandi_user_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [item_name, rate, city, mandi_user_id]
  );
  return result.rows[0];
};

// ✅ Update a mandi rate by ID
export const updateMandiRateById = async (id, item_name, rate, city) => {
  const result = await db.query(
    "UPDATE mandi_rates SET item_name = $1, rate = $2, city = $3 WHERE id = $4 RETURNING *",
    [item_name, rate, city, id]
  );
  return result.rowCount > 0 ? result.rows[0] : null;
};

// ✅ Delete a mandi rate by ID
export const deleteMandiRateById = async (id) => {
  const result = await db.query("DELETE FROM mandi_rates WHERE id = $1 RETURNING *", [id]);
  return result.rowCount > 0 ? result.rows[0] : null;
};
