import db from "../config/db.js";

// ✅ Get all machines
export const getAllMachines = async () => {
  const result = await db.query("SELECT * FROM machines");
  return result.rows;
};

// ✅ Create a new machine
// export const createMachine = async (name, price, city, user_id) => {
//   const result = await db.query(
//     "INSERT INTO machines (name, price, city, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
//     [name, price, city, user_id]
//   );
//   return result.rows[0];
// };

export const createMachine = async (name, price, city, user_id, image_url, status = "available") => {
  const result = await db.query(
    "INSERT INTO machines (name, price, city, user_id, image_url, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [name, price, city, user_id, image_url, status]
  );
  return result.rows[0];
};


// ✅ Update a machine by ID
export const updateMachineById = async (id, name, price, city) => {
  const result = await db.query(
    "UPDATE machines SET name = $1, price = $2, city = $3 WHERE id = $4 RETURNING *",
    [name, price, city, id]
  );
  return result.rowCount > 0 ? result.rows[0] : null;
};

// ✅ Delete a machine by ID
export const deleteMachineById = async (id) => {
  const result = await db.query("DELETE FROM machines WHERE id = $1 RETURNING *", [id]);
  return result.rowCount > 0 ? result.rows[0] : null;
};
