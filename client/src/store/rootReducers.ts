import { combineReducers } from "redux";

// src
import places from "./places";
import tourDetails from "./tourDetails";
import booking from "./booking";
import tours from "./tours";
import weather from "./weather";
import user from "./user";
import snackBar from "./snackBar";

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
