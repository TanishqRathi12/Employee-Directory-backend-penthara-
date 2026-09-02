import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import employeeRoutes from "./routes/EmployeeRoute.js";
import cors from "cors";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get("/health", (req, res) => {  // Health check endpoint
    res.send("Server is healthy");
});
app.use("/employees", employeeRoutes); // Use the employee routes for all requests starting with /employees

console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);

mongoose.connect(process.env.DATABASE_URL) // Connect to MongoDB using the connection string from environment variables
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


