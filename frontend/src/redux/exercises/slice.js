import { notify } from "../..";
import CreateAxiosInstance from "../../utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const api  = CreateAxiosInstance(); 

const initialState = [];

const addExercicio = createAsyncThunk('user/addExerciseAsync', async (data) => {

    try{
        console.log(data);
        const exerciseToBeCreated = {
            trainingId: data.idForm,
            name: data.name,
            peso: data.peso,
            series: data.series,
            observacoes: data.observacoes
        }
        const response = await api.post(`/exercise`, exerciseToBeCreated, {
            headers: {
                Authorization:`${data.token}`
            }
        });
        return response.data;
    }catch(error){
        console.log(error);
    }
});

const getExercisesByTreinoID = createAsyncThunk("exercises/getExercisesByTreinoID", async (infos) => {
    try {
        const response = await api.get(`/exercise/${infos.idTreino}`, {
            headers: {
                Authorization:`${infos.token}`
            }
        });
        return response.data;
    } catch (err) {
        return [];
    }
})

const deleteExercicioByID = createAsyncThunk("exercises/deleteExerciseByID", async (infos) => {
    try{
        const response = await api.delete(`/exercise/${infos.idTreino}`, {
            headers: {
                Authorization:`${infos.token}`
            }
        });
        notify("success", response.data.message);
    }
    catch(err){
        notify("error", err.message);
    }
})


const exercisesSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {
        addExercise: (state, action) => {
            state.push(action.payload);
        },
        clearExercises: (state) => {
            while(state.length > 0){
                state.pop()
            }
        },
        deleteExercicio: (state, action) => {
            for (let i=0; i < state.length; i++){
                if(state[i]._id === action.payload){
                    state.splice(i, 1);
                    break;
                }
            }
        },
        deleteExerciciosByTreinoId: (state, action) => {
            for(let i = 0; i < state.length; i++){
                if(state[i].idForm === action.payload){
                    state.splice(i, 1);
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getExercisesByTreinoID.fulfilled, (state, action) => {
            while (state.length > 0) {
                state.pop()
            }
            for (let exercise of action.payload) {
                state.push(exercise);
            }
        })
    }
})



export const { addExercise, clearExercises, deleteExercicio, deleteExerciciosByTreinoId } = exercisesSlice.actions;

export {addExercicio, getExercisesByTreinoID, deleteExercicioByID}
export default exercisesSlice.reducer;