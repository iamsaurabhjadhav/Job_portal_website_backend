import express from "express";
import {
  getUser,
  login,
  logout,
  register,
  updatePassword,
  updateUser,
} from "../controller/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);
router.put("/update/profile", isAuthenticated, updateUser);
router.put("/update/password", isAuthenticated, updatePassword);

export default router;
