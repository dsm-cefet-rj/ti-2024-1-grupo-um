import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const addExercicio = createAsyncThunk('user/addExerciseAsync', async (data) => {
    const response = await axios.post("http://localhost:3004/exercicios", data);
    return response.data;
});

const getExercisesByTreinoID = createAsyncThunk("exercises/getExercisesByTreinoID", async (idTreino) => {
    try {
        const response = await axios.get(`http://localhost:3004/exercicios?idForm=${idTreino}`);
        return response.data;
    } catch (err) {
        return [];
    }
} )

const exercisesSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        addExercise: (state, action) => {
            state.push(action.payload);
        },
        clearExercises: (state,action) => {
            state.map(() => state.pop());
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getExercisesByTreinoID.fulfilled, (state, action) => {
            for (let exercise of action.payload) {
                state.push(exercise);
            }
        })
    }
})



export const { addExercise, clearExercises } = exercisesSlice.actions;

export {addExercicio, getExercisesByTreinoID}
export default exercisesSlice.reducer;