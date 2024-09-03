
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
import { notify } from "../../index";

function Cadastro(){

    const validationSchema = Yup.object({
        nome: Yup.string().required("O nome é Obrigatório"),
        email: Yup.string().email().required("O email é obrigatório."),
        senha: Yup.string()
        .required('Senha requerida.') 
        .min(8, 'Senha deve conter ao menos 8 digitos.'),
        birth: Yup.date().max(new Date(), "A data de nascimento não pode ser no futuro!").required("Data de Nascimento é obrigatória."),
        CPF: Yup.string()
        .matches(/^\d{11}$/, "CPF deve conter exatamente 11 dígitos numéricos")
        .required("CPF é obrigatório."),
        image: Yup.mixed().nullable()
    });

    const initialValues = {
        nome: "",
        email: "",
        senha:"",
        birth: "",
        CPF: "",
        image: null
    };
    
    
    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSingUp = async (values)=>{
        try {
            
            const formData = new FormData();
            for (const key in values) {
                if (values[key] !== null && values[key] !== undefined) {
                    formData.append(key, values[key]);
                }
            }
            
            const resultAction = await dispatch(addUser(formData));

            console.log(resultAction);
    
            if (addUser.fulfilled.match(resultAction)) {
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } else {
                console.log("entrou else erro");
                notify("error", `Erro ao realizar o cadastro: ${resultAction.payload}`);
            }
        } catch (error) {
            console.log("entrou catch error");
            notify("error", `Erro ao realizar o cadastro: ${error.message}`);
            console.error(error);
        }


            // const status = dispatch(addUser(values));
            // // notify("success", "Cadastro realizado com sucesso");
            // if(status){
            //     setTimeout(() => {
            //         navigate("/login");
            //     }, 2000)
            // }
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
                            {({ isValid }) => (
                            <Form className="formulario-cadastro">
                                <InputComponentYup classes="mt-3" id="nameImput" name="nome" text={<b>Nome Completo</b>} type="text" placeholder="Seu nome completo aqui"/>
                                <InputComponentYup classes="" id="InputEmail" name="email" text={<b>Email</b>} type="email" placeholder="Insira seu email aqui" />
                                <InputComponentYup classes="" id="CPFInput" name="CPF" text={<b>CPF</b>} type="text" placeholder="Seu CPF aqui" />
                                <InputComponentYup classes="" id="age" name="birth" text={<b>Data de Nascimento</b>} type="date" placeholder="" />
                                <InputComponentYup classes="" id="image" name="image" text={<b>Foto de perfil</b>} type="file" />    
                                <InputComponentYup classes="" id="Password" name="senha" text={<b>Senha</b>} type="password" placeholder="Insira sua senha aqui"/>
                                <div className="mt-3 d-flex justify-content-center">
                                    <button className="btn-submit" type="submit" disabled={!isValid}>Cadastrar</button>
                                </div>
                                <div className="cadastro-texto mt-3">
                                    Possui conta?<Link to="/login">Faça o seu Login!</Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
    );
}
export default Cadastro;