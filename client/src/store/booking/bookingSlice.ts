// lib
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// src
import { SERVER_URL } from "../../constants/apiConstants";
import api from "../../utils/api";
import { FormDataType } from "./types";

const initialState: FormDataType = {
  name: "",
  email: "",
  phoneNo: "",
  numOfAdults: "",
  numOfChilds: "",
  paymentMethod: "",
  tourId: "",
};

export const postBookingForm = createAsyncThunk(
  SERVER_URL,
  async (formData: FormDataType) => {
    const response = await api.post(`${SERVER_URL}bookings`, formData);
    return response;
  }
);

// export const updateBooking = createAsyncThunk(
//   `${SERVER_URL}bookings`,
//   async ({ id, formData }) => {
//     console.log("update bookings");

//     const response = await api.patch(`${SERVER_URL}bookings/${id}`, formData);

//     console.log("update rs", response);
//     return response;
//   }
// );

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
    // builder.addCase(updateBooking.fulfilled, (_, action) => {
    //   return action.payload;
    // });
    // builder.addCase(updateBooking.rejected, (_, action) => {
    //   console.log("API request failed");
    // });
  },
});

export const { setBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
