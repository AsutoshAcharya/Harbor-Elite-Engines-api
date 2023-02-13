import AllCars from "../models/allCars.js";
//add car brand
export const addCarBrand = async (req, res, next) => {
  const carBrand = new AllCars(req.body);

  try {
    const addCarBrand = await carBrand.save();
    res.status(200).json(addCarBrand);
  } catch (err) {
    next(err);
  }
};

//get all  car brands

export const getCarBrand = async (req, res, next) => {
  try {
    const findCarBrands = await AllCars.find();
    res.status(200).json(findCarBrands);
  } catch (err) {
    next(err);
  }
};
