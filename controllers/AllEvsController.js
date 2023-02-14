import AllEvs from "../models/allEvs.js";
//add car brand
export const addEvBrand = async (req, res, next) => {
  const evBrand = new AllEvs(req.body);

  try {
    const addEvBrand = await evBrand.save();
    res.status(200).json(addEvBrand);
  } catch (err) {
    next(err);
  }
};

//get all  car brands

export const getEvBrand = async (req, res, next) => {
  try {
    const findEvBrands = await AllEvs.find();
    res.status(200).json(findEvBrands);
  } catch (err) {
    next(err);
  }
};
