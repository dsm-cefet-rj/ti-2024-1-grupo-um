import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CreateAxiosInstance  from "../../utils/api";
import { notify } from "../..";

const initialState = [];
const api  = CreateAxiosInstance();

const getTreinosByUserID = createAsyncThunk("treino/getTreinosAsyncByUserID", async(infos) => {
    try{

        const response = await api.get(`/training/${infos.userId}`, {
            headers: {
                Authorization:`${infos.token}`
            }
        });
        console.log(response.data);
        return response.data; 
    } catch(err){
        console.log(err);
    }
});

const deleteTreinoByID = createAsyncThunk("treino/deleteTreinoByID", async (infos) => {
    try {
        await api.delete(`/training/${infos.idTreino}`, {
            headers: {
                Authorization:`${infos.token}`
            }
        }); 
        await api.delete(`/exercise?trainingId=${infos.idTreino}`, {
            headers: {
                Authorization:`${infos.token}`
            }
        })

        notify("success", "Treino excluido com sucesso");
    } catch(err) {
        notify("error", "Não foi possível excluir o treino...");
    }
})

const trainingsSlice = createSlice({
    name: "trainings",
    initialState,
    reducers: {
        addTraining: (state, action) => {
            state.push(action.payload)
        },
        deleteTraining: (state, action) => {
            for (let i = 0; i < state.length; i++) {
                if (state[i]._id === action.payload) {
                    state.splice(i, 1);
                    break;
                }
            }
        },
        clearTrainings: (state) => {
            while(state.length > 0){
                state.pop()
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTreinosByUserID.fulfilled, (state, action) => {
            while (state.length > 0) {
                state.pop()
            }
            console.log(action.payload);
            if(!action.payload?.message){
                for (let training of action.payload) {
                    state.push(training)
                }
            }
        })

    }
})

export const { addTraining, deleteTraining, clearTrainings } = trainingsSlice.actions;

export { getTreinosByUserID, deleteTreinoByID };
export default trainingsSlice.reducer;
