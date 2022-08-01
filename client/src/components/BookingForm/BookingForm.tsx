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
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

// src
import SubmitButton from "./SubmitButton";
import {
  postBookingForm,
  updateBooking,
} from "../../store/booking/bookingSlice";
import { AppDispatch, StateType } from "../../store/types";
import { saveTours } from "../../store/tours/toursSlice";
import { useStyles } from "./BookingFormStyled.style";
import { MOBILE } from "../../styles/devices";
import { getStoredTourDetail } from "../../utils/helperFunctions";
import { DataType, FieldsType } from "./types";
import { setSnackBar } from "../../store/snackBar";

const BookingForm = () => {
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(MOBILE);
  const dispatch = useDispatch<AppDispatch>();
  const { booking, status } = useSelector((state: StateType) => state?.booking);
  const [localTourDetail, setLocalTourDetail] = useState(getStoredTourDetail());
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<DataType>();

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

  if (booking?.userEmail) {
    const fields: FieldsType[] = [
      "name",
      "email",
      "phoneNo",
      "numOfAdults",
      "numOfChilds",
      "paymentMethod",
      "tourId",
    ];
    fields.map((field) => {
      return setValue(field, booking[field]);
    });
  }

  const onSubmit: SubmitHandler<DataType> = (data: DataType) => {
    console.log("data", data);
    data.tourId = id;
    try {
      if (location.pathname.includes("update-tour")) {
        dispatch(updateBooking({ data, id: booking._id }));
        dispatch(
          setSnackBar({
            message: "Tour successfully updated!",
            visible: true,
          })
        );
      } else {
        dispatch(postBookingForm(data));
        if (status === "succeeded") {
          dispatch(
            setSnackBar({
              message: "Tour successfully booked",
              visible: true,
            })
          );
        }
        dispatch(saveTours(tourToSave));
      }
      navigate("/my-tours");
    } catch (error) {
      dispatch(
        setSnackBar({
          message: { error },
          visible: true,
        })
      );
    }
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
            inputProps={{ pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}" }}
            placeholder="123-45-678"
            type="tel"
            {...register("phoneNo", { required: "Required" })}
            error={Boolean(errors.phoneNo)}
            helperText={errors.phoneNo ? "Invalid Phone Number" : null}
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
              defaultValue=""
              // options={{ credit: "credit", online: "online" }}
            >
              <MenuItem value="creditCard">Credit Card</MenuItem>
              <MenuItem value="onlineTransfer"> Online Transfer</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <SubmitButton label="Confirm" />
      </form>
    </Box>
  );
};
export default BookingForm;
