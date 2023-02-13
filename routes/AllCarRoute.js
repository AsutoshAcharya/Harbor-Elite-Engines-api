import express from "express";
import { addCarBrand, getCarBrand } from "../controllers/AllCarsController.js";

const router = express.Router();

//add brand of bike
router.post("/", addCarBrand);
//get bike brands
router.get("/", getCarBrand);

export default router;
