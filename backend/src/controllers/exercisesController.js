import { exerciseModel } from "../models/ExerciseModel";

//getAllExercisesByTrainingId
async function getAllExercisesByTrainingId(req, res) {
    try{
        const trainingId = req.params.trainingId;
        const exercises = exerciseModel.find({trainingId});

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
        //name -> req.body.name
        //peso -> req.body.peso
        //series -> req.body.series
        //observacoes -> req.body.observacoes
        //trainingId -> req.body.
        //id -> proprio dele
    }catch(error){
        
    }
}
//updateExercise
//deleteExercise
//deleteAllExercisesByTrainingId

export { getAllExercisesByTrainingId, createExercise }