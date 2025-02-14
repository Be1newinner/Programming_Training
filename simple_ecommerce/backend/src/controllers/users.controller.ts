import { Request, Response } from "express";
import { UserModel, UserStored } from "../models/users.model.ts";
import { verifyHash } from "../utils/hashing.ts";
import { generateLoginTokens } from "../utils/tokens.ts";

export async function loginController(req: Request, res: Response) {
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
      return res.status(401).json({
        error: "Invalid credentials",
        message: "Invalid email or password!",
        data: null,
      });
    }

    // ✅ Await the token generation (Fixes Promise issue)
    const tokens = await generateLoginTokens({
      email: user.email,
      role: user.role,
    });

    // ✅ Remove password before sending response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;

    return res.status(200).json({
      error: null,
      message: "User logged in successfully!",
      data: { ...userWithoutPassword, ...tokens },
    });
  } catch (error) {
    const errorMessage = (error as Error).message || "Unexpected error!";

    res.status(500).json({
      error: error,
      message: errorMessage,
      data: null,
    });
  }
}

export async function registerController(req: Request, res: Response) {
  try {
    const { email, password, name, gender, role, phone } = <UserStored>req.body;

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
    const errorMessage = (error as Error).message || "Unexpected error!";

    res.status(500).json({
      error: error,
      message: errorMessage,
      data: null,
    });
  }
}
