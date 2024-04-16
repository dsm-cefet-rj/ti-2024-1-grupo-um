import Navbar from "../../components/Navbar/Navbar";
import FooterComp from "../../components/Footer/Footer";
import FormCreator from "../../components/FormCreator/formCreator";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addTraining } from "../../redux/trainings/slice";
import { addTreinoId } from "../../redux/exercises/slice";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Modal from "../../components/Modal/AddExercicio";
import addForms from "../../redux/form-treino/slice";

function AddTreinos() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    
    const handleSubmitForm = (info) => {
        dispatch(addTraining(info));
        navigate("/areaFIT");
    }
    // pegando o id do usuario
    const idUser = useSelector(rootReducer => rootReducer.user).id;
    // criando o forms com o id do usuario
    addForms({idUser});
    //dispatch criar treino.
    //dispatch criar exercicios.
    //dispatch salvar treino.
    //dispatch linkar exercicios com id do treino.
    // pegando o id do form
    const idForm = useSelector(rootReducer => rootReducer.forms).id;

    const openModal = () => {
        setShowModal(true);
    };

    const formFields = [
        {
            component: "input",
            classes: "",
            id: "title",
            type: "text",
            text: <b>Nome do Treino:</b>,
            placeholder: "Digite o nome do treino",
        },
        {
            component: "input",
            classes: "",
            id: "description",
            type: "text",
            text: <b>Descrição do Treino:</b>,
            placeholder: "Digite a descrição do treino",
        },
        {
            component: "radio",
            classes: "",
            id: "type",
            name: "training-type",
            text: <b>Tipo do Treino:</b>,
            options: [
                {
                    id: "type",
                    value: "inferiores",
                    text: "Inferiores",
                },
                {
                    id: "type",
                    value: "superiores",
                    text: "Superiores",
                },
                {
                    id: "type",
                    value: "cardio",
                    text: "Cardio",
                },
                {
                    id: "type",
                    value: "natacao",
                    text: "Natação",
                },
                {
                    id: "type",
                    value: "crossfit",
                    text: "Crossfit",
                },
                {
                    id: "type",
                    value: "outro",
                    text: "Outro",
                },
            ],
        },
    
        {
            component: "textArea",
            classes: "",
            id: "observacoes",
            type: "text",
            text: <b>Observações:</b>,
            placeholder: "Digite observações sobre o treino",
        },
        {
            component: "formList",
            items: useSelector(rootReducer => rootReducer.exercises),
            buttonText: "+ Exercício",
            listTitle: "Exercícios",
            buttonAction: openModal, // Alterado para abrir o modal
        }
    ]

    return (
        <>
            <Navbar />
            <div className="container form-card p-5">
                <div className="container mx-4 cefit-form">
                    <h2>Adicionar Novo Treino</h2>
                    <FormCreator fields={formFields} buttonText={"Salvar Treino"} buttonAction={handleSubmitForm}/>
                </div>
                {showModal && (
                    <Modal
                        setModal={() => {
                            setShowModal();

                        }}
                        idForm = {idForm}
                    />
                )}
            </div>
            <FooterComp />
        </>
    )
}

export default AddTreinos;
