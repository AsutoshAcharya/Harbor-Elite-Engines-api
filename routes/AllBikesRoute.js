import express from "express";
import {
  addBikeBrand,
  getBikeBrand,
} from "../controllers/AllBikesController.js";

const router = express.Router();

//add brand of bike
router.post("/", addBikeBrand);
//get bike brands
router.get("/", getBikeBrand);

export default router;
