import mongoose from "mongoose";

const alunoSchema = new mongoose.Schema({

    idUser: { type: mongoose.Schema.Types.String, required:[true, "idUser obrigatório"]},
    nomeUser: { type: mongoose.Schema.Types.String, required:[true, "O nome de usuário é obrigatório"]},
    idPersonal: { type: mongoose.Schema.Types.String, required:[true, "Id personal é obrigatório"]},

});

const alunoModel = mongoose.model("alunos", alunoSchema);

export { alunoModel, alunoSchema };