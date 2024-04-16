import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const exercisesSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        addExercise: (state, action) => {
            // debugger;
            state.push(action.payload);
        },
    }
})



export const { addExercise } = exercisesSlice.actions;

export default exercisesSlice.reducer;