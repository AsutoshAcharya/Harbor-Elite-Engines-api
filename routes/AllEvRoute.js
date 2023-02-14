import express from "express";
import { addEvBrand, getEvBrand } from "../controllers/AllEvsController.js";

const router = express.Router();

//add brand of bike
router.post("/", addEvBrand);
//get bike brands
router.get("/", getEvBrand);

export default router;
