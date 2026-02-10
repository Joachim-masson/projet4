import express from "express";

const router = express.Router()

import {getAll, getOne, addOne} from "../controller/charactersController.js"


// http://localhost:3310/api/characters
router.get("/", getAll)
// http://localhost:3310/api/characters/2
router.get("/:characterId", getOne)
// http://localhost:3310/api/characters
router.post("/", addOne)

export default router