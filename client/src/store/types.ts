import { User } from "@auth0/auth0-react";
import store from ".";

// src
import { BookingType } from "./booking/types";
import { placeType } from "./places/types";
import { TourDetailType } from "./tourDetails/types";
import { TourStateType } from "./tours/types";
import { weatherType } from "./weather/types";

export type stateType = {
  places: placeType[];
  tours: TourStateType;
  tourDetails: TourDetailType;
  weather: weatherType;
  booking: BookingType;
  user: User;
};

export type AppDispatch = typeof store.dispatch;
