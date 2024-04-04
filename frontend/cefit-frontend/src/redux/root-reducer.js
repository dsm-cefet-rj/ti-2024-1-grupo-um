import { combineReducers } from "redux";
import exercisesReducer from "./exercises/slice";
import trainingsReducer from "./trainings/slice"

const rootReducer = combineReducers({exercises: exercisesReducer, trainings: trainingsReducer})

export default rootReducer;