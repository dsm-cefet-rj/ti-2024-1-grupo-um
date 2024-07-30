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
        const userList = userModel.find();

        return res.status(200).send(userList);
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro'
        })
    }
}
async function readOne(req, res){
    try{
        
    }catch(error){

    }
}
async function createUser(req, res){
    try{

    }catch(error){

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



export { readAll };