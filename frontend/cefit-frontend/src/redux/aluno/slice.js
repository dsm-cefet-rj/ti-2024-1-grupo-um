import { createSlice } from '@reduxjs/toolkit';



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
export default alunoSlice.reducer;