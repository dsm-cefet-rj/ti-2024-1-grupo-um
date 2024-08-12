//components
import Navbar from "../../components/Navbar/Navbar";
import FooterComp from "../../components/Footer/Footer";
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";
import './style.css';
//react
import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addLoggedPersonal, logoutUser, } from "../../redux/user/slice";
import { clearAlunos, deleteAlunoByPersonalId } from "../../redux/aluno/slice";
import { deletePersonal, updatePersonal } from "../../redux/personal/slice";
//Yup
import * as Yup from "yup";
import { Formik, Form } from "formik";


function PerfilPersonal() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const currentUser = useSelector(rootReducer => rootReducer.user);

    const handleSubmitForm = (infos) => {
        console.log(currentUser.personal);
        console.log(currentUser.personal._id);
        dispatch(updatePersonal({...infos, _id: currentUser.personal._id}));
        // dispatch(addLoggedPersonal(infos));
        alert("Personal editado com sucesso!");
        navigate("/");
    }
    const handlePersonalDelete = () => {
        const idPersonal = currentUser.personal.id;
        dispatch(deleteAlunoByPersonalId(idPersonal));
        dispatch(deletePersonal(idPersonal));
        dispatch(clearAlunos());
        dispatch(logoutUser());
        navigate("/");
    }

    if (!currentUser.loggedPersonal) {
        return <Navigate to="/login" />;
    }

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
        preco: Yup.number().required("Preço é obrigatório.")
    });

    const initialValues = {
        nome: currentUser.personal.nome,
        email: currentUser.personal.email,
        senha: currentUser.personal.senha,
        birth: currentUser.personal.birth,
        CPF: currentUser.personal.CPF,
        descricao: currentUser.personal.descricao,
        formacao: currentUser.personal.formacao,
        cidade: currentUser.personal.cidade,
        biografia: currentUser.personal.biografia,
        preco: currentUser.personal.preco
    };
    
    return (
        <>
            <Navbar />
            <div className="form-card p-5">
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
                                <h2 id="titulo-form">Edite seu Perfil de Personal</h2>
                                <InputComponentYup classes="mt-3" id="nameImput" name="nome"text="Nome Completo" type="text" placeholder="Seu nome completo aqui"/>
                                <InputComponentYup classes="" id="InputEmail" name="email" text="Email" type="email" placeholder="Insira seu email aqui" />
                                <InputComponentYup classes="" id="CPFInput" name="CPF" text="CPF" type="text" placeholder="Seu CPF aqui" />
                                <InputComponentYup classes="" id="age" name="birth" text="Data de Nascimento" type="date" placeholder="" />
                                <InputComponentYup classes="" id="descricao" name="descricao" text="Descricao" type="text" placeholder="Breve Descricao" />
                                <InputComponentYup classes="" id="cidade" name="cidade" text="Cidade" type="text" placeholder="Cidade em que mora" />
                                <InputComponentYup classes="" id="formacao" name="formacao" text="Formação" type="text" placeholder="Sua Formação aqui" />
                                <InputComponentYup classes="" id="biografia" name="biografia" text="Biografia" type="text" placeholder="Sua Biografia aqui" />
                                <InputComponentYup classes="" id="preco" name="preco" text="Preço da sua consultoria" type="text" placeholder="Ex: R$ 39,90" />
                                <InputComponentYup classes="" id="Password" name="senha" text="Senha" type="password" placeholder="Insira sua senha aqui"/>
                                <div className="mt-3 d-flex justify-content-center">
                                    <button className="btn-submit" type="submit" disabled={!isValid}>Enviar</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="btn-div mt-3">
                    <button className="btn-delete" onClick={() =>{handlePersonalDelete()}}>Excluir conta</button>
                </div>
            </div>
            <FooterComp />
        </>
    )
}

export default PerfilPersonal