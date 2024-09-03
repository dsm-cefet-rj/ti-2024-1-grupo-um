//here the user controller
import { userModel } from "../models/UserModel.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import { blackListModel } from "../models/BlackListModel.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const salt_rounds = process.env.SALT_ROUNDS;

async function crypt(senha){
    return await bcrypt.hash(senha, Number(salt_rounds));
}

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
        //verificar email
        const existingEmailArray = await userModel.find({email: req.body.email});
        const existingEmail = existingEmailArray[0];
        

        if(existingEmail != undefined || existingEmail != null){
           
            
            throw new Error("Email já cadastrado");
        }

        const existingCPFArray = await userModel.find({CPF: req.body.CPF});
        const existingCPF = existingCPFArray[0];
        if(existingCPF){
            throw new Error("CPF já cadastrado.");
        }

        const newSenha = await crypt(req.body.senha);

        const image = req.file ? req.file.filename : null;

        const newUser = {
            nome: req.body.nome,
            CPF: req.body.CPF,
            email: req.body.email,
            birth: req.body.birth,
            senha: newSenha,
            image: image
        }

        const result = await userModel.create(newUser);

        return res.status(201).send({
            message: 'Usuario criado com sucesso',
            usuario: newUser
        });

    }catch(error){
        return res.status(400).send({
            error: error.message,
            message: 'Ocorreu um erro na criação de usuário'
        });
    }
}
async function updateUser(req, res) {
    try{
        const id = req.params.id;

        const update = req.body;


        if(update.senha) {
            const newSenha = await crypt(update.senha);
            update.senha = newSenha;
        }
        if(req.file){
            update.image = req.file.filename;
        }
        const updatedUser = await userModel.findByIdAndUpdate(id, update, {returnDocument: "after"});

        return res.status(200).send({
            message:"Usuário atualizado com sucesso.",
            data: updatedUser
        });

    }catch(error){
        return res.status(400).send({
            message:"Ocorreu um erro na tentativa da atualização",
            erro: error
        });
    }
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
async function deleteUser(req, res){
    try{
        const id = req.params.id;
        const user = await userModel.findById(id);
        if(!user){
            return res.status(400).send({
                message: "user não encontrado"
            });
        }
        const imageName = user.image;
        
        const userDelete = await userModel.findByIdAndDelete(id);

        if(userDelete){
            if(imageName){
                const imagePath = path.resolve(__dirname, '..', '..','..', 'uploads', imageName);
               
                fs.unlink(imagePath, (err)=>{
                    if(err){
                        return res.status(400).send({
                            message: "erro ao excluir a imagem do servidor"
                        });
                    }else{
                        return res.status(200).send({
                            message: 'Usuário removido com sucesso',
                            data: userDelete
                        });
                    }
                })
            } else{

                return res.status(200).send({
                    message: 'User removido com sucesso',
                    data: userDelete
                });
            }
        }
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro para remover o user'
        })
    }
}

async function login(req, res){
    try{
        const email = req.body.email;
        const senha = req.body.senha;

        const existingUserArray = await userModel.find({email});
        const existingUser = existingUserArray[0];

        if(existingUser == undefined){
            return res.status(400).send({
                message: "Login ou Senha errados.",
                status: false
            });
        }
        
        //hash de senha
        const passwordMatch = await bcrypt.compare(senha, existingUser.senha);
        
        if(!passwordMatch){
            throw new Error("Login ou senha errados");
        }else{
            
            const token = jsonwebtoken.sign(
                {
                    id: existingUser._id,
                    type: "user"
                }, 
                process.env.SECRET_JWT, 
                {expiresIn: '15m'}
            );
            const { exp } = jsonwebtoken.decode(token);
            return res.status(200).send({
                message: "Login realizado com sucesso",
                status: true,
                token: token,
                user: existingUser,
                expiration: exp
            });
        }
        
    }catch(error){
        return res.status(400).send({
            message: error.message,
            erro: error
        });
    }
}
async function logout(req, res){
    try{
        const token = req.headers.authorization;

        if(token){
            await blackListModel.create({token});
        }
        

        return res.status(200).send({
            message: "Logout efetuado com sucesso"
        });
    }catch(error){
        return res.status(400).send({
            message: "Ocorreu um erro ao efetuar o logout"
        })
    }
}



export { readAll, readOne, createUser, updateUser, deleteUser, login, logout };