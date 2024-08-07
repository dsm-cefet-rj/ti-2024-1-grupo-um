import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAxiosInstance } from "../../utils/api";


import axios from "axios";
const api = createAxiosInstance();

const initialState = [];

const addExercicio = createAsyncThunk('user/addExerciseAsync', async (data) => {
    const response = await api.post("/exercicios", data);
    return response.data;
});

const getExercisesByTreinoID = createAsyncThunk("exercises/getExercisesByTreinoID", async (idTreino) => {
    try {
        const response = await api.get(`/exercicios?idForm=${idTreino}`);
        return response.data;
    } catch (err) {
        return [];
    }
})

const deleteExercicioByID = createAsyncThunk("exercises/deleteExerciseByID", async (idExercicio) => {
    try{
        await api.delete(`/exercicios/${idExercicio}`)
    }
    catch(err){
        console.log("Não foi possível excluir o exercício");
    }
})


const exercisesSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        addExercise: (state, action) => {
            state.push(action.payload);
        },
        clearExercises: (state) => {
            while(state.length > 0){
                state.pop()
            }
        },
        deleteExercicio: (state, action) => {
            for (let i=0; i < state.length; i++){
                if(state[i].id === action.payload){
                    state.splice(i, 1);
                    break;
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getExercisesByTreinoID.fulfilled, (state, action) => {
            while (state.length > 0) {
                state.pop()
            }
            for (let exercise of action.payload) {
                state.push(exercise);
            }
        })
    }
})



export const { addExercise, clearExercises, deleteExercicio } = exercisesSlice.actions;

export {addExercicio, getExercisesByTreinoID, deleteExercicioByID}
export default exercisesSlice.reducer;