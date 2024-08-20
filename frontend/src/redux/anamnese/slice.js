import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CreateAxiosInstance from "../../utils/api";

const api  = CreateAxiosInstance(); 

const initialState = {
    preenchida: false,
    activityFreq: "",
    weight: "",
    motivation: "",
    date: "",
    diet: "",
    observacoes: "",
    userId: "",
}

const addAnmneseAsync = createAsyncThunk('anamnese/addAnamneseAsync', async (data) => {

    const response = await api.post("/anamnese/", data);
    return response.data;
});


const getAnamnese = createAsyncThunk('anamnese/getAnamneseAsync', async (data) => {

    console.log(data);
    
    const response = await api.get(`/anamnese/${data.userId}`,{
        headers: {
            Authorization:`${data.token}`
        }
    });
    return response.data;

});

const updateAnamnese = createAsyncThunk('anamnese/updateAnamneseAsync', async (data) => {
    await api.put(`/anamnese/`, data.infos, {
        headers: {
            Authorization:`${data.token}`
        }
    });
})

const deleteAnamneseByUserId = createAsyncThunk('anamnese/deleteAnamneseAsync', async (userId) => {
    await api.delete(`/anamnese/${userId}`);
    //auth
})

const deleteAnamnese = createAsyncThunk('anamnese/deleteAnamneseAsync', async (infos) => {
    await api.delete(`/anamnese/${infos.anamneseId}`,{
        headers: {
            Authorization:`${infos.token}`
        }
    });
    //auth
})


const anamneseSlice = createSlice({
    name: "anamnese",
    initialState,
    reducers: {
        addAnmnese: (state, action) => {
            //maybe remove this reducer.
            state.preenchida = true;
            state.activityFreq = action.data.activityFreq;
            state.weight = action.data.weight;
            state.motivation = action.data.motivation;
            state.date = action.data.date;
            state.diet = action.data.diet;
            state.observacoes = action.data.observacoes;
            state.userId = action.data.userId;
            state._id = action.data._id;
        },
        clearAnamnese: (state,action)=>{
            state.preenchida = false;
            state.activityFreq = "";
            state.weight = "";
            state.motivation = "";
            state.date = "";
            state.diet = "";
            state.observacoes = "";
            state.userId = "";
            state._id = "";
        }
    },
    extraReducers: builder =>{
        builder.addCase(getAnamnese.fulfilled, (state, action) => {
            console.log(action.payload[0]);
            if (action.payload[0]){
                const anamnese = action.payload[0];
                state.preenchida = true;
                state.activityFreq = anamnese.activityFreq;
                state.weight = anamnese.weight;
                state.motivation = anamnese.motivation;
                state.date = anamnese.date;
                state.diet = anamnese.diet;
                state.observacoes = anamnese.observacoes;
                state.userId = anamnese.userId;
                state._id = anamnese._id;
            }
        })
        builder.addCase(addAnmneseAsync.fulfilled, (state,action) => {
            state._id = action.data.id;
        })
    }
})

export const { addAnmnese, clearAnamnese } = anamneseSlice.actions;

export { addAnmneseAsync, getAnamnese, updateAnamnese, deleteAnamneseByUserId, deleteAnamnese };
export default anamneseSlice.reducer;