import mongoose from "mongoose";

const AllBikes = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    image: { type: String, required: true },
    origin: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("AllBikes", AllBikes);
