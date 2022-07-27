import Booking from "../models/booking.js";

export const addBooking = async (req, res) => {
  const booking = req.body;
  const newBooking = new Booking(booking);

  try {
    await newBooking.save();

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(409).json({ meesage: error.meesage });
  }
};

export const updateBooking = async (req, res) => {
  const { id: _id } = req.params;
  const booking = req.body;
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      _id,
      { ...booking, _id },
      { new: true }
    );
    res.json(updatedBooking);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
