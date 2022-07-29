import { Request, Response } from "express";

import Booking from "../models/booking";

export const addBooking = async (req: Request, res: Response) => {
  const booking = req.body;
  const newBooking = new Booking(booking);

  try {
    await newBooking.save();

    res.status(201).json(newBooking);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};

export const getBooking = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.find(req.query);

    res.json(booking);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  const booking = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { ...booking, id },
      { new: true }
    );

    res.json(updatedBooking);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
