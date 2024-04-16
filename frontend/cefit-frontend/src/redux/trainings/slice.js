import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

//criar o entity adapter
const trainingsAdapter = createEntityAdapter();

// mudar o iniciar state para o getInitialState
const initialState = trainingsAdapter.getEntityAdapter();

const trainingsSlice = createSlice({
    name: "trainings",
    initialState,
    reducers: {
            //adaptar o treino
        addTraining: trainingsAdapter.addOne
            // const user =  useSelector(rootReducer => rootReducer.user);
            // const currentUser  = user[0].currentUser;
            // state.push({...action.payload, userId: currentUser.id});
        
    }
})

export const { addTraining } = trainingsSlice.actions;

export default trainingsSlice.reducer;

// addExercise: (state, action) => {
//     // Extrair o ID externo do payload da ação
//     const { id, ...exercise } = action.payload;

//     // Adicionar o exercício com o ID externo (do treino?) utilizando o adapter
//     exercisesAdapter.addOne(state, { id, ...exercise });
// }