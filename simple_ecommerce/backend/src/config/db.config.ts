import mongoose from "mongoose";

export default async function ConnectDB() {
  if (process.env.MONGO_URI) {
    await mongoose.connect(process.env.MONGO_URI, {
      maxPoolSize: 10, // Use a connection pool to avoid full reconnects
      serverSelectionTimeoutMS: 5000, // Reduce connection timeout
    });
    console.log("MONGOOSE IS CONNECTED!");
  } else {
    throw Error("PROVIDE VALID MONGO URI");
  }
}
