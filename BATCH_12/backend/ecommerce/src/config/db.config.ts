import { connect } from "mongoose";

async function connectDB() {
  try {
    await connect("mongodb://localhost:27017/ecommerce");
    console.log("Mongoose is connected!");
  } catch (error) {
    console.error(error);
  }
}

export default connectDB;
