import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: true,
  },

  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  facilities: [{ type: String, required: false }],
  images: [{ type: String, required: false }],
});

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;
