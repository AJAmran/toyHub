import express from "express";
import cors from "cors";
import { connectDB } from "./config/database.js";
import toyRoutes from "./routes/toyRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", toyRoutes);

// Error handling middleware
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Toy server is running");
});

app.listen(port, () => {
  console.log(`Toy server is running on port: ${port}`);
});

// Connect to the database
connectDB();
