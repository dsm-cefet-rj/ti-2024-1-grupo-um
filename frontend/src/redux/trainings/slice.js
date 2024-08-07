import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createAxiosInstance } from "../../utils/api";

const api = createAxiosInstance();
const initialState = [];


const getTreinosByUserID = createAsyncThunk("treino/getTreinosAsyncByUserID", async(userId) => {
    try{
        const response = await api.get(`/training/${userId}`);
        console.log(response.data);
        return response.data; 
    } catch(err){
        console.log(err);
    }
});

const deleteTreinoByID = createAsyncThunk("treino/deleteTreinoByID", async (idTreino) => {
    try {
        await api.delete(`/training/${idTreino}`); // Modificado para backend

        // const exercises = await axios.get(`http://localhost:3004/exercicios?idForm=${idTreino}`);

        // for(let exercise of exercises.data){
        //     await axios.delete(`http://localhost:3004/exercicios/${exercise.id}`)
        // }
    } catch(err) {
        console.log("Não foi possível excluir o treino...");
    }
})

const trainingsSlice = createSlice({
    name: "trainings",
    initialState,
    reducers: {
        addTraining: (state, action) => {
            state.push(action.payload)
        },
        deleteTraining: (state, action) => {
            for (let i = 0; i < state.length; i++) {
                if (state[i]._id === action.payload) {
                    state.splice(i, 1);
                    break;
                }
            }
        },
        clearTrainings: (state) => {
            while(state.length > 0){
                state.pop()
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTreinosByUserID.fulfilled, (state, action) => {
            while (state.length > 0) {
                state.pop()
            }
            if(!action.payload.message){
                for (let training of action.payload) {
                    state.push(training)
                }
            }
        })

    }
})

export const { addTraining, deleteTraining, clearTrainings } = trainingsSlice.actions;

export { getTreinosByUserID, deleteTreinoByID };
export default trainingsSlice.reducer;
