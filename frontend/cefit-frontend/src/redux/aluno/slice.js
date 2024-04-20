import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createAluno = createAsyncThunk('aluno/addAlunoAsync', async(data) =>{
  const response = await axios.post("http://localhost:3004/aluno", data);
  return response.data;
})

const alunoSlice = createSlice({
  name: 'pagamento',
  initialState: [],
  reducers: {
    addAluno: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addAluno } = alunoSlice.actions;

export {createAluno};

export default alunoSlice.reducer;