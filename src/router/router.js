import express from "express";
const router = express.Router()

import charactersRouter from "./charactersRouter.js"
import userRouter from "./userRouter.js"
import authRouter from "./authRouter.js"
import locationRouter from "./locationRouter.js"

// http://localhost:3310/api/characters
router.use("/characters", charactersRouter)
// http://localhost:3310/api/user
router.use("/user", userRouter)
// http://localhost:3310/api/auth
router.use("/auth", authRouter)
// http://localhost:3310/api/location
router.use("/location", locationRouter)


export default router 