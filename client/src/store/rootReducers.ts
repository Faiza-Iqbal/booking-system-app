// lib
import { combineReducers } from "redux";

// src
import user from "./user";
import tours from "./tours";
import places from "./places";
import weather from "./weather";
import booking from "./booking";
import snackBar from "./snackBar";
import tourDetails from "./tourDetails";

const rootReducers = combineReducers({
  places,
  tourDetails,
  booking,
  tours,
  weather,
  user,
  snackBar,
});
export default rootReducers;
