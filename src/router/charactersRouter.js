import express from "express";

const router = express.Router()

import {getAll, getOne, addOne, edit, destroy} from "../controller/charactersController.js"


// http://localhost:3310/api/characters
router.get("/", getAll)
// http://localhost:3310/api/characters/2
router.get("/:characterId", getOne)
// http://localhost:3310/api/characters
router.post("/", addOne)
// http://localhost:3310/api/characters/2
router.patch("/:characterId", edit)
// http://localhost:3310/api/characters/11
router.delete("/:characterId", destroy);


export default router