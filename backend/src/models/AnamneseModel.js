import mongoose from "mongoose";

const anamneseSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    userId: { type: mongoose.Schema.Types.ObjectId, required: [true, "O ID do usuário é obrigatório"] },
    weight: { type: mongoose.Schema.Types.Number, required: [true, "O peso é obrigatório"] },
    motivation: { type: mongoose.Schema.Types.String, required: [true, "A motivação é obrigatória"] },
    activityFreq: { type: mongoose.Schema.Types.String },
    date: { type: mongoose.Schema.Types.Date },
    //diet: { type: mongoose.Schema.Types.String }, consertar
    observacoes: { type: mongoose.Schema.Types.String }
});

const anamneseModel = mongoose.model("anamnese", anamneseSchema);

export { AnamneseModel, anamneseSchema };
