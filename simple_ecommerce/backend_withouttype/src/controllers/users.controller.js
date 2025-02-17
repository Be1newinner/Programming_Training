import { UserModel } from "../models/users.model.js";
import { verifyHash } from "../utils/hashing.js";

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).lean();

    if (!user) {
      res.status(404).json({
        error: "No User Found!",
        message: "User Logged In Failed!",
        data: null,
      });
      return;
    }

    const isPasswordValid = await verifyHash(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({
        error: "Invalid credentials",
        message: "Invalid email or password!",
        data: null,
      });
      return;
    }

    // ✅ Remove sensitive data before sending response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;

    res.status(200).json({
      error: null,
      message: "User logged in successfully!",
      data: userWithoutPassword,
    });
    return;
  } catch (error) {
    const errorMessage = error.message || "Unexpected error!";

    res.status(500).json({
      error: error,
      message: errorMessage,
      data: null,
    });
  }
}

export async function registerController(req, res) {
  try {
    const { email, password, name, gender, role, phone } = req.body;

    const userData = new UserModel({
      email,
      password,
      name,
      gender,
      role,
      phone,
    });

    const user = await userData.save();

    if (user) {
      res.status(200).json({
        error: null,
        message: "User Logged In Success!",
        data: user,
      });
    } else {
      res.status(404).json({
        error: "No User Found!",
        message: "User Logged In Failed!",
        data: null,
      });
    }
  } catch (error) {
    const errorMessage = error.message || "Unexpected error!";

    res.status(500).json({
      error: error,
      message: errorMessage,
      data: null,
    });
  }
}
