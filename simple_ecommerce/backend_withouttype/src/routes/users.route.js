import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/users.controller.js";

export const AuthRouter = Router();

AuthRouter.post("/login", loginController);
AuthRouter.post("/register", registerController);
