import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: { type: mongoose.Schema.Types.String, required:[true, "O nome de usuário é obrigatório"]},
    email: { type: mongoose.Schema.Types.String, required:[true, "O email é obrigatório"]},
    birth: { type: mongoose.Schema.Types.Date, required:[true, "O aniversário é obrigatório"]},
    CPF: { type: mongoose.Schema.Types.String, required:[true, "O CPF é obrigatório"]},
    senha: { type: mongoose.Schema.Types.String, required:[true, "A senha é obrigatória"]},
});

const userModel = mongoose.model("users", userSchema);

export { userModel, userSchema };