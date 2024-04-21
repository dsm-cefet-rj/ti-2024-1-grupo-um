import Navbar from "../../components/Navbar/Navbar";
import FormCreator from "../../components/FormCreator/formCreator";
import FooterComp from "../../components/Footer/Footer";
import './style.css'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnmneseAsync, addAnmnese } from "../../redux/anamnese/slice";
import Login from "../tela-login/Login"
import { useNavigate } from "react-router-dom";
import VisuAnamnese from "./VisuAnamnese";
import { getAnamnese } from "../../redux/anamnese/slice";

function Anamnese() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const formFields = [
        {
            component: "input",
            classes: "",
            id: "weigth",
            type: "number",
            text: <b>Seu peso:</b>,
            placeholder: "",
        },
        {
            component: "textArea",
            classes: "",
            id: "motivation",
            type: "text",
            text: <b>Motivação/Objetivo</b>,
            placeholder: "Ganhar peso, perder peso, ganhar músculos ...",
        },
        {
            component: "radio",
            classes: "",
            id: "activityFreq",
            name: "frequency",
            text: <b>Com que frequência faz atividade física?</b>,
            options: [
                {
                    id: "activityFreq",
                    value: "0",
                    text: "Nenhuma",
                },
                {
                    id: "activityFreq",
                    value: "3",
                    text: "até 3 vezes por semana",
                },
                {
                    id: "activityFreq",
                    value: "4",
                    text: "mais de 4 vezes na semana",
                },
            ],
        },
        {
            component: "input",
            classes: "",
            id: "exam",
            type: "date",
            text: <b>Data do ultimo exame médico ou físico:</b>,
            placeholder: "",
        },
        {
            component: "textArea",
            classes: "",
            id: "diet",
            type: "text",
            text: <b>Faz dieta? Se sim, para qual motivo e há quanto tempo?</b>,
            placeholder: "",
        },
        {
            component: "textArea",
            classes: "",
            id: "observacoes",
            type: "text",
            text: <b>Observações:</b>,
            placeholder: "(Opcional) Digite observações sobre o treino",
        },
    ]
    const currentUser = useSelector(rootReducer => rootReducer.user);
    const anamnese = useSelector(rootReducer => rootReducer.anamnese);
    
    useEffect(() => {
        if (currentUser.logged) {
            // Verificar se já existe uma anamnese associada ao ID do usuário
            dispatch(getAnamnese(currentUser.user.id));
        }
    }, [currentUser.logged, currentUser.user.id, dispatch]);
    

    const handleSubmitForm = (infos) => {
        infos["userId"] = currentUser.user.id;
        dispatch(addAnmneseAsync(infos))
        dispatch(addAnmnese(infos))
        navigate("/personais")
    }
    if (!currentUser.logged) {
        return <Login />;
    }
    
     // Verificar se já existe uma anamnese associada ao ID do usuário
     if (getAnamnese.activityFreq || anamnese.weigth || anamnese.motivation || anamnese.exam || anamnese.diet || anamnese.observacoes) {
        // Se pelo menos um dos campos da anamnese estiver preenchido, redirecionar para a página de visualização da anamnese
        return <VisuAnamnese />;
     }
    //const anamnese = useSelector(rootReducer => rootReducer.anamnese);
    //console.log(anamnese);
    //if(anamnese){ 
     //   return <VisuAnamnese />;
    //}
    
    return (
        <>
            <Navbar />
            <div className="form-card p-5">
                <div className="container cefit-form">
                    <h2 id="titulo-form">Faça sua Anamnese</h2>
                    <p>Para responder a anamnese, caso a resposta seja <b>Não</b>, não é necessário preencher os campos de texto. Caso contrário, favor preencher o campo de texto.</p>
                    <FormCreator fields={formFields} buttonText="Salvar" buttonAction={handleSubmitForm} />
                </div>
            </div>
            <FooterComp />
        </>
    )
}

export default Anamnese