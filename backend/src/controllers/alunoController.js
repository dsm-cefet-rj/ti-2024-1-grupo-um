//here the aluno controller
import { alunoModel } from "../models/AlunoModel.js";

//CREATE_ALUNO
async function createAluno(req, res) {
    try {
        
        const userImage = req.file ? req.file.filename : null;
        const newAluno = {
            idUser: req.body.userId,
            nomeUser: req.body.userName,
            idPersonal: req.body.idPersonal,
            userImage: userImage
            
        };

        //verificar se o aluno já existe para o personal
        const existingAlunoArray = await alunoModel.find({
            idUser: newAluno.idUser,
            idPersonal: newAluno.idPersonal
        });
        const existingAluno = existingAlunoArray[0];

        if (existingAluno != undefined) {
            return res.status(400).send({
                message: 'Esse aluno já está registrado para o personal.'
            });
        }

        
        await alunoModel.create(newAluno);

        return res.status(201).send({
            message: 'Aluno criado com sucesso',
            aluno: newAluno
        });

    } catch (error) {
        return res.status(400).send({
            error: error.message,
            message: 'Ocorreu um erro na criação do aluno'
        });
    }
}


//GET_ALUNOS_BY_PERSONAL_ID
async function getAlunosByPersonalId(req, res) {
    try{
        const idPersonal = req.params.idPersonal;

        const alunoList = await alunoModel.find({idPersonal});

        return res.status(200).send(alunoList);
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro'
        })
    }
}
//DELETE_ALUNO_BY_USER_ID
async function deleteAlunoByUserId(req, res){
    try{
        const idUser = req.params.userId;
        const alunoDelete = await alunoModel.deleteMany({idUser: idUser})
        
        if(alunoDelete){
            return res.status(200).send({
                message: 'Aluno removido com sucesso',
                data: alunoDelete
            });
        }else{
            return res.status(400).send({
                message: "Aluno não encontrado"
            })
        }
        
       
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro para remover o aluno'
        })
    }
}

//DELETE_ALUNO_BY_PERSONAL_ID

async function deleteAlunoByPersonalId(req, res){
    try{
        const idPersonal = req.params.idPersonal;
        const alunoDelete = await alunoModel.findByIdAndDelete(idPersonal);
        if(alunoDelete){
            return res.status(200).send({
                message: 'Aluno removido com sucesso',
                data: alunoDelete
            });
        }else{
            return res.status(400).send({
                message: "Aluno não encontrado"
            })
        }
        
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro para remover o aluno'
        })
    }
}

export {
    getAlunosByPersonalId, createAluno, deleteAlunoByPersonalId, deleteAlunoByUserId
}