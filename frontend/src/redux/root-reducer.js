import { combineReducers } from "redux";
import exercisesReducer from "./exercises/slice";
import trainingsReducer from "./trainings/slice";
import personaisReducer from "./personal/slice";
import userReducer from "./user/slice";
import formsReducer from "./form-treino/slice";
import anamneseReducer from "./anamnese/slice";
import alunoReducer from './aluno/slice';

const rootReducer = combineReducers({
    exercises: exercisesReducer,
    trainings: trainingsReducer,
    personais: personaisReducer,
    user: userReducer,
    forms: formsReducer,
    anamnese: anamneseReducer,
    aluno: alunoReducer,
})

export default rootReducer;