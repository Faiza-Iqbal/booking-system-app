// lib
import store from ".";
import { User } from "@auth0/auth0-react";

// src
import { placeType } from "./places/types";
import { BookingType } from "./booking/types";
import { TourStateType } from "./tours/types";
import { weatherType } from "./weather/types";
import { snackBarType } from "./snackBar/types";
import { TourDetailType } from "./tourDetails/types";

export type StateType = {
  places: placeType[];
  tours: TourStateType;
  tourDetails: TourDetailType;
  weather: weatherType;
  booking: BookingType;
  user: User;
  snackBar: snackBarType;
};

export type AppDispatch = typeof store.dispatch;
