import mongoose from "mongoose";

const AllEvs = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("AllEvs", AllEvs);
