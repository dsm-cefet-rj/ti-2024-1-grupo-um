
//Componentes
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";
import FooterComp from "../../components/Footer/Footer";
//react imports
import { Link, useNavigate } from "react-router-dom";
//style imports
import logo from "./../../images/logo.png";
import "./CadastroPersonal.css";
import "./../pages.css";
//import yup and formik
import * as Yup from "yup";
import { Formik, Form } from "formik";
//redux
import { useDispatch } from "react-redux";
import { createPersonal } from "../../redux/personal/slice";
// import { createHash } from "crypto";
import { v4 as idGen } from "uuid";

import { notify } from "../../index";
import { ToastContainer } from 'react-toastify';

function CadastroPersonal(){

    const validationSchema = Yup.object({
        nome: Yup.string().required("O nome é obrigatório."),
        email: Yup.string().email().required("O email é obrigatório."),
        senha: Yup.string().required("Senha é obrigatória.").min(8, "Senha deve conter pelo menos 8 caracteres."),
        birth: Yup.date().required("Data de Nascimento é obrigatória."),
        CPF: Yup.string().required("CPF é obrigatório."),
        descricao: Yup.string().required("Descrição é obrigatória."),
        formacao: Yup.string().required("Formação é obrigatória."),
        cidade: Yup.string().required("Cidade é obrigatória."),
        biografia: Yup.string().required("Biografia é obrigatória."),
        preco: Yup.number().required("Preço é obrigatório."),
        image: Yup.mixed().nullable() //tratar tipo de arquivo para aceitar jpg e png somente
    });

    const initialValues = {
        nome: "",
        email: "",
        senha:"",
        birth: "",
        CPF: "",
        descricao:"",
        formacao:"",
        cidade:"",
        biografia:"",
        preco:"",
        image: null
    };



    const navigate = useNavigate();
    const dispatch = useDispatch();
    //Fazer algo parecido com isso -> continua sem tratar a imagem
    // const handlePersonalSingUp = async (values) => {
    //     try {
    //         
    //         const formData = new FormData();
    
    //        
    //         for (const key in values) {
    //             if (values[key] !== null && values[key] !== undefined) {
    //                 formData.append(key, values[key]);
    //             }
    //         }
    
    //         
    //         const resultAction = await dispatch(createPersonal(formData));
    
    //         if (createPersonal.fulfilled.match(resultAction)) {
    //             notify("success", "Cadastro realizado com sucesso");
    //             setTimeout(() => {
    //                 navigate("/LoginPersonal");
    //             }, 2000);
    //         } else {
    //             notify("error", `Erro ao realizar o cadastro: ${resultAction.payload}`);
    //         }
    //     } catch (error) {
    //         notify("error", `Erro ao realizar o cadastro: ${error.message}`);
    //         console.error(error);
    //     }
    // };
    
    const handlePersonalSingUp=(values)=>{
        dispatch(createPersonal({...values, id: idGen()}));
        notify("success", "Cadastro realizado com sucesso");

        setTimeout(() => {
            navigate("/LoginPersonal");
        }, 2000)
    }
    return(
        <div>
            <div className="bg-image cefit-background-img" id="cad-personal" style={{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
                    <div className="login-container rounded-5 p-3">
                        <div className="cefit-logo verde text-center rounded-5 m-auto">
                            <img src={logo} alt="image cefit" className="p-1" width="100%" height="100%"/>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                handlePersonalSingUp(values);
                            }}>
                                {({ isValid }) => (
                            <Form className="formulario-cadastro">
                                <InputComponentYup classes="mt-3" id="nameImput" name="nome"text="Nome Completo" type="text" placeholder="Seu nome completo aqui"/>
                                <InputComponentYup classes="" id="InputEmail" name="email" text="Email" type="email" placeholder="Insira seu email aqui" />
                                <InputComponentYup classes="" id="CPFInput" name="CPF" text="CPF" type="text" placeholder="Seu CPF aqui" />
                                <InputComponentYup classes="" id="age" name="birth" text="Data de Nascimento" type="date" placeholder="" />
                                <InputComponentYup classes="" id="descricao" name="descricao" text="Descricao" type="text" placeholder="Breve Descricao" />
                                <InputComponentYup classes="" id="cidade" name="cidade" text="Cidade" type="text" placeholder="Cidade em que mora" />
                                <InputComponentYup classes="" id="formacao" name="formacao" text="Formação" type="text" placeholder="Sua Formação aqui" />
                                <InputComponentYup classes="" id="biografia" name="biografia" text="Biografia" type="text" placeholder="Sua Biografia aqui" />
                                <InputComponentYup classes="" id="preco" name="preco" text="Preço da sua consultoria" type="text" placeholder="Ex: R$ 39,90" />
                                <InputComponentYup classes="" id="image" name="image" text="image" type="file" />    
                                <InputComponentYup classes="" id="Password" name="senha" text="Senha" type="password" placeholder="Insira sua senha aqui"/>
                                <div className="cadastro-texto mt-3">
                                    Possui conta? <Link to="/login"> Faça o seu Login!</Link>
                                </div>
                                <div className="d-flex w-100 mt-3">
                                    <button type="submit" className="btn verde w-100" disabled={!isValid}>Cadastrar</button>
                                </div>
    
                            </Form>
                            )}
                        </Formik>
                    </div>
                </div>
           
        </div>
    );
}
export default CadastroPersonal;