import { combineReducers } from "@reduxjs/toolkit";
import rocketsReducer from "./slices/rockets/rockets.slice";
import missionsReducer from "./slices/missions/missions.slice";

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer
});

export default rootReducer;
