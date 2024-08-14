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
// userId: "",
// id: "",
// descricao: "",
// title: "",
// type: "",
// observacoes: "",
async function createTraining(req, res){
    try{
        const training = req.body;
        console.log(training);

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

        await trainingModel.create(training);
        
        return res.status(200).send({
            message: "Treino criado com sucesso."
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

export { readAllTrainings, readAll, readOne, createTraining, createTrainingForgymStudent, deleteTraining }