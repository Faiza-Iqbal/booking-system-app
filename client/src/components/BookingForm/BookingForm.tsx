// lib
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Stack,
  useMediaQuery,
  Snackbar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

// src
import SubmitButton from "./SubmitButton";
import {
  getBooking,
  postBookingForm,
  updateBooking,
} from "../../store/booking/bookingSlice";
import { AppDispatch, stateType } from "../../store/types";
import { saveTours } from "../../store/tours/toursSlice";
import { useStyles } from "./BookingFormStyled.style";
import { MOBILE } from "../../styles/devices";
import { getStoredTourDetail } from "../../utils/helperFunctions";

const BookingForm = () => {
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(MOBILE);
  const dispatch = useDispatch<AppDispatch>();
  const { booking, status, error } = useSelector(
    (state: stateType) => state?.booking
  );
  const [localTourDetail, setLocalTourDetail] = useState(getStoredTourDetail());
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const hideSnackBar = () => setSnackBarOpen(false);

  const tourToSave = {
    name: localTourDetail?.title,
    city: localTourDetail?.city,
    description: localTourDetail?.listingName,
    price: localTourDetail?.price,
    startDate: localTourDetail?.checkin,
    endDate: localTourDetail?.checkout,
    facilities: localTourDetail?.listingPreviewAmenityNames,
    images: localTourDetail?.images,
    publicAddress: localTourDetail?.publicAddress,
    id: id ? id : localTourDetail?.id,
  };

  useEffect(() => {
    if (location.pathname.includes("update-tour")) dispatch(getBooking(id));
  }, []);

  useEffect(() => {
    if (status === "succeeded") {
      setSnackBarOpen(true);
      setTimeout(() => {
        hideSnackBar();
        navigate("/my-tours");
      }, 3000);
    }
  }, [status]);

  if (booking.userEmail) {
    const fields = [
      "name",
      "email",
      "phoneNo",
      "numOfAdults",
      "numOfChilds",
      "paymentMethod",
      "tourId",
      "userEmail",
    ];
    fields.map((field) => setValue(field, booking[field]));
  }

  const onSubmit = (data: any) => {
    data.tourId = id;
    try {
      if (location.pathname.includes("update-tour"))
        dispatch(updateBooking({ data, id: booking._id }));
      else {
        dispatch(postBookingForm(data));
        dispatch(saveTours(tourToSave));
      }
    } catch (error) {}
  };

  return (
    <Box className={isMobile ? classes.mobileFormView : classes.formWrapper}>
      <Snackbar open={snackBarOpen} message="Tour successfully booked!" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <Typography>
            Name <span className={classes.mandatory}>*</span>
          </Typography>
          <TextField
            {...register("name", { required: "Required" })}
            error={Boolean(errors.name)}
            helperText={errors.name ? "Please enter your name" : null}
          />
        </FormControl>
        <FormControl fullWidth>
          <Typography>
            Email<span className={classes.mandatory}>*</span>
          </Typography>
          <TextField
            type="email"
            {...register("email", { required: "Required" })}
            error={Boolean(errors.email)}
            helperText={errors.email ? "Please enter your email" : null}
          />
        </FormControl>
        <FormControl fullWidth>
          <Typography>
            Phone <span className={classes.mandatory}>*</span>
          </Typography>
          <TextField
            type="tel"
            {...register("phoneNo", { required: "Required" })}
            error={Boolean(errors.phone)}
            helperText={errors.phone ? "Please enter your phone number" : null}
          />
        </FormControl>
        <Stack flexDirection="row">
          <FormControl>
            <Typography>Number of adults</Typography>
            <TextField
              type="number"
              {...register("numOfAdults", { required: false })}
            />
          </FormControl>
          <FormControl sx={{ ml: 2 }}>
            <Typography>Number of children</Typography>
            <TextField
              type="number"
              {...register("numOfChilds", { required: false })}
            />
          </FormControl>
        </Stack>
        <Box>
          <Typography>
            Payment Method<span className={classes.mandatory}>*</span>
          </Typography>
          <FormControl fullWidth>
            <Select
              {...register("paymentMethod", { required: "Required" })}
              error={Boolean(errors.paymentMethod)}
              placeholder="Select"
              defaultValue={""}
            >
              <MenuItem value="Credit Card">Credit Card</MenuItem>
              <MenuItem value="Online Transfer"> Online Transfer</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <SubmitButton label="Confirm" />
      </form>
    </Box>
  );
};
export default BookingForm;
