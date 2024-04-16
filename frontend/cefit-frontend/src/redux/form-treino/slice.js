import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    idUser: "",
    id: "",
    infos: {}
};

const formsSlice = createSlice({
    name: "forms",
    initialState,
    reducers: {
        addForms: (state, action) => {
            state.idUser = action.payload.idUser;
            state.id = action.payload.id;
            state.infos = action.payload.infos;
        },
    }
})

export const { addForms } = formsSlice.actions;

export default formsSlice.reducer;