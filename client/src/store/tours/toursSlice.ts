// lib
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// src
import {
  API_BASE_URL,
  API_HOST,
  API_KEY,
  SERVER_URL,
  TOURS_END_POINT,
  TOURS_END_POINT_NO_LOCATION,
} from "../../constants/apiConstants";
import { FiltersParam, Tour, TourStateType } from "./types";
import { TourDetailType } from "../tourDetails/types";
import api from "../../utils/api";
import { getCurrentUser } from "../../utils/helperFunctions";
import { homedir } from "os";

const initialState: TourStateType = {
  tours: [],
  status: "idle",
  error: null,
};

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
  "saveTours",
  async (tour: TourDetailType) => {
    const user = getCurrentUser();

    tour.userEmail = user.email;

    const response = await api.post(`${SERVER_URL}tours`, tour);

    return response;
  }
);

export const myTours = createAsyncThunk(`${SERVER_URL}tours`, async () => {
  const user = getCurrentUser();

  const response = await api.get(`${SERVER_URL}tours`, {
    params: { userEmail: user.email },
  });

  return response;
});

export const deleteTour = createAsyncThunk(
  `${SERVER_URL}delete_tours`,
  async (id: string | undefined) => {
    const response = await api.delete(`${SERVER_URL}tours/${id}`, {});
    return id;
  }
);

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    setTours: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTours.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchTours.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.tours = action.payload;
    });

    builder.addCase(fetchTours.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });

    builder.addCase(saveTours.fulfilled, (state, action) => {
      state.status = "succeeded";
    });

    builder.addCase(saveTours.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });

    builder.addCase(myTours.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(myTours.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.tours = action.payload;
    });

    builder.addCase(deleteTour.fulfilled, (state, action) => {
      state.status = "deleted";
      state.tours = state.tours.filter(
        (tour: Tour) => tour._id !== action.payload
      );
    });
  },
});

export const { setTours } = toursSlice.actions;
export default toursSlice.reducer;
