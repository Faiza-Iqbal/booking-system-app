// lib
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// src
import { SERVER_URL } from "../../constants/apiConstants";
import api from "../../utils/api";
import { getCurrentUser } from "../../utils/helperFunctions";
import { BookingStateType, BookingType, UpdateBooking } from "./types";

const initialState: BookingStateType = {
  booking: {
    name: "",
    email: "",
    phoneNo: "",
    numOfAdults: "",
    numOfChilds: "",
    paymentMethod: "",
    tourId: "",
  },
  status: "idle",
  error: null,
};

const user = getCurrentUser();

export const postBookingForm = createAsyncThunk(
  "post_booking",
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
  `update_booking`,
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
    builder.addCase(postBookingForm.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(postBookingForm.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.booking = action.payload;
    });
    builder.addCase(postBookingForm.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
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
