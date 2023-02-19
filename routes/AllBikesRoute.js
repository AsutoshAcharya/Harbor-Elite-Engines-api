import express from "express";
import {
  addBike,
  addBikeBrand,
  getAllBikeTypes,
  getBikeBrand,
} from "../controllers/AllBikesController.js";

const router = express.Router();

//add brand of bike
router.post("/", addBikeBrand);
//get bike brands
router.get("/", getBikeBrand);

//add a bike
router.post("/types", addBike);
//get a all bike
router.post("/types", getAllBikeTypes);

export default router;
