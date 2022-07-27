import Tour from "../models/tour.js";
import mongoose from "mongoose";

export const addTour = async (req, res) => {
  const tour = req.body;
  const newTour = new Tour(tour);

  try {
    await newTour.save();

    res.status(201).json(newTour);
  } catch (error) {
    res.status(409).json({ meesage: error.meesage });
  }
};

export const getTours = async (req, res) => {
  try {
    const tours = await Tour.find(req.query);

    res.status(200).json(tours);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTour = async (req, res) => {
  const { id } = req.params;

  try {
    await Tour.findByIdAndRemove(id);

    res.json({ message: "Tour deleted successfully!" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
