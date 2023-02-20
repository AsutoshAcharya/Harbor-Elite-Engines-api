import AllBikes from "../models/allbikes.js";
import allBikeTypes from "../models/allBikeTypes.js";
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

//add a bike type
export const addBike = async (req, res, next) => {
  const addBikeType = new allBikeTypes(req.body);

  try {
    const addNewBike = await addBikeType.save();
    res.status(200).json(addNewBike);
  } catch (err) {
    next(err);
  }
};

//get allbike types

export const getAllBikeTypes = async (req, res, next) => {
  try {
    const getAllBikeTypes = await allBikeTypes.find();
    res.status(200).json(getAllBikeTypes);
  } catch (err) {
    next(err);
  }
};
//get allbikes of specific type
export const getAllBikesOfSpecificBrand = async (req, res, next) => {
  const searchBike = req.params.find;
  console.log(searchBike);

  try {
    const getAllBikesOfBrand = await allBikeTypes.find({ brand: searchBike });
    res.status(200).json(getAllBikesOfBrand);
  } catch (err) {
    next(err);
  }
};
