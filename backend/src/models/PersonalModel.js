import mongoose from "mongoose";

const personalSchema = new mongoose.Schema({
    nome: { type: mongoose.Schema.Types.String, required:[true, "O nome de usuário é obrigatório"]},
    email: { type: mongoose.Schema.Types.String, required:[true, "O email é obrigatório"]},
    birth: { type: mongoose.Schema.Types.Date, required:[true, "O aniversário é obrigatório"]},
    CPF: { type: mongoose.Schema.Types.String, required:[true, "O CPF é obrigatório"]},
    senha: { type: mongoose.Schema.Types.String, required:[true, "A senha é obrigatória"]},
    descricao: { type: mongoose.Schema.Types.String, required:[true, "A descrição é obrigatória"]},
    formacao: { type: mongoose.Schema.Types.String, required:[true, "A formação é obrigatória"]},
    cidade: { type: mongoose.Schema.Types.String, required:[true, "A cidade é obrigatória"]},
    biografia: { type: mongoose.Schema.Types.String, required:[true, "A biografia é obrigatória"]},
    preco: { type: mongoose.Schema.Types.Number, required:[true, "O preço é obrigatório"]},
    image: { type: mongoose.Schema.Types.String, required: false }
});

const personalModel = mongoose.model("personais", personalSchema);

export { personalModel, personalSchema };
