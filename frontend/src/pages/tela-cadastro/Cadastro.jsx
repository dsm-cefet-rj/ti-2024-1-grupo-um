
//components
import InputComponent from "../../components/InputComponent/InputComponent";
import CefetImage from "../../components/CefetImage/CefetImage";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

//import react stuff
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//import css
import "./../pages.css";

//import redux
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/user/slice";
//import yup and formik
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import gerador de id
import { v4 as idGen } from "uuid";
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";

function Cadastro(){

    const validationSchema = Yup.object({
        nome: Yup.string().required(),
        email: Yup.string().email().required(),
        senha: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        birth: Yup.date().default(() => new Date()),
        CPF: Yup.string().required()
    });

    const initialValues = {
        nome: "",
        email: "",
        senha:"",
        birth: "",
        CPF: ""
    };
    
    
    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSingUp=(values)=>{
        dispatch(addUser({...values, id:idGen()}));
        navigate("/login");
    }

    return(
        <div className="bg-image cefit-background-img" style={{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
                <div className="login-container rounded-5 p-3">
                    <CefetImage/>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            handleSingUp(values);
                        }}>
                        <Form className="formulario-cadastro">
                            <InputComponentYup classes="mt-3" id="nameImput" name="nome"text="Nome Completo" type="text" placeholder="Seu nome completo aqui"/>
                            <InputComponentYup classes="" id="InputEmail" name="email" text="Email" type="email" placeholder="Insira seu email aqui" />
                            <InputComponentYup classes="" id="CPFInput" name="CPF" text="CPF" type="text" placeholder="Seu CPF aqui" />
                            <InputComponentYup classes="" id="age" name="birth" text="Data de Nascimento" type="date" placeholder="" />
                            <InputComponentYup classes="" id="Password" name="senha" text="Senha" type="password" placeholder="Insira sua senha aqui"/>
                            <SubmitButton nomeButton="Cadastrar" />
                            <div className="cadastro-texto mt-3">
                                Possui conta?<Link to="/login">Faça o seu Login!</Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
    );
}
export default Cadastro;