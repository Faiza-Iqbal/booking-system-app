// lib
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// src
import api from "../../utils/api";
import {
  API_BASE_URL,
  API_HOST,
  API_KEY,
  SERVER_URL,
  TOURS_END_POINT,
  TOURS_END_POINT_NO_LOCATION,
} from "../../constants/apiConstants";
import { FiltersParam, Tour } from "./types";
import { TourDetailType } from "../tourDetails/types";
import axios from "axios";

const initialState: Array<Tour> = [];

export const fetchTours = createAsyncThunk(
  `${API_BASE_URL}${TOURS_END_POINT}`,
  async (filterParam: FiltersParam) => {
    if (!filterParam) return;
    let tourApi = `${API_BASE_URL}${TOURS_END_POINT}`;
    if (!filterParam.id)
      tourApi = `${API_BASE_URL}${TOURS_END_POINT_NO_LOCATION}`;

    const response = await api.get(tourApi, {
      params: filterParam,
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    });
    return response.data;
  }
);

export const saveTours = createAsyncThunk(
  SERVER_URL,
  async (tour: TourDetailType) => {
    const response = await axios.post(`${SERVER_URL}tours`, tour);
    console.log("my tour api response", response);
    return response;
  }
);

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    setTours: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTours.fulfilled, (_, action) => {
      return action.payload;
    });
    builder.addCase(saveTours.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { setTours } = toursSlice.actions;
export default toursSlice.reducer;
