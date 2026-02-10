import express from "express";

const router = express.Router()

import {getAll, getOne, addOne, edit, destroy} from "../controller/locationController.js"


// http://localhost:3310/api/location
router.get("/", getAll)
// http://localhost:3310/api/location/2
router.get("/:locationId", getOne)
// http://localhost:3310/api/location
router.post("/", addOne)
// http://localhost:3310/api/location/2
router.patch("/:locationId", edit)
// http://localhost:3310/api/location/11
router.delete("/:locationId", destroy);


export default router