import mongoose from "mongoose";

const AllCars = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("AllCars", AllCars);
