import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];


const getTreinosByUserID = createAsyncThunk("treino/getTreinosAsyncByUserID", async(idUser) => {
    try{

        const response = await axios.get(`http://localhost:3004/treino?idUser=${idUser}`);
        return response.data; 
    } catch(err){
        return [];
    }
 });

const trainingsSlice = createSlice({
    name: "trainings",
    initialState,
    reducers: {
            //adaptar o treino
        addTraining: (state, action) => {
            state.push(action.payload)
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(getTreinosByUserID.fulfilled, (state, action) => {
            while (state.length > 0) {
                state.pop()
            }
            for (let training of action.payload) {
                state.push(training)
            }
        })

    }
})

export const { addTraining } = trainingsSlice.actions;

export { getTreinosByUserID };
export default trainingsSlice.reducer;
