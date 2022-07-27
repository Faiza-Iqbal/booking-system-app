// lib
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  Stack,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// src
import { useStyles } from "./BookingFormStyled.style";
import SubmitButton from "./SubmitButton";
import { postBookingForm } from "../../store/booking/bookingSlice";
import { AppDispatch, stateType } from "../../store/types";
import { mobile } from "../../styles/devices";
import { saveTours } from "../../store/tours/toursSlice";

const BookingForm = () => {
  const tour = useSelector((state: stateType) => state?.tourDetails);
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useMediaQuery(mobile);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const tourToSave = {
    name: tour?.title,
    city: tour?.city,
    description: tour?.listingName,
    price: tour?.price,
    startDate: tour?.checkin,
    endDate: tour?.checkout,
    facilities: tour?.listingPreviewAmenityNames,
    images: tour?.images,
    publicAddress: tour?.publicAddress,
    id: tour?.id,
  };

  const onSubmit = (data: any) => {
    dispatch(postBookingForm(data));
    dispatch(saveTours(tourToSave));
    navigate("/my-tours");
  };

  return (
    <Box className={isMobile ? classes.mobileFormView : classes.formWrapper}>
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
            {...register("phone", { required: "Required" })}
            error={Boolean(errors.phone)}
            helperText={errors.phone ? "Please enter your phone number" : null}
          />
        </FormControl>
        <Stack flexDirection="row">
          <FormControl>
            <Typography>Number of adults</Typography>
            <TextField
              type="number"
              {...register("noOfAdults", { required: false })}
            />
          </FormControl>
          <FormControl sx={{ ml: 2 }}>
            <Typography>Number of children</Typography>
            <TextField
              type="number"
              {...register("noOfAdults", { required: false })}
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
            >
              <MenuItem value="Method 1">Method 1</MenuItem>
              <MenuItem value="Method 2"> Method 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <SubmitButton label="Confirm" />
      </form>
    </Box>
  );
};
export default BookingForm;
