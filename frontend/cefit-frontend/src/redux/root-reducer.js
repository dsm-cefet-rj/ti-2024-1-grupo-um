import { combineReducers } from "redux";
import exercisesReducer from "./exercises/slice";

const rootReducer = combineReducers({exercises: exercisesReducer})

export default rootReducer;