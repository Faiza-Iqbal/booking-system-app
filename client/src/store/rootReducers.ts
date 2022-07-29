import { combineReducers } from "redux";

// src
import places from "./places";
import tourDetails from "./tourDetails";
import booking from "./booking";
import tours from "./tours";
import weather from "./weather";

const rootReducers = combineReducers({
  places,
  tourDetails,
  booking,
  tours,
  weather,
});
export default rootReducers;
