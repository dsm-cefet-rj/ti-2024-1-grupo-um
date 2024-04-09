import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const trainingsSlice = createSlice({
    name: "trainings",
    initialState,
    reducers: {
        addTraining: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addTraining } = trainingsSlice.actions;

export default trainingsSlice.reducer;