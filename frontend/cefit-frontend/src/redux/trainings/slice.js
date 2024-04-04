import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const trainingsSlice = createSlice({
    name: "trainings",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { add } = trainingsSlice.actions;

export default trainingsSlice.reducer;