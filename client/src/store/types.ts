import store from ".";

// src
import { BookingType } from "./booking/types";
import { placeType } from "./places/types";
import { TourDetailType } from "./tourDetails/types";
import { Tour } from "./tours/types";
import { weatherType } from "./weather/types";

export type stateType = {
  places: placeType[];
  tours: Tour[];
  tourDetails: TourDetailType;
  weather: weatherType;
  booking: BookingType;
};

export type AppDispatch = typeof store.dispatch;
