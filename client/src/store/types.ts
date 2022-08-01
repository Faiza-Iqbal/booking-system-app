import { User } from "@auth0/auth0-react";
import store from ".";

// src
import { BookingType } from "./booking/types";
import { placeType } from "./places/types";
import { snackBarType } from "./snackBar/snackBar.types";
import { TourDetailType } from "./tourDetails/types";
import { TourStateType } from "./tours/types";
import { weatherType } from "./weather/types";

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
