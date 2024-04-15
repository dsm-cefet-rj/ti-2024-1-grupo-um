import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [
    {
        currentUser: null,
    }
];

const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get("http://localhost:3004/users");
    return response.data;
})

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push({...action.payload, id: state.length});
        },
        loginUser: (state, action) => {
            const usuarioSistema = state.filter((user) => user.email === action.payload.email)[0];
            if(usuarioSistema != undefined){
                if(usuarioSistema.senha === action.payload.senha){
                    state[0].currentUser = usuarioSistema;
                }
            }
            
        },
        logoutUser: (state, action) => {
            state[0].currentUser = null;
        },
        addTraining: (state, action) => {
            state[0].currentUser.treinos.push(action.payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => state);
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            action.payload.map((user) => {
                state.push(user);
            })
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.push(action.error.message)
        })
    }
})

export const { addUser, loginUser, logoutUser, addTraining } = userSlice.actions;

export { fetchUsers }

export default userSlice.reducer;