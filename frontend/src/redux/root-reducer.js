import { combineReducers } from "redux";
import userReducer from "./user/slice";
import exercisesReducer from "./exercises/slice";
import trainingsReducer from "./trainings/slice";
import personaisReducer from "./personal/slice";
import formsReducer from "./form-treino/slice";
import anamneseReducer from "./anamnese/slice";
import alunoReducer from './aluno/slice';
import authReducer from './authentication/slice'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    exercises: exercisesReducer,
    trainings: trainingsReducer,
    personais: personaisReducer,
    forms: formsReducer,
    anamnese: anamneseReducer,
    aluno: alunoReducer,
})

export default rootReducer;