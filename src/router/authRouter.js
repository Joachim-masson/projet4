import express from "express";
const router = express.Router()

import { login, logout, checkAuth } from "../controller/authController.js";

// http://localhost:3310/api/auth/login
router.post("/login", login)
// http://localhost:3310/api/auth/logout
router.post("/logout", logout);

// Route pour vérifier si l'utilisateur est déjà connecté via son cookie
router.get("/me", checkAuth);

export default router