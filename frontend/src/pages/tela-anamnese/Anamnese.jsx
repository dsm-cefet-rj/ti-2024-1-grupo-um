import Navbar from "../../components/Navbar/Navbar";
import FormCreator from "../../components/FormCreator/formCreator";
import FooterComp from "../../components/Footer/Footer";
import './style.css'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnmneseAsync, addAnmnese } from "../../redux/anamnese/slice";
import Login from "../tela-login/Login"
import { useNavigate, Navigate } from "react-router-dom";
import VisuAnamnese from "./VisuAnamnese";
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";
import SelectComponentYup from "../../components/InputComponent/SelectComponentYup";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import { notify } from "../../index";
import { ToastContainer } from 'react-toastify';


function Anamnese() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector(rootReducer => rootReducer.user);
    const anamneseUser = useSelector(rootReducer => rootReducer.anamnese);

    const handleSubmitForm = (infos) => {
        
        infos.userId = currentUser.user._id;
        dispatch(addAnmneseAsync({
            infos: infos, 
            token: currentUser.logged
        }));
        dispatch(addAnmnese(infos));

        

        setTimeout(() => {
            navigate("/personais");
        }, 2000);
    }
    if (!currentUser.logged) {
        return <Navigate to="/login" />;
    }

    // se o user possui anamnese
    if (anamneseUser.preenchida) {
        return <VisuAnamnese />;
    }

    const initialValues = {
        weight: "",
        motivation: "",
        activityFreq: "",
        date: "",
        diet: "",
        observacoes: "",
    }

    const freqOptions = ["Nenhuma", "até 3 vezes por semana", "mais de 4 vezes na semana"];
    const yesOrNot = ["Sim", "Não"];

    const validationSchema = Yup.object({
        weight: Yup.number().required("Peso é obrigatório").max(500, "Peso não deve ser maior que 500"),
        motivation: Yup.string().required("Motivação é obrigatório"),
        activityFreq: Yup.string().required("Selecione uma opção").oneOf(freqOptions),
        date: Yup.date(),
        diet: Yup.string().required("Responda sim ou não").oneOf(yesOrNot),
        observacoes: Yup.string(),
    })

    return (
        <>
            <Navbar />
            <div className="bg-image cefit-background-img" style={{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        handleSubmitForm(values)
                    }}
                >
                    {({ isValid }) => (
                        <Form>
                            <div className="container cefit-form">
                                <h2 id="titulo-form">Faça sua Anamnese</h2>

                                <InputComponentYup classes="mt-3" id="weightInput" name="weight" text={<b>Seu peso:</b>} type="number" placeholder="Digite o seu peso (em kg)" />
                                <InputComponentYup classes="mt-3" id="motivationInput" name="motivation" text={<b>Motivação/Objetivo:</b>} type="text" placeholder="Ganhar peso, perder peso, ganhar músculos ..." />
                                <SelectComponentYup classes="mt-3" id="activityFreqSelect" name="activityFreq" text={<b>Com que frequência faz atividade física?</b>} options={freqOptions} />
                                <InputComponentYup classes="mt-3" id="dateInput" name="date" text={<b>Data do ultimo exame médico ou físico:</b>} type="date" placeholder="" />
                                <SelectComponentYup classes="mt-3" id="dietSelect" name="diet" text={<b>Faz dieta?</b>} options={yesOrNot} />
                                <InputComponentYup classes="mt-3" id="observacoesInput" name="observacoes" text={<b>Observações:</b>} type="text" placeholder="(Opcional) Digite observações" />

                                <div className="mt-3 d-flex justify-content-center">
                                    <button className="btn-submit" type="submit" disabled={!isValid}>Enviar</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>


            </div>
            <FooterComp />
        </>
    )
}

export default Anamnese