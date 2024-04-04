import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: "Exercício Exemplo",
        description: "Descrição do exercício exemplo."
    }
]

const exercisesSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        addExercise: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addExercise } = exercisesSlice.actions;

export default exercisesSlice.reducer;