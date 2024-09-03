import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import CreateAxiosInstance from "../../utils/api";
import { notify } from '../..';
import store from '../store';

const api  = CreateAxiosInstance();

const initialState = [];

const createAluno = createAsyncThunk('aluno/addAlunoAsync', async(data) =>{

  const aluno = {
    userId: data.userId,
    userName: data.userName,
    idPersonal: data.idPersonal,
    userImage: data.userImage
  }
  const response = await api.post("/aluno", aluno, {
    headers: {
      Authorization:`${data.token}`
    }
  });
  return response.data;
 
})

const deleteAlunoByUserId = createAsyncThunk("users/deleteUserAsync", async(infos)=>{
  try{
    await api.delete(`/aluno/user/${infos.id}`,{
      headers:{
        Authorization:`${infos.token}`
      }
    });;
  }catch(error){
    console.log(error);
  }
  
});

const getAlunosByPersonalId = createAsyncThunk("personais/getAlunosAsync", async(data, {getState}) => {
  try{
    
    const response = await api.get(`/aluno/${data.idPersonal}`,{
      headers: {
        Authorization:`${data.token}`
      }
    });
    const currentUser = getState().user;
    const alunos = response.data;
    
    let alunosArray = [];
    for(const aluno of alunos){
      const user = await api.get(`/user/${aluno.idUser}`, {
        headers: {
          Authorization:`${currentUser.loggedPersonal}`
        }
      });
      
      alunosArray.push({...aluno, userImage: user.data?.image});
    }
    
    return alunosArray;
  }catch(error){
    notify("error", error.message);
    return [];
  }
  
})

const deleteAlunoByPersonalId = createAsyncThunk("personais/deletePersonalAsync", async(infos)=>{
  try{
    await api.delete(`/aluno/personal/${infos._id}`,{
      headers:{
        Authorization:`${infos.token}`
      }
    });;
  }catch(error){
    console.log(error);
  }
  //auth
});

const alunoSlice = createSlice({
  name: 'pagamento',
  initialState: [],
  reducers: {
    addAluno: (state, action) => {
      state.push(action.payload);
    },
    clearAlunos: (state, action) => {
      while(state.length > 0){
        state.pop();
      }
    }
  },
  extraReducers: builder => {
      builder.addCase(getAlunosByPersonalId.fulfilled, (state, action) => {
        return action.payload;
      })
  }
});

export const { addAluno, clearAlunos } = alunoSlice.actions;

export {createAluno, deleteAlunoByUserId, getAlunosByPersonalId, deleteAlunoByPersonalId};

export default alunoSlice.reducer;