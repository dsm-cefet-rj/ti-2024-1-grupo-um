import { combineReducers } from "redux";
import exercisesReducer from "./exercises/reducer";

const rootReducer = combineReducers({exercisesReducer})

export default rootReducer;