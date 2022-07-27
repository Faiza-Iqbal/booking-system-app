// lib
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// src
import { SERVER_URL } from "../../constants/apiConstants";
import api from "../../utils/api";
import { getCurrentUser } from "../../utils/helperFunctions";
import { BookingType, UpdateBooking } from "./types";

const initialState: BookingType = {
  name: "",
  email: "",
  phoneNo: "",
  numOfAdults: "",
  numOfChilds: "",
  paymentMethod: "",
  tourId: "",
};

const user = getCurrentUser();

export const postBookingForm = createAsyncThunk(
  SERVER_URL,
  async (formData: BookingType) => {
    formData.userEmail = user.email;
    const response = await api.post(`${SERVER_URL}bookings`, formData);
    return response;
  }
);

export const getBooking = createAsyncThunk(
  "get-booking",
  async (id: string | undefined) => {
    const response = await api.get(`${SERVER_URL}bookings`, {
      params: { userEmail: user.email, tourId: id },
    });
    if (response.length > 0) return response[0];
    else return initialState;
  }
);

export const updateBooking = createAsyncThunk(
  `${SERVER_URL}bookings`,
  async ({ id, data }: UpdateBooking) => {
    const response = await api.patch(`${SERVER_URL}bookings/${id}`, data);

    return response;
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBooking: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(postBookingForm.fulfilled, (_, action) => {
      return action.payload;
    });
    builder.addCase(postBookingForm.rejected, (_, action) => {
      console.log("API request failed");
    });
    builder.addCase(getBooking.fulfilled, (_, action) => {
      return action.payload;
    });
    builder.addCase(updateBooking.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { setBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
