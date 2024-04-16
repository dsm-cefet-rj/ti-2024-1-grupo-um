import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const exercisesAdapter = createEntityAdapter();

const initialState = exercisesAdapter.getInitialState();

const exercisesSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        addExercise: exercisesAdapter.addOne,
        
    }
})



export const { addExercise, addFormId } = exercisesSlice.actions;

export default exercisesSlice.reducer;