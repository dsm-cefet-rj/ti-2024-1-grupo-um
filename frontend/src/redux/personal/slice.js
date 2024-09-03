import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import CreateAxiosInstance from "../../utils/api";
import { notify } from "../../index";

const initialState = [];
const api  = CreateAxiosInstance(); 

const getPersonais = createAsyncThunk("personais/getPersonaisAsync", async(token) => {
    try{
        const response = await api.get("/personal", {
            headers: {
                Authorization:`${token}`
            }
        });
        return response.data; 
    }catch(error){
        //logic
    }
});

const createPersonal = createAsyncThunk('personais/addPersonalAsync', async (data) => {
    try{
       
        const response = await api.post("/personal", data)
        return response.data;
    }catch(error){
        return error.message;
    }
});

const deletePersonal = createAsyncThunk("personais/deletePersonalAsync", async(infos)=>{
    try{
        await api.delete(`/personal/${infos._id}`,{
            headers: {
                Authorization:`${infos.token}`
            }
        });
        notify("success", "Personal deletado com sucesso.");
    }catch(error){
        notify("error", error.message);
    }
});


const personalSlice = createSlice({
    name:"personal",
    initialState,
    reducers: {
        addPersonal: (state, action) => {
            state.push(action.payload);
        },
        clearPersonals: (state) => {
            while(state.length > 0){
                state.pop()
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPersonais.fulfilled, (state, action) => {
            for (let personal of action.payload) {
                state.push(personal);
            }
        })
    }
})

export const { addPersonal, clearPersonals } = personalSlice.actions;

export { getPersonais, createPersonal, deletePersonal }
export default personalSlice.reducer;