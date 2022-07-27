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
import { getCurrentUser } from "../../utils/helperFunctions";

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
    const user = getCurrentUser();
    tour.userEmail = user.email;
    const response = await api.post(`${SERVER_URL}tours`, tour);
    console.log("my tour api response in thunk", response);
    return response;
  }
);

export const myTours = createAsyncThunk(
  `${SERVER_URL}tours`,
  async (abc: "test") => {
    console.log("my tours thunk");
    const user = getCurrentUser();
    console.log("user tours", user);

    const response = await api.get(`${SERVER_URL}tours`, {
      params: { userEmail: user.email },
    });
    console.log("my tours", response);
    return response;
  }
);

export const deleteTour = createAsyncThunk(
  `${SERVER_URL}delete_tours`,
  async (id: string | undefined) => {
    console.log("delete tour");
    const user = getCurrentUser();

    const response = await api.delete(`${SERVER_URL}tours/${id}`, {
      params: { userEmail: user.email },
    });
    console.log("delete rs", response);
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
    builder.addCase(saveTours.fulfilled, (state, action) => {
      return state;
    });
    builder.addCase(saveTours.rejected, (_, action) => {
      console.log("API request failed");
    });
    builder.addCase(myTours.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteTour.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setTours } = toursSlice.actions;
export default toursSlice.reducer;
