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
import { addLoggedUser, deleteUser, logoutUser, updateUser } from "../../redux/user/slice";
import { clearTrainings, deleteTreinoByID } from "../../redux/trainings/slice";
import { clearAnamnese, deleteAnamnese, deleteAnamneseByUserId } from "../../redux/anamnese/slice";
import { deleteAlunoByUserId } from "../../redux/aluno/slice";
import { clearExercises } from "../../redux/exercises/slice";
//Yup
import * as Yup from "yup";
import { Formik, Form } from "formik";

function Perfil() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const currentUser = useSelector(rootReducer => rootReducer.user);
    const treinos = useSelector(rootReducer => rootReducer.trainings);
    const anamnese = useSelector(rootReducer => rootReducer.anamnese);

    const handleSubmitForm = (infos) => {
        infos["id"] = currentUser.user.id;
        dispatch(updateUser(infos));
        dispatch(addLoggedUser(infos));
        alert("usuario editado com sucesso!");
        // infos["userId"] = currentUser.user.id;
        // dispatch(addAnmneseAsync(infos))
        // dispatch(addAnmnese(infos))
        // navigate("/personais")
    }
    const handleUserDelete = () => {
        const idUser = currentUser.user.id;
        debugger;
        for(let treino of treinos){
            dispatch(deleteTreinoByID(treino.id));
        }
        //clear trainings dispatch(clear)
        dispatch(deleteAnamnese(anamnese?.id));
        //clear anamnese
        dispatch(deleteAlunoByUserId(idUser));
        //clear aluno
        dispatch(deleteUser(idUser));
        dispatch(clearAnamnese());
        dispatch(clearTrainings());
        dispatch(clearExercises());
        dispatch(logoutUser());
    }
    if (!currentUser.logged) {
        return <Navigate to="/login" />;
    }

    const validationSchema = Yup.object({
        nome: Yup.string().required("O nome é Obrigatório"),
        email: Yup.string().email().required("O email é obrigatório."),
        senha: Yup.string()
        .required('Senha requerida.') 
        .min(8, 'Senha deve conter ao menos 8 digitos.'),
        birth: Yup.date().required("Data de Nascimento obrigatória."),
        CPF: Yup.string().required("CPF obrigatório.")
    });


    const initialValues = {
        nome: currentUser.user.nome,
        email: currentUser.user.email,
        senha: currentUser.user.senha,
        birth: currentUser.user.nascimento,
        CPF: currentUser.user.CPF
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
                                <h2 id="titulo-form">Edite seu Perfil</h2>
                                <InputComponentYup classes="mt-3" id="nameImput" name="nome"text="Nome Completo" type="text" placeholder="Seu nome completo aqui"/>
                                <InputComponentYup classes="" id="InputEmail" name="email" text="Email" type="email" placeholder="Insira seu email aqui" />
                                <InputComponentYup classes="" id="CPFInput" name="CPF" text="CPF" type="text" placeholder="Seu CPF aqui" />
                                <InputComponentYup classes="" id="age" name="birth" text="Data de Nascimento" type="date" placeholder="" />
                                <InputComponentYup classes="" id="Password" name="senha" text="Senha" type="password" placeholder="Insira sua senha aqui"/>
                                <div className="mt-3 d-flex justify-content-center">
                                    <button className="btn-submit" type="submit" disabled={!isValid}>Enviar</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="btn-div mt-3">
                    <button className="btn-delete" onClick={() =>{handleUserDelete()}}>Excluir usuário</button>
                </div>
            </div>
            <FooterComp />
        </>
    )
}

export default Perfil