import { model, Schema } from "mongoose";
import { hashing } from "../utils/hashing.js";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    gender: { type: String, enum: ["MALE", "FEMALE", "OTHER"] },
    role: {
      type: String,
      enum: ["VENDOR", "USER", "ADMIN"]
    },
    password: {
      type: String,
      minlength: 6,
      maxlength: 12,
    },
  },
  {
    autoIndex: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await hashing(this.password);
  next();
});

export const UserModel = model("User", UserSchema);
