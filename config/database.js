import mongoose from "mongoose";

export const connectDatabase = async () => {
  const mongoUrl = process.env.MONOG_URL || "mongodb://localhost/fantasy-world";

  try {
    await mongoose.connect(mongoUrl);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};