import express from "express";
const router = express.Router()

import {getAll, getOne, addOne, edit, destroy} from "../controller/locationController.js"
import { upload } from "../middleware/uploadService.js" // Import de Multer

// http://localhost:3310/api/location
router.get("/", getAll)
// http://localhost:3310/api/location/2
router.get("/:locationId", getOne)
// http://localhost:3310/api/location
router.post("/", upload.single("img-path"), addOne)
// http://localhost:3310/api/location/2
router.patch("/:locationId", upload.single("img-path"), edit)
// http://localhost:3310/api/location/11
router.delete("/:locationId", destroy);


export default router