//here the user controller
import { userModel } from "../models/UserModel.js";
//READ_ALL
//READ_ONE
//CREATE_USER
//UPDATE_USER
//DELETE_USER
//LOGIN
//LOGOUT

async function readAll(req, res) {
    try{
        const userList = await userModel.find();

        return res.status(200).send(userList);
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro'
        })
    }
}
async function readOne(req, res){
    try{
        //id
        const user = await userModel.findById(req.params.id);
        if(user){
            return res.status(200).send(user);
        }else{
            return res.status(400).send({
                message: 'Usuário não cadastrado'
            });
        }
    }catch(error){
        return res.status(400).send({
            error: error,
            message: 'Ocorreu um erro'
        })
    }
}
async function createUser(req, res){
    try{
        //desmembrar objeto
        const newUser = {
            nome: req.body.nome,
            cpf: req.body.CPF,
            email: req.body.email,
            birth: req.body.birth,
            senha: req.body.senha
        }
        
        console.log(req.body);

        //verificar email
        const existingEmail = await userModel.find({email: req.body.email});
        if(existingEmail){
            return res.status(400).send({
                message: 'Email ja cadastrado'
            });
        }

        //verificar cpf
        const existingCPF = await userModel.find({CPF: req.body.cpf});
        if(existingCPF){
            return res.satus(400).send({
                message: 'Cpf já cadastrado'
            });
        }

        const result = await userModel.create(newUser);

        return res.status(201).send({
            message: 'Usuario criado com sucesso',
            usuario: newUser
        })

    }catch(error){
        return res.status(400).send({
            error: error,
            message: 'Ocorreu um erro na criacao de usuario'
        })
    }
}
async function deleteUser(req, res){
    try{
        const userDelete = await userModel.findById(req.params.id);
        if(userDelete){
            const result = await userDelete.remove();
            res.status(200).send({
                message: 'Usuário removido com sucesso'
            })
        }
    }catch(error){
        return res.status(400).sen({
            message: 'Ocorreu um erro para remover o usuário'
        })
    }
}
async function login(req, res){
    try{

    }catch(error){

    }
}
async function logout(req, res){
    try{

    }catch(error){
        
    }
}



export { readAll, createUser, deleteUser, readOne };