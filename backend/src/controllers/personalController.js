//here the personal controller
import { personalModel } from "../models/PersonalModel.js";
//READ_ALL - feito
//READ_ONE - feito
//CREATE_PERSONAL - feito
//UPDATE_PERSONAL - feito
//DELETE_PERSONAL - feito
//LOGIN_PERSONAL - feito
//LOGOUT_PERSONAL - falta

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
        const personal = await personalModel.findById(req.params.id);
        if(user){
            return res.status(200).send(user);
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
        //desmembrar objeto
        const newPersonal = {
            nome: req.body.nome,
            CPF: req.body.CPF,
            email: req.body.email,
            birth: req.body.birth,
            senha: req.body.senha,
            descricao: req.body.descricao,
            formacao: req.body.formacao,
            cidade: req.body.cidade,
            biografia: req.body.biografia,
            preco: req.body.preco,

        }
        

        //verificar email
        const existingEmailArray = await personalModel.find({email: req.body.email});
        const existingEmail = existingEmailArray[0];

        if(existingEmail != undefined){
            return res.status(400).send({
                message: 'Email ja cadastrado'
            });
        }

        //verificar cpf
        const existingCPFArray = await personalModel.find({CPF: newPersonal.CPF});
        const existingCPF = existingCPFArray[0];

        if(existingCPF != undefined){
            return res.status(400).send({
                message: 'Cpf já cadastrado'
            });
        }

        //hash de senha
        const result = await personalModel.create(newPersonal);

        return res.status(201).send({
            message: 'Personal criado com sucesso',
            personal: newPersonal
        });

    }catch(error){
        return res.status(400).send({
            error: error,
            message: 'Ocorreu um erro na criação de personal'
        });
    }
}
async function updatePersonal(req, res) {
    try{
        const id = req.params.id;

        const update = req.body;

        const updatedPersonal = await personalModel.findByIdAndUpdate(id, update);

        return res.status(200).send({
            message:"Personal atualizado com sucesso.",
            data: update
        });

    }catch(error){
        return res.status(400).send({
            message:"Ocorreu um erro na tentativa da atualização",
            erro: error
        });
    }
}
async function deletePersonal(req, res){
    try{
        const id = req.params.id;
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
        if(existingPersonal == undefined){
            return res.status(400).send({
                message: "Login ou Senha errados.",
                status: false
            });
        }
        //hash de senha
        if(senha === existingPersonal.senha){
            console.log(req.body);
            return res.status(200).send({
                message: "Personal autenticado com sucesso",
                status: true,
                token: "personaltoken",
                personal: existingPersonal
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
async function logoutPersonal(req, res){
    try{

    }catch(error){
        
    }
}



export { readAll, readOne, createPersonal, updatePersonal, deletePersonal, loginPersonal };