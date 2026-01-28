const mongoose = require("mongoose");

const connectDB = async () => {
  if (!process.env.DB_URL) {
    console.error("❌ MONGO_URI is undefined");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
