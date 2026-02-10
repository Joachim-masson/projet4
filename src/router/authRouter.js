import express from "express";
const router = express.Router()

import { login } from "../controller/authController.js";

// http://localhost:3310/api/auth/login
router.post("/login", login)

export default router