//imports components
import Navbar from "../../components/Navbar/Navbar";
import FooterComp from "../../components/Footer/Footer";
import Modal from "../../components/Modal/AddExercicio";
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";
import SelectComponentYup from "../../components/InputComponent/SelectComponentYup";

// import css
import "./styles.css";

//imports react
import { Navigate, useNavigate, useParams } from "react-router-dom";
import React, { useState } from 'react';

//imports redux
import { useDispatch, useSelector } from "react-redux";
import { addInfo, clearForms } from "../../redux/form-treino/slice";
import { addExercicio, addExercise, clearExercises } from "../../redux/exercises/slice";
import { addTraining, addTreino, addTreinoForStudent } from "../../redux/trainings/slice";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormList from "../../components/FormList/formList";
import { ToastContainer } from 'react-toastify';
import { notify } from "../..";


function CreateTreinoAluno() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const personal = useSelector(rootReducer => rootReducer.user);
    const exercicios = useSelector(rootReducer => rootReducer.exercises);
    const form = useSelector(rootReducer => rootReducer.forms);

    const [showModal, setShowModal] = useState(false);

    const handleSubmitForm = (info) => {
        
        dispatch(addInfo(info));


        const treinoInfo = {
            userId: form.userId,
            descricao: info.descricao,
            title: info.title,
            type: info.type,
            observacoes: info.observacoes
        }

        dispatch(addTreinoForStudent({
            infos: treinoInfo,
            userId: form.userId,
            token: personal.loggedPersonal,
            exercicios
        }));
<<<<<<< HEAD
        
=======
>>>>>>> ca03db98af5e5a08a1c22a0a5638d5b27a5341b2
        navigate("/meusAlunos");
    }
    

    const handleSubmitAddExercise = (info) => {
        dispatch(addExercise(info));
        setShowModal(false);
    }

    const openModal = () => {
        setShowModal(true);
    };

    const trainingTypes = ["superiores", "inferiores", "cardio", "natacao", "crossfit", "outro"]

    const initialValues = {
        title: "",
        descricao: "",
        type: "",
        observacoes: "",
    }

    const validationSchema = Yup.object({
        title: Yup.string().required("Nome é obrigatório"),
        descricao: Yup.string().required("Descrição é obrigatória"),
        type: Yup.string().required("Selecione um tipo").oneOf(trainingTypes),
        observacoes: Yup.string(),
    })

    //veriricando login do usuario
    if (!personal.loggedPersonal) {
        return <Navigate to="/" />
    }

    return (
        <>
            <Navbar />
            <div className="container form-card p-5">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        handleSubmitForm(values);
                    }}>
                    {({ isValid }) => (
                        <Form>
                            <div className="container mx-4 cefit-form">
                                <h2 id="titulo-form">Adicionar Novo Treino</h2>
                                <InputComponentYup classes="mt-3" id="titleInput" name="title" text={<b>Nome do Treino:</b>} type="text" placeholder="Digite o nome do treino" />
                                <InputComponentYup classes="mt-3" id="descricaoInput" name="descricao" text={<b>Descrição do Treino:</b>} type="text" placeholder="Digite a descrição do treino" />
                                <SelectComponentYup classes="mt-3" id="typeSelect" name="type" text={<b>Tipo do Treino:</b>} options={trainingTypes} />
                                <InputComponentYup classes="mt-3" id="observacoesInput" name="observacoes" text={<b>Observações:</b>} type="text" placeholder="Digite as observações do treino" />
                                <FormList items={exercicios} buttonText="+ Exercícios" listTitle="Exercícios" buttonAction={openModal} />

                                <div className="mt-3 d-flex justify-content-center">
                                    <button className="btn-submit" type="submit" disabled={!isValid}>Enviar</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
                {showModal && (
                    <Modal
                        setModal={() => {
                            setShowModal();
                        }}
                        idForm={form.id}
                        handleSubmitForm={handleSubmitAddExercise}
                    />
                )}
            </div>
            <FooterComp />
        </>
    )
}

export default CreateTreinoAluno;
