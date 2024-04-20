import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";
//criar o entity adapter
const trainingsAdapter = createEntityAdapter();

// mudar o iniciar state para o getInitialState
const initialState = trainingsAdapter.getInitialState();

const getTreinos = createAsyncThunk("treino/getTreinosAsync", async(data) => {
    const response = await axios.get("http://localhost:3004/treino", data);
    return response.data; 
 });

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

export { getTreinos };
export default trainingsSlice.reducer;

// addExercise: (state, action) => {
//     // Extrair o ID externo do payload da ação
//     const { id, ...exercise } = action.payload;

//     // Adicionar o exercício com o ID externo (do treino?) utilizando o adapter
//     exercisesAdapter.addOne(state, { id, ...exercise });
// }