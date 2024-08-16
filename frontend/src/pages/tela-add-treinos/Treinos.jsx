//imports components
import Navbar from "../../components/Navbar/Navbar";
import FooterComp from "../../components/Footer/Footer";
import Modal from "../../components/Modal/AddExercicio";
import AreaFIT from "../tela-area-fit/AreaFIT";
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";
import SelectComponentYup from "../../components/InputComponent/SelectComponentYup";

// import css
import "./styles.css";

//imports react
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

//imports redux
import { useDispatch, useSelector } from "react-redux";
import { addInfo, addTreino } from "../../redux/form-treino/slice";
import { addExercicio, clearExercises } from "../../redux/exercises/slice";
import { addTraining } from "../../redux/trainings/slice";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormList from "../../components/FormList/formList";
import { notify } from "../../index.js";



function AddTreinos() {
    //inicializadores
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // pegando o usuario
    const loggedUser = useSelector(rootReducer => rootReducer.user);
    const exercicios = useSelector(rootReducer => rootReducer.exercises);
    const form = useSelector(rootReducer => rootReducer.forms);

    const [showModal, setShowModal] = useState(false);

    const handleSubmitForm = (info) => {
        console.log(info)
        dispatch(addInfo(info));
        const treinoInfo = {
            userId: form.userId,
            descricao: info.descricao,
            title: info.title,
            type: info.type,
            observacoes: info.observacoes
        }
        dispatch(addTreino(treinoInfo));
        dispatch(addTraining(treinoInfo));
        exercicios.map((exercicio) => dispatch(addExercicio(exercicio)));
        dispatch(clearExercises());
        notify("success", "Treino adicionado com sucesso");
        setTimeout(() => {
            navigate("/areaFIT");
        }, 2000)
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
    if (!loggedUser.logged) {
        return <AreaFIT />
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
                    />
                )}
            </div>
            <FooterComp />
        </>
    )
}

export default AddTreinos;
