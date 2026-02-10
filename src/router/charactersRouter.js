import express from "express";

const router = express.Router()

import {getAll, getOne} from "../controller/charactersController.js"


// get http://localhost:3310/api/characters
router.get("/", getAll)
// get http://localhost:3310/api/characters/2
router.get("/:characterId", getOne)

export default router