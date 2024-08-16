//components
import Navbar from "../../components/Navbar/Navbar";
import FooterComp from "../../components/Footer/Footer";
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";
import './style.css';
//react
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
import { notify } from "../../index";

function Perfil() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const currentUser = useSelector(rootReducer => rootReducer.user);
    const treinos = useSelector(rootReducer => rootReducer.trainings);
    const anamnese = useSelector(rootReducer => rootReducer.anamnese);

    const handleSubmitForm = (infos) => {
        console.log(infos);
        infos._id = currentUser.user._id;
        console.log(infos);
        dispatch(updateUser(infos));
        dispatch(addLoggedUser(infos));

        notify("success", "Usuario editado com sucesso");

        setTimeout(() => {
            navigate("/personais");
        }, 2000);
    }
    const handleUserDelete = () => {
        const userId = currentUser.user._id;
        for(let treino of treinos){
            dispatch(deleteTreinoByID(treino.id));
        }
        //clear trainings
        dispatch(deleteAnamnese(anamnese?.id));
        //clear anamnese
        // dispatch(deleteAlunoByUserId(userId));
        //clear aluno
        dispatch(deleteUser(userId));
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

    function formatDate(dateString) {
        // Cria um objeto Date a partir da string ISO
        const date = new Date(dateString);
    
        // Extrai o dia, mês e ano
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // getUTCMonth retorna o mês de 0 a 11
        const year = date.getUTCFullYear();
    
        return `${year}-${month}-${day}`;

    }

    const initialValues = {
        nome: currentUser.user.nome,
        email: currentUser.user.email,
        senha: currentUser.user.senha,
        birth: formatDate(currentUser.user.birth),
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