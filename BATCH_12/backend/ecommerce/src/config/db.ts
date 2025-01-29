import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  } catch (error) {
    console.error(error);
    process.exit(1); //optional
  }
}
