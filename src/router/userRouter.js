import express from "express";
const router = express.Router()

import {browseAll, getOne, addOne} from "../controller/userController.js"

router.get("/", browseAll)
router.get('/:id',getOne)
router.post("/", addOne)

export default router