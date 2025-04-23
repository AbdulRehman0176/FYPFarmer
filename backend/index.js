import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"; 
import machineRoutes from "./routes/machineRoutes.js";
import landRoutes from "./routes/landRoutes.js"; 
import seedRoutes from "./routes/seedRoutes.js"; 
import schemeRoutes from "./routes/schemeRoutes.js"; 
import mandiRateRoutes from "./routes/mandiRateRoutes.js"; 


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());  // Allows JSON data
app.use(cors());          // Enables CORS for frontend

// API Routes
app.use("/api/users", userRoutes);  
app.use("/api/machines", machineRoutes);
app.use("/api/lands", landRoutes);
app.use("/api/seeds", seedRoutes); 
app.use("/api/schemes", schemeRoutes); 
app.use("/api/mandi-rates", mandiRateRoutes); 


app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
