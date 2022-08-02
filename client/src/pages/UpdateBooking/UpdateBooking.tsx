// lib
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// src
import BookTour from "../BookTour";
import { AppDispatch } from "../../store/types";
import { getBooking } from "../../store/booking/bookingSlice";

const UpdateBooking = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getBooking(id));
  });

  return <BookTour />;
};

export default UpdateBooking;
