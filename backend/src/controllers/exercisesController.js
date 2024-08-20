import { exerciseModel } from "../models/ExerciseModel.js";

async function getAll(req, res){
    try{
        const exercises = await exerciseModel.find();
        return res.status(200).send(exercises);
    }catch(error){
        return res.status(400).send({
            message: "ocorreu um erro ao pegar todos os exercicios",
            error: error
        })
    }
}
//getAllExercisesByTrainingId
async function getAllExercisesByTrainingId(req, res) {
    try{
        const trainingId = req.params.trainingId;
        const exercises = await exerciseModel.find({trainingId:trainingId});

        return res.status(200).send(exercises);
    }catch(error){
        return res.status(400).send({
            message: 'Erro ao carregar exercícios',
            erro: error
        })
    }
}
//createExercise

async function createExercise(req, res){
    try{
        const exercise = req.body;
        console.log(exercise);

        const createdExercise = await exerciseModel.create(exercise);
        //name -> req.body.name
        //peso -> req.body.peso
        //series -> req.body.series
        //observacoes -> req.body.observacoes
        //trainingId -> req.body.
        //id -> proprio dele
        return res.status(201).send({
            message: "Exercicio criado com sucesso."
        });
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro ao criar um exercicio.',
            erro: error
        });
    }
}
//updateExercise
//deleteExercise
async function deleteExercise( req, res ) {
    try{
        const exerciseId = req.params.exerciseId;
        const deletedExercise = await exerciseModel.findByIdAndDelete(exerciseId);

        return res.status(200).send({
            message: "Exercicio deletado com sucesso."
        })
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro ao deletar um exercicio',
            erro: error
        });
    }
}
async function deleteAllExercisesByTrainingId(req, res){
    try{
        const trainingId = req.query.trainingId;

        if(!trainingId){
            throw new Error("trainingId nao informado.");
        }

        const deletedTrainings = await exerciseModel.deleteMany({trainingId});
        return res.status(200).send({
            message:`${deletedTrainings.length} foram deletados do sistema.`
        })
        
    }catch(error){
        return res.status(400).send({
            message: 'Ocorreu um erro ao deletar os exercicios',
            erro: error
        })
    }
}
//deleteAllExercisesByTrainingId

export { getAllExercisesByTrainingId, getAll, createExercise, deleteExercise, deleteAllExercisesByTrainingId }