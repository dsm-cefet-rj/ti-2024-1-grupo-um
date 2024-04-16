import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const formsAdapter = createEntityAdapter();

const initialState = formsAdapter.getInitialState();

const formsSlice = createSlice({
    name: "forms",
    initialState,
    reducers: {
        addForms: formsAdapter.addOne,
    }
})

export const { addForms} = formsSlice.actions;

export default formsSlice.reducer;