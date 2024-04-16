import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const exercisesAdapter = createEntityAdapter();

const initialState = exercisesAdapter.getInitialState();

const exercisesSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        addExercise: exercisesAdapter.addOne,
        addTreinoId: (state, action) => {
            const id = action.payload;
            state = state.map((exercise) => {exercise, id});
        }
    }
})



export const { addExercise, addTreinoId } = exercisesSlice.actions;

export default exercisesSlice.reducer;