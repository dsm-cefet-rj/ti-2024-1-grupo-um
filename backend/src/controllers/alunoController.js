//here the aluno controller
import { alunoModel } from "../models/AlunoModel.js";

//GET_ALUNOS_BY_PERSONAL_ID
async function readAllByPersonalId(req, res) {
    try{
        const alunoList = await alunoModel.find();

        return res.status(200).send(alunoList);
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro'
        })
    }
}

//CREATE_ALUNO
//DELETE_ALUNO_BY_USER_ID
//DELETE_ALUNO_BY_PERSONAL_ID

