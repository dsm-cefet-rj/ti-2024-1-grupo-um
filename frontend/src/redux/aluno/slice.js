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
  //auth
})

const deleteAlunoByUserId = createAsyncThunk("users/deleteUserAsync", async(infos)=>{

  const alunos = await api.get(`/aluno?userId=${infos.id}`);

  if(alunos.response){
    for (let aluno of alunos.data){
      await api.delete(`/aluno/${aluno.id}`,{
        headers:{
          Authorization:`${infos.token}`
        }
      });
  }
    //auth
  }
});

const getAlunosByPersonalId = createAsyncThunk("personais/getAlunosAsync", async(data, {getState}) => {
  try{
    console.log(data);
    const response = await api.get(`/aluno/${data.idPersonal}`,{
      headers: {
        Authorization:`${data.token}`
      }
    });
    const currentUser = getState().user;
    const alunos = response.data;
    console.log(alunos);
    console.log(currentUser);
    let alunosArray = [];
    for(const aluno of alunos){
      const user = await api.get(`/user/${aluno.idUser}`, {
        headers: {
          Authorization:`${currentUser.loggedPersonal}`
        }
      });
      console.log(user);
      alunosArray.push({...aluno, userImage: user.data?.image});
    }
    console.log(alunosArray);
    return alunosArray;
  }catch(error){
    notify("error", error.message);
    return [];
  }
  
  //auth
})

const deleteAlunoByPersonalId = createAsyncThunk("personais/deletePersonalAsync", async(infos)=>{
  const alunos = await api.get(`/aluno?personalId=${infos._id}`);

  for (let aluno of alunos.data){
    await api.delete(`/aluno/${aluno.id}`,{
      headers:{
        Authorization:`${infos.token}`
      }
    });
    //auth
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