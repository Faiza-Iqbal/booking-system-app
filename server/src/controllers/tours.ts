import { Request, Response } from "express";
import Tour from "../models/tour";

export const addTour = async (req: Request, res: Response) => {
  const tour = req.body.tour;
  const newTour = new Tour(tour);

  try {
    await newTour.save();

    res.status(201).json(newTour);
  } catch (error: any) {
    res.status(409).json({ meesage: error.meesage });
  }
};

export const getTours = async (req: Request, res: Response) => {
  try {
    const tours = await Tour.find(req.query);

    res.status(200).json(tours);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTour = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Tour.findByIdAndRemove(id);

    res.json({ message: "Tour deleted successfully!" });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
