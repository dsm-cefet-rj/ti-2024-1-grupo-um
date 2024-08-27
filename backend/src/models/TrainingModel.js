import mongoose from "mongoose";

const trainingSchema = new mongoose.Schema({
    // id: { type: mongoose.Schema.Types.ObjectId },
    userId: { type: mongoose.Schema.Types.ObjectId , required: [true, "o id do usuario é obrigátorio"]},
    descricao: { type: mongoose.Schema.Types.String , required: [true, "a descricao eh obrigatoria"]},
    title: { type: mongoose.Schema.Types.String , required: [true, "o titulo eh obrigatorio"]},
    type: { type: mongoose.Schema.Types.String },
    observacoes: { type: mongoose.Schema.Types.String }
});

const trainingModel = mongoose.model("trainings", trainingSchema);

export { trainingModel, trainingSchema };