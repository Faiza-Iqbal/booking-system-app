import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBooking } from "../../store/booking/bookingSlice";
import { AppDispatch } from "../../store/types";
import BookTour from "../BookTour";

const UpdateBooking = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getBooking(id));
  });
  return <BookTour />;
};
export default UpdateBooking;
