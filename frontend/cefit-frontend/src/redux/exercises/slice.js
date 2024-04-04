import { createSlice } from "@reduxjs/toolkit";

const exercisesSlice = createSlice({
    name: "exercises",
    initialState: [
        {
            name: "Exercício Exemplo",
            description: "Descrição do exercício exemplo."
        }
    ],
    reducers: {
        add: (state, action) => {
            // debugger
            state.push(action.payload)
        }
    }
})

export const { add } = exercisesSlice.actions;

export default exercisesSlice.reducer;