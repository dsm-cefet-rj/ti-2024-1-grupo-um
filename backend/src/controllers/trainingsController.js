import { trainingModel } from "../models/TrainingModel.js";
//readAll
//readOne
//createTraining
//createTrainingForGymStudent
//updateTraining
//updateTrainingForGymStudent
//deleteTraining

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
        const userId = req.params.id;
        
        const trainings = await trainingModel.find({userId});
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
            message: "Erro ao consultar treino"
        })
    }
}
async function createTraining(req, res){
    try{

    }catch(error){

    }
}
async function createTrainingForgymStudent(req, res){
    try{

    }catch(error){

    }
}
async function updateTraining(req, res){
    try{
        
    }catch(error){
        
    }
}
async function updateTrainingForGymStudent(req, res){
    try{
        
    }catch(error){
        
    }
}
async function deleteTraining(req, res){
    try{
        
    }catch(error){
        
    }
}

export { readAllTrainings, readAll, readOne, createTraining }