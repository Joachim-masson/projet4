import express from "express";
const router = express.Router()

import {browseAll, getOne, addOne, edit, destroy} from "../controller/userController.js"

router.get("/", browseAll)
router.get('/:id',getOne)
router.post("/", addOne)

router.patch("/:id", edit)    // Pour modifier l'habilitation
router.delete("/:id", destroy) // Pour supprimer l'utilisateur

export default router