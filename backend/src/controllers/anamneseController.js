//here the anamnese controller
import { anamneseModel } from "../models/AnamneseModel.js";

export const createAnamnese = async (req, res) => {
    try {

        const newAnamnese = {
            userId: req.body.userId,
            weight: req.body.weight,
            motivation: req.body.motivation,
            activityFreq: req.body.activityFreq,
            date: req.body.date,
            diet: req.body.diet,
            observacoes: req.body.observacoes
        }

        const existingAnamnesesArray = await anamneseModel.find({ userId: req.body.userId })

        if (existingAnamnesesArray.length >= 1) {
            return res.status(400).send({
                message: 'Usuário já possui uma Anamnese'
            });
        }

        await anamneseModel.create(newAnamnese)

        return res.status(200).send({
            message: 'Anamnese criada com sucesso',
            anamnese: newAnamnese
        });

    } catch (error) {
        return res.status(400).send({ message: 'Erro ao criar Anamnese', error: error.message })
    }
};

export const getAnamneseByUserId = async (req, res) => {

    try {
        const userId = req.params.userId;
        const anamnese = await anamneseModel.find({ userId });
        return res.status(200).json(anamnese);
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao buscar Anamnese', error: error.message });
    }
};
//UPDATE_ANAMNESE
export const updateAnamnese = async (req, res) => {
    try {
        
        const newAnamnese = {
            id: req.body.id,
            userId: req.body.userId,
            weight: req.body.weight,
            motivation: req.body.motivation,
            activityFreq: req.body.activityFreq,
            date: req.body.date,
            diet: req.body.diet,
            observacoes: req.body.observacoes
        };

        const updatedAnamnese = await anamneseModel.findByIdAndUpdate(
            req.body.id, newAnamnese,
            { new: true }
        );

        return res.status(200).json({message: 'Anamnese atualizada com sucesso', anamnese: updatedAnamnese})
    } catch (error) {
        return res.status(400).json({ message: 'Erro ao atualizar Anamnese', error: error.message });
    }
};
//DELETE_ANAMNESE
export const deleteAnamnese = async (req, res) => {
    try {
        const anamneseDelete = await anamneseModel.findByIdAndDelete(req.params.id);

        if(anamneseDelete){
            return res.status(200).send({
                message: 'Anamnese removida com sucesso',
                data: anamneseDelete
            });
        }else{
            return res.status(400).send({
                message: "Anamnese não encontrada"
            })
        }
    } catch (error) {
        return res.status(400).send({message: 'Erro ao deletar anamnese', error: error.message})
    }
}