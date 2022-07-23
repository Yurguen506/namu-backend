import express from "express";
import { getAllPlaces, getPlaceById } from "../controllers/PlaceController.js";
import { getAllPhotographers, getPhotographerById } from "../controllers/PhotographerController.js";
import { previewPlacesImages } from "../controllers/ImageController.js";
import { getAllCoordinates, getCoordinateById } from "../controllers/CoordinateController.js";

const router = express.Router();

router.get("/places/", getAllPlaces);
router.get( "/place/:id" , getPlaceById)

router.get("/photographers/", getAllPhotographers)
router.get( "/photographer/:id" , getPhotographerById)

router.get("/coordinates/", getAllCoordinates)
router.get( "/coordinate/:id" , getCoordinateById)


router.get ('/image/:id', previewPlacesImages)
router.get("/image/", getAllImages);

// router.post ('/:id/upload', uploadFile.single("file"), uploadBlogImage)

export default router;