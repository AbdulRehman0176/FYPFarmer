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

// ✅ get states
export const getRecordCounts = async (req, res) => {
  try {
    const query = `
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_type = 'BASE TABLE';
    `;

    const tables = await db.query(query);
    const tableNames = tables.rows.map(row => row.table_name);

    const recordCounts = [];

    for (const tableName of tableNames) {
      try {
        const countQuery = `SELECT COUNT(*) AS record_count FROM public."${tableName}"`;
        const countResult = await db.query(countQuery);

        recordCounts.push({
          table_name: tableName,
          record_count: parseInt(countResult.rows[0].record_count, 10)
        });
      } catch (err) {
        console.error(`Error querying table ${tableName}: ${err.message}`);
        recordCounts.push({
          table_name: tableName,
          record_count: "Error"
        });
      }
    }

    return { message: "Fetch Successfull", data: recordCounts}
    // return { "success": true, "data": recordCounts };
  } catch (error) {
    console.error("Error fetching record counts:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};