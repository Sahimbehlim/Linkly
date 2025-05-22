import "dotenv/config";
import { connectDB } from "./config/db.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
