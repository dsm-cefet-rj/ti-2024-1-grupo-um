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
        add: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { add } = exercisesSlice.actions;

export default exercisesSlice.reducer;