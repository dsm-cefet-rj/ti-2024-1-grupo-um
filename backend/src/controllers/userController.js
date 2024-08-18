//here the user controller
import { userModel } from "../models/UserModel.js";
import jsonwebtoken from "jsonwebtoken";
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
            CPF: req.body.CPF,
            email: req.body.email,
            birth: req.body.birth,
            senha: req.body.senha
        }
        //verificar email
        const existingEmailArray = await userModel.find({email: req.body.email});
        const existingEmail = existingEmailArray[0];
        console.log(existingEmailArray);
        console.log(existingEmail);

        if(existingEmail != undefined){
            // return res.status(400).send({
            //     message: 'Email ja cadastrado'
            // });
            throw new Error({message: "Email já cadastrado"});
        }

        //verificar cpf
        const existingCPFArray = await userModel.find({CPF: newUser.CPF});
        const existingCPF = existingCPFArray[0];
        if(existingCPF){
            throw new Error({message: "CPF já cadastrado."});
        }


        const result = await userModel.create(newUser);

        return res.status(201).send({
            message: 'Usuario criado com sucesso',
            usuario: newUser
        });

    }catch(error){
        return res.status(400).send({
            error: error,
            message: error.message
        });
    }
}
async function updateUser(req, res) {
    try{
        const id = req.params.id;

        const update = req.body;

        const updatedUser = await userModel.findByIdAndUpdate(id, update);

        return res.status(200).send({
            message:"Usuário atualizado com sucesso.",
            data: update
        });

    }catch(error){
        return res.status(400).send({
            message:"Ocorreu um erro na tentativa da atualização",
            erro: error
        });
    }
}
async function deleteUser(req, res){
    try{
        const id = req.params.id;
        const userDelete = await userModel.findByIdAndDelete(id);

        if(userDelete){
            return res.status(200).send({
                message: 'User removido com sucesso',
                data: userDelete
            });
        }else{
            return res.status(400).send({
                message: 'user nao encontrado'
            })
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
        console.log(existingUser)
        //hash de senha
        if(senha === existingUser.senha){
            console.log(req.body);
            const token = jsonwebtoken.sign(req.body, process.env.SECRET_JWT, {expiresIn: 300});
            return res.status(200).send({
                message: "usuario autenticado com sucesso",
                status: true,
                token: token,
                user: existingUser
            });
            
        }else{
            return res.status(400).send({
                message: "Login ou Senha errados.",
                status: false
            })
        }
    }catch(error){
        return res.status(400).send({
            message: "ocorreu um erro no login",
            erro: error
        });
    }
}
async function logout(req, res){
    try{

    }catch(error){
        
    }
}



export { readAll, readOne, createUser, updateUser, deleteUser, login };