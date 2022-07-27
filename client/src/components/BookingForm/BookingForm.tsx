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
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// src
import { useStyles } from "./BookingFormStyled.style";
import SubmitButton from "./SubmitButton";
import { postBookingForm } from "../../store/booking/bookingSlice";
import { AppDispatch, stateType } from "../../store/types";
import { mobile } from "../../styles/devices";
import { saveTours } from "../../store/tours/toursSlice";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [numOfAdults, setNumOfAdults] = useState("0");
  const [numOfChilds, setNumOfChilds] = useState("0");
  const [paymentMethod, setPaymentMethod] = useState("");
  const tour = useSelector((state: stateType) => state?.tourDetails);
  const search = useLocation().search;
  const tourId = new URLSearchParams(search).get("id");
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useMediaQuery(mobile);

  console.log("tour", tour);
  const tourToSave = {
    name: tour?.title,
    city: tour?.city,
    description: tour?.listingName,
    price: tour?.price,
    startDate: tour?.checkin,
    endDate: tour?.checkout,
    facilities: tour?.listingPreviewAmenityNames,
    images: tour?.images,
  };
  const tour_id = window.location.href.split("tour/")[1];

  const handlePaymentMethod = (event: SelectChangeEvent) => {
    setPaymentMethod(event.target.value);
  };

  const bookingFormData = {
    name: name,
    email: email,
    phoneNo: phoneNo,
    numOfAdults: numOfAdults,
    numOfChilds: numOfChilds,
    paymentMethod: paymentMethod,
    tourId: tour_id,
  };

  const onFormSubmit = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(postBookingForm(bookingFormData));
    dispatch(saveTours(tourToSave));
  };

  return (
    <Box className={isMobile ? classes.mobileFormView : classes.formWrapper}>
      <FormControl fullWidth>
        <Typography>
          Name <span className={classes.mandatory}>*</span>
        </Typography>
        <TextField value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl fullWidth>
        <Typography>
          Email<span className={classes.mandatory}>*</span>
        </Typography>
        <TextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <Typography>
          Phone <span className={classes.mandatory}>*</span>
        </Typography>
        <TextField
          type="tel"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
      </FormControl>
      <Stack flexDirection="row">
        <FormControl>
          <Typography>Number of adults</Typography>
          <TextField
            type="number"
            value={numOfAdults}
            onChange={(e) => setNumOfAdults(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ ml: 2 }}>
          <Typography>Number of children</Typography>
          <TextField
            type="number"
            value={numOfChilds}
            onChange={(e) => setNumOfChilds(e.target.value)}
          />
        </FormControl>
      </Stack>
      <Box>
        <Typography>
          Payment Method<span className={classes.mandatory}>*</span>
        </Typography>
        <FormControl fullWidth>
          <Select
            value={paymentMethod}
            onChange={handlePaymentMethod}
            placeholder="Select"
          >
            <MenuItem value="Method 1">Method 1</MenuItem>
            <MenuItem value="Method 2"> Method 2</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <SubmitButton label="Confirm" onFormSubmit={onFormSubmit} />
    </Box>
  );
};
export default BookingForm;
