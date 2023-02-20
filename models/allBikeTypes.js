import mongoose from "mongoose";

const AllBikeTypes = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  images: [{ type: String, required: true }],
  price: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  max_power: {
    type: String,
    required: true,
  },
  gear: {
    type: String,
    required: true,
  },
  abs: {
    type: String,
    required: true,
  },
  top_speed: {
    type: String,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
});

export default mongoose.model("AllBikeTypes", AllBikeTypes);
