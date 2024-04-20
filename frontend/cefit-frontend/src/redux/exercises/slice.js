import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const addExercicio = createAsyncThunk('user/addExerciseAsync', async (data) => {
    const response = await axios.post("http://localhost:3004/exercicios", data);
    return response.data;
});

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
    }
})



export const { addExercise, clearExercises } = exercisesSlice.actions;

export {addExercicio}
export default exercisesSlice.reducer;