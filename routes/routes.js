import express from "express";
import { getAllPlaces, getPlaceById } from "../controllers/PlaceController.js";
import { getAllPhotographers, getPhotographerById } from "../controllers/PhotographerController.js";
import { previewPlacesImages } from "../controllers/ImageController.js";
import { getAllCoordinates, getCoordinateById } from "../controllers/CoordinateController.js";

const router = express.Router();

router.get("/", getAllPlaces)
router.get( "/:id" , getPlaceById)

router.get("/", getAllPhotographers)
router.get( "/:id" , getPhotographerById)

router.get("/", getAllCoordinates)
router.get( "/:id" , getCoordinateById)


router.get ('/:id/preview', previewPlacesImages)

// router.post ('/:id/upload', uploadFile.single("file"), uploadBlogImage)

export default router;