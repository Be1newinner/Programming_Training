import mongoose from "mongoose";

export default async function ConnectDB() {
  if (process.env.MONGO_URI) {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGOOSE IS CONNECTED!");
  } else {
    throw Error("PROVIDE VALID MONGO URI");
  }
}
