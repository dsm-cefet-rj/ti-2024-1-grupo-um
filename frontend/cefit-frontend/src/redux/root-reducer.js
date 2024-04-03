import { combineReducers } from "redux";
import trainingReducer from "./trainings/reducer";

const rootReducer = combineReducers({trainingReducer})

export default rootReducer;