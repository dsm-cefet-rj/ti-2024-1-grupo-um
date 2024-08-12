import mongoose, { mongo } from "mongoose";

const exerciseSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: mongoose.Schema.Types.String , required: [true, "O nome eh obrigatorio"]},
    series: { type: mongoose.Schema.Types.String, required: [true, "É obrigatório preencher o numero de series"]},
    peso: { type: mongoose.Schema.Types.String },
    observacoes: { type: mongoose.Schema.Types.String},
    trainingId: { type: mongoose.Schema.Types.ObjectId, required: [true, "O id do treino eh obrigatorio"]}
});

const exerciseModel = mongoose.model("exercises", exerciseSchema);

export { exerciseModel, exerciseSchema };