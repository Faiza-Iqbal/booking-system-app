// lib
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// src
import { placeType } from "./types";
import api from "../../utils/api";
import {
  API_BASE_URL,
  API_HOST,
  API_KEY,
  PLACES_END_POINT,
} from "../../constants/apiConstants";

const initialState: Array<placeType> = [];

export const fetchPlaces = createAsyncThunk(
  `${API_BASE_URL}${PLACES_END_POINT}`,
  async (placeName: string | undefined) => {
    if (!placeName) return;
    const response = await api.get(`${API_BASE_URL}${PLACES_END_POINT}`, {
      params: { query: placeName },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    });
    console.log("places", response.data);
    return response.data;
  }
);

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setPlaces: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlaces.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { setPlaces } = placesSlice.actions;
export default placesSlice.reducer;
