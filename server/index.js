import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3000;

const app = express();

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
