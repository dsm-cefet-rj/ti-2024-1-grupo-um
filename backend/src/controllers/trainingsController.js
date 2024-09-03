import { exerciseModel } from "../models/ExerciseModel.js";
import { trainingModel } from "../models/TrainingModel.js";

async function readAllTrainings(req, res) {
    try{
        const trainingList = await trainingModel.find();

        return res.status(200).send(trainingList);
    }catch(error){
        return res.status(400).send({
            message: "ocorreu um erro na busca dos treinos",
            erro: error
        })
    }
}
async function readAll(req, res){
    try{
        const userId = req.params.userId;
        
        const trainings = await trainingModel.find({userId: userId});
        if(trainings.length > 0){
            return res.status(200).send(trainings);
        }else{
            return res.status(200).send({
                message: "O usuário não possui treinos registrados"
            });
        }
    }catch(error){
        return res.status(400).send({
            message:  "Ocorreu um erro ao solicitar os treinos do usuário",
            erro: error
        });
    }
}
async function readOne(req, res){
    try{
        const trainingId = req.params.id;
        
        const training = await trainingModel.findById(trainingId);
        
        if(training !== undefined){
            return res.status(200).send(training);
        }else{
            return res.status(400).sen({
                message: "Erro ao consultar treino"
            })
        }
    }catch(error){
        return res.status(400).send({
            message: "Erro ao consultar treino",
            erro: error
        });
    }
}

async function createTraining(req, res){
    try{
        const training = req.body;
       

        const createdTraining = await trainingModel.create(training);

        return res.status(201).send({
            message: "Treino criado com sucesso.",
            trainings: createdTraining
        });
    }catch(error){
        return res.status(400).send({
            message: "Erro ao criar treino",
            erro: error
        });
    }
}
async function createTrainingForgymStudent(req, res){
    try{
        const id = req.params.studentId;

        const training = {
            userId: id,
            descricao: req.body.descricao,
            title: req.body.title,
            type: req.body.title,
            observacoes: req.body.observacoes
        }

        const newTraining = await trainingModel.create(training);
        
        
        return res.status(200).send({
            message: "Treino criado com sucesso.",
            trainings: newTraining
        })

    }catch(error){
        return res.status(400).send({
            message: "Erro ao criar treino.",
            erro: error
        })
    }
}
async function deleteTraining(req, res){
    try{
        const id = req.params.trainingId;
        
        await trainingModel.findByIdAndDelete(id);

        return res.status(200).send({
            message: "treino deletado com sucesso"
        })
    }catch(error){
        return res.status(400).send({
            message: "Ocorreu um erro ao deletar treino.",
            erro: error
        })
    }
}
async function deleteTrainingsByUserId(req, res){
    try{
        const id = req.user.id;

        const treinos = await trainingModel.find({userId: id});

        if(treinos){
            for(const treino of treinos){
                await exerciseModel.deleteMany({trainingId: treino._id});
            }
    
            await trainingModel.deleteMany({userId : id});
    
            return res.status(200).send({
                message: "Treinos deletados com sucesso"
            });
        } else{
            return res.status(200).send({
                message: "O usuário não tem treinos registrados"
            });
        }
    }catch(error){
        return res.status(400).send({
            message: error.message
        })
    }
}

export { readAllTrainings, readAll, readOne, createTraining, createTrainingForgymStudent, deleteTraining, deleteTrainingsByUserId }