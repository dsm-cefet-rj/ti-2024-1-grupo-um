import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CreateAxiosInstance from "../../utils/api";
import { notify } from "../../index";
import { useSelector } from "react-redux";
import rootReducer from "../root-reducer";

const api  = CreateAxiosInstance();

const initialState = {
    logged: null,
    loggedPersonal: null,
    user: {},
    personal: {},
    tokenExpiration: null
};


const addUser = createAsyncThunk('user/addUserAsync', async (data) => {
    try{
        const response = await api.post("/user", data);
        notify("success", "Usuário criado com sucesso.");
        return response.data;
    }catch(error){
        console.log(error);
        notify("error", error.response.data.message);
        return false;
    }
});

const updateUser = createAsyncThunk("user/updateUserAsync", async (data) => {
    try{
        
        let formData = new FormData();
        //verificacao imagem
        if (data.image){
            for(const key in data){
                formData.append(key,data[key]);
            }
        }else{
            formData ={
                CPF: data.CPF,
                birth: data.birth,
                email: data.email,
                nome: data.nome
            }
            if(data.senha.length > 0) formData.senha = data.senha;
        }
        // console.log(data);
        // const updateUser = {
        //     CPF: data.CPF,
        //     birth: data.birth,
        //     email: data.email,
        //     nome: data.nome,
        // }
        
        const config ={
            headers:{
                Authorization: `${data.token}`,
                ...(data.image && { 'Content-Type': 'multipart/form-data' })
            }
        };
        const response = await api.patch(`/user/${data._id}`, formData, config);
        // const response = await api.patch(`/user/${data._id}`, updateUser, {
        //     headers: {
        //         Authorization:`${token}`
        //     }
        // });
        notify("success", "Usuario atualizado com sucesso");
        return response.data.data;
    }catch(error){
        notify("error", error.message);
    }
});
const updatePersonal = createAsyncThunk("user/updatePersonalAsync", async (data) => {
    try {
        let formData = new FormData();
        
        //verificacao imagem
        if (data.image) {
            for (const key in data) {
                formData.append(key, data[key]);
            }
        } else {
            
            formData = {
                CPF: data.CPF,
                biografia: data.biografia,
                birth: data.birth,
                cidade: data.cidade,
                descricao: data.descricao,
                email: data.email,
                formacao: data.formacao,
                nome: data.nome,
                preco: data.preco
            };
            if(data.senha.length === 0) {
                formData.senha = data.senha
            }
        }
        const config = {
            headers: {
                Authorization: `${data.token}`,
                //definido content-type para enviar a imagem corretamente para o backend no formato de form-data
                ...(data.image && { 'Content-Type': 'multipart/form-data' })
            }
        };

        //req
        const response = await api.patch(`/personal/${data._id}`, formData, config);

        notify("success", "Perfil atualizado com sucesso");
        console.log(response.data);
        return response.data.data;

    } catch (error) {
        notify("error", error.message);
        
    }
});

// const updatePersonal = createAsyncThunk("user/updatePersonalAsync", async (data) => {
//     try{
//         const req = {
//             CPF: data.CPF,
//             biografia: data.biografia,
//             birth: data.birth,
//             cidade: data.cidade,
//             descricao: data.descricao,
//             email: data.email,
//             formacao: data.formacao,
//             nome: data.nome,
//             preco: data.preco,
//             senha: data.senha
//         }
//         const response = await api.patch(`/personal/${data._id}`, req, {
//             headers: {
//                 Authorization: `${data.token}`
//             }
//         })
//         notify("success", "Perfil atualizado com sucesso");
//         console.log(response.data);
//         return response.data.data;

//     }catch(error){
//         notify("error", error.message)
//     }
// });

const deleteUser = createAsyncThunk("users/deleteUserAsync", async(infos)=> {
    try{
        await api.delete(`/user/${infos.id}`,{
            headers: {
                Authorization:`${infos.token}`
            }   
        });
        notify("success", "Usuario deletado com sucesso.");
    }catch(error){
        notify("error", error.message);
    }
    
});

const logoutUser = createAsyncThunk("user/logoutUserAsync", async(infos) => {
    try{
        if(infos.token){
            await api.post("/logout", null, {
                headers: {
                    Authorization:`${infos.token}`
                }
            })
        }
    }catch(error){
        notify("error", error.response.data.message)
    }
});

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addLoggedUser: (state, action) => {
            console.log(action.payload);
            state.user = action.payload.user;
            state.logged = action.payload.token;
            state.tokenExpiration = action.payload.expiration;
        },
        addLoggedPersonal: (state, action) => {
            state.personal = action.payload.personal;
            state.loggedPersonal = action.payload.token;
            state.tokenExpiration = action.payload.expiration ;
        },
        // logoutUser: (state) => {
        //     state.logged = false;
        //     state.loggedPersonal = false;
        //     state.user = {};
        //     state.personal={};
        // },
        addTraining: (state, action) => {
            if(state.logged){
                state.user.treinos.push(action.payload);
            }
        },
        logoutRedux: (state, action) => {
            state.logged = false;
            state.loggedPersonal = false;
            state.user = {};
            state.personal= {};
            state.tokenExpiration= null;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(updatePersonal.fulfilled, (state, action) => {
            state.personal = action.payload;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.user = action.payload;
        })
        .addCase(logoutUser.fulfilled, (state, action ) => {
            state.logged = false;
            state.loggedPersonal = false;
            state.user = {};
            state.personal= {};
            state.tokenExpiration= null;
        })
    }
})

export const { loginUser, addTraining, addLoggedUser, addLoggedPersonal, logoutRedux } = userSlice.actions;

export { addUser, updateUser, deleteUser, updatePersonal, logoutUser }

export default userSlice.reducer;