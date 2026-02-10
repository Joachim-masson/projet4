import express from "express";
import { upload } from "../middleware/uploadService.js"

const router = express.Router()

import {getAll, getOne, addOne, edit, destroy} from "../controller/charactersController.js"


// http://localhost:3310/api/characters
router.get("/", getAll)
// http://localhost:3310/api/characters/2
router.get("/:characterId", getOne)
// http://localhost:3310/api/characters
router.post("/", upload.single("portrait-path"), addOne)
// http://localhost:3310/api/characters/2
router.patch("/:characterId", upload.single("portrait-path"), edit)
// http://localhost:3310/api/characters/11
router.delete("/:characterId", destroy);


export default router