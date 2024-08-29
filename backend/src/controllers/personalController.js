//here the personal controller
import { personalModel } from "../models/PersonalModel.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
//READ_ALL - feito
//READ_ONE - feito
//CREATE_PERSONAL - feito
//UPDATE_PERSONAL - feito
//DELETE_PERSONAL - feito
//LOGIN_PERSONAL - feito
//LOGOUT_PERSONAL - falta

const salt_rounds = process.env.SALT_ROUNDS;

async function crypt(senha){
    return await bcrypt.hash(senha, Number(salt_rounds));
}

async function readAll(req, res) {
    try{
        const personalList = await personalModel.find();

        return res.status(200).send(personalList);
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro'
        })
    }
}
async function readOne(req, res){
    try{
        //id
        const personal = await personalModel.findById(req.params._id);
        if(personal){
            return res.status(200).send(personal);
        }else{
            return res.status(400).send({
                message: 'Personal não cadastrado'
            });
        }
    }catch(error){
        return res.status(400).send({
            error: error,
            message: 'Ocorreu um erro'
        })
    }
}
async function createPersonal(req, res){
    try{
        
        //verificar email
        console.log(req.body);
        const existingEmailArray = await personalModel.find({email: req.body.email});
        const existingEmail = existingEmailArray[0];

        if(existingEmail != undefined){
            return res.status(400).send({
                message: 'Email ja cadastrado'
            });
        }

        //verificar cpf
        const existingCPFArray = await personalModel.find({CPF: req.body.CPF});
        const existingCPF = existingCPFArray[0];

        if(existingCPF != undefined){
            return res.status(400).send({
                message: 'Cpf já cadastrado'
            });
        }

        //hash de senha
        const newSenha = await crypt(req.body.senha)
        // const hashedPassword = await crypt(newPersonal.senha);
        // newPersonal.senha = hashedPassword;
        //pegar o arquivo
        const image = req.file ? req.file.filename : null;;
        //desmembrar objeto
        const newPersonal = {
            nome: req.body.nome, // ok
            CPF: req.body.CPF, //ok
            email: req.body.email, //ok
            birth: req.body.birth, //ok
            senha: newSenha, //ok
            descricao: req.body.descricao, // ok
            formacao: req.body.formacao, //ok
            cidade: req.body.cidade, //ok
            biografia: req.body.biografia, //ok
            preco: req.body.preco,// ok
            image: image 
        }
        

        const result = await personalModel.create(newPersonal);

        return res.status(201).send({
            message: 'Personal criado com sucesso',
            personal: newPersonal
        });

    }catch(error){
        return res.status(400).send({
            error: error.message,
            message: 'Ocorreu um erro na criação de personal'
        });
    }
}
async function updatePersonal(req, res) {
    try{
        const id = req.params._id;

        const update = req.body;

        const updateObject = {
            CPF: update.CPF,
            biografia: update.biografia,
            birth: update.birth,
            cidade: update.cidade,
            descricao: update.descricao,
            email: update.email,
            formacao: update.formacao,
            nome: update.nome,
            preco: update.preco,
        }
        if(update.senha.length > 0){
            const newPassword = await crypt(update.senha);    
            updateObject.senha = newPassword;
        }
        if (req.file){
            updateObject.image = req.file.filename;
        }


        const updatedPersonal = await personalModel.findByIdAndUpdate(id, updateObject, {returnDocument: "after"});

        console.log(updatedPersonal);

        setTimeout(() => {
            return res.status(200).send({
                message:"Personal atualizado com sucesso.",
                data: updatedPersonal
            });
        }, 2000);

    }catch(error){
        return res.status(400).send({
            message:"Ocorreu um erro na tentativa da atualização",
            erro: error
        });
    }
}
async function deletePersonal(req, res){
    try{
        const id = req.params._id;
        const personalDelete = await personalModel.findByIdAndDelete(id);

        if(personalDelete){
            return res.status(200).send({
                message: 'Personal removido com sucesso',
                data: personalDelete
            });
        }else{
            return res.status(400).send({
                message: "Personal não encontrado"
            })
        }
        
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro para remover o personal'
        })
    }
}

async function loginPersonal(req, res){
    try{
        const email = req.body.email;
        const senha = req.body.senha;

        const existingPersonalArray = await personalModel.find({email});
        const existingPersonal = existingPersonalArray[0];
        console.log(existingPersonal);
        if(existingPersonal == undefined){
            return res.status(400).send({
                message: "Login ou Senha errados.",
                status: false
            });
        }
        //hash de senha
        const passwordMatch = await bcrypt.compare(senha, existingPersonal.senha);
        console.log(passwordMatch);
        if(!passwordMatch){
            return res.status(400).send({
                message: "Login ou Senha errados",
                status: false
            })
        }else{
            console.log(req.body);
            const token = jsonwebtoken.sign(
                {
                    id: existingPersonal._id,
                    type: "personal" 
                }, 
                process.env.SECRET_JWT, 
                {
                    expiresIn: '1h'
                }
            );
            return res.status(200).send({
                message: "Personal autenticado com sucesso",
                status: true,
                token: token,
                personal: existingPersonal
            });
        }
    }catch(error){
        return res.status(400).send({
            message: "ocorreu um erro no login",
            erro: error
        });
    }
}
async function logoutPersonal(req, res){
    try{

    }catch(error){
        
    }
}



export { readAll, readOne, createPersonal, updatePersonal, deletePersonal, loginPersonal };