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
        const response = await api.post(`/exercise`, exerciseToBeCreated);
        return response.data;
    }catch(error){
        console.log(error);
    }
});

const getExercisesByTreinoID = createAsyncThunk("exercises/getExercisesByTreinoID", async (idTreino) => {
    try {
        const response = await api.get(`/exercise/${idTreino}`);
        return response.data;
    } catch (err) {
        return [];
    }
})

const deleteExercicioByID = createAsyncThunk("exercises/deleteExerciseByID", async (idExercicio) => {
    try{
        await api.delete(`/exercise/${idExercicio}`);
    }
    catch(err){
        console.log("Não foi possível excluir o exercício");
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