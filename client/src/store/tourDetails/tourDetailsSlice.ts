// lib
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const tourDetailsSlice = createSlice({
  name: "tourDetails",
  initialState,
  reducers: {
    setTourDetails: (_, action) => action.payload,
  },
});

export const { setTourDetails } = tourDetailsSlice.actions;
export default tourDetailsSlice.reducer;
