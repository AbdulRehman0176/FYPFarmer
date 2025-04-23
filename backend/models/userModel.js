import db from "../config/db.js";

// ✅ Find user by email
export const findUserByEmail = async (email) => {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0]; // Return user if found, otherwise null
};

// ✅ Create a new user
export const createUser = async (name, email, password, role, city, cnic, shop_name) => {
  const result = await db.query(
    "INSERT INTO users (name, email, password, role, city, cnic, shop_name) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [name, email, password, role, city, cnic, shop_name]
  );
  return result.rows[0]; // Return the created user
};
