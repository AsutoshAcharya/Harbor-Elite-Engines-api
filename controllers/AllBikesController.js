import AllBikes from "../models/allbikes.js";
//add bike brand
export const addBikeBrand = async (req, res, next) => {
  const bikeBrand = new AllBikes(req.body);

  try {
    const addBikeBrand = await bikeBrand.save();
    res.status(200).json(addBikeBrand);
  } catch (err) {
    next(err);
  }
};

//get all  bike brands

export const getBikeBrand = async (req, res, next) => {
  try {
    const findBikeBrands = await AllBikes.find();
    res.status(200).json(findBikeBrands);
  } catch (err) {
    next(err);
  }
};
