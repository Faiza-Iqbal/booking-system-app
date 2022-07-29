// lib
import { createSlice } from "@reduxjs/toolkit";
import {
  getStoredTourDetail,
  setStoredTourDetail,
} from "../../utils/helperFunctions";

const initialState = {};

const tourDetailsSlice = createSlice({
  name: "tourDetails",
  initialState,
  reducers: {
    setTourDetails: (_, action) => {
      setStoredTourDetail(action.payload);
      return action.payload;
    },
    getTourDetails: (_, action) => {
      return getStoredTourDetail();
    },
  },
});

export const { setTourDetails, getTourDetails } = tourDetailsSlice.actions;
export default tourDetailsSlice.reducer;
