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
    }catch(error){

    }
}
async function createUser(req, res){
    try{
        const newUser = req.body;
        //desmembrar objeto
        console.log(req.body);
        //verificar email
        const existingEmail = await userModel.find({email: req.body.email});
        if(existingEmail){
            return res.status(400).send({
                message:"Email ja cadastrado"
            });
        }


        //verificar cpf

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
        
    }catch(error){
        
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



export { readAll, createUser };