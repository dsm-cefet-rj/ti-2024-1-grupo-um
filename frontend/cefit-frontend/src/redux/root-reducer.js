import { combineReducers } from "redux";
import exercisesReducer from "./exercises/slice";
import trainingsReducer from "./trainings/slice";
import personaisReducer from "./personal/slice";

const rootReducer = combineReducers({
    exercises: exercisesReducer,
    trainings: trainingsReducer,
    personais: personaisReducer
    })

export default rootReducer;