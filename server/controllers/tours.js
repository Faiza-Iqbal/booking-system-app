import Tour from "../models/tour.js";

export const addTour = async (req, res) => {
  const tour = req.body;
  console.log("tour", tour);
  const newTour = new Tour(tour);

  try {
    await newTour.save();

    res.status(201).json(newTour);
  } catch (error) {
    res.status(409).json({ meesage: error.meesage });
  }
};
