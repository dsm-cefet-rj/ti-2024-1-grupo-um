import { combineReducers } from "redux";
import exercisesReducer from "./exercises/slice";
import trainingsReducer from "./trainings/slice";
import personaisReducer from "./personal/slice";
import userReducer from "./user/slice";

const rootReducer = combineReducers({
    exercises: exercisesReducer,
    trainings: trainingsReducer,
    personais: personaisReducer,
    user: userReducer
    })

export default rootReducer;