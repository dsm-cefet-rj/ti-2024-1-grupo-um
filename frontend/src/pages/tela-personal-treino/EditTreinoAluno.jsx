import Navbar from "../../components/Navbar/Navbar.jsx";
import FooterComp from "../../components/Footer/Footer.jsx";
import Exercicio from "../../components/Exercicio/Exercicios.jsx";
//modal
import Modal from "../../components/Modal/AddExercicio.jsx";
import React, { useState } from 'react';
import "./styles.css";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { deleteTreinoByID, deleteTraining } from "../../redux/trainings/slice.js";
import { addExercicio } from "../../redux/exercises/slice.js";

import { ToastContainer } from 'react-toastify';
import { notify } from "../../index.js";


function EditTreinoAluno() {
    //init
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //id treino
    const {id} = useParams();

    //modal
    const [showModal, setShowModal] = useState(false);

    const Exercises = useSelector(rootReducer => rootReducer.exercises)
    const currentUser = useSelector(rootReducer => rootReducer.user);

    const handleDeleteTreino = () => {

        dispatch(deleteTreinoByID({
            idTreino: id,
            token: currentUser.loggedPersonal
        }));

        dispatch(deleteTraining(id));

        setTimeout(() => {
            navigate("/areaFIT");
        }, 2000);
    }
    
    const openModal = () => {
        setShowModal(true);
    };

    const handlePostExercise = (info) => {
        dispatch(addExercicio({
            idForm: id,
            ...info,
            token: currentUser.loggedPersonal
        }));
        setShowModal(false);
    }

    if(!currentUser.loggedPersonal){
        return <Navigate to={"/login"}/>
    }
  

    return (
        <>
        <Navbar />
        <div className="treino">
            <div className="traino-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Exercícios</h1>
            </div>
        
            <div className="botao">
                <button className="btn-submit" onClick={() => openModal()}>+ Exercício</button>
            </div>

            <div className="exercicios">

            {id && (
                Exercises.map((exercicio, index) => (
                    <Exercicio
                        key={index}
                        nome={exercicio.name}
                        carga={exercicio.peso}
                        rep={exercicio.series}
                        obs={exercicio.observacoes}
                        type={exercicio.type}
                        idExercicio={exercicio._id}
                    />
                ))
            )}
           
            </div>
            {showModal && (
                    <Modal
                        setModal={() => {
                            setShowModal();

                        }}
                        idForm={id}
                        handleSubmitForm={handlePostExercise}
                    />
                )}
            </div>
            <div className="btn-div">
                <button className="btn-delete" onClick={() =>{handleDeleteTreino(id)}}>Excluir treino</button>
            </div>
        <FooterComp />
        </>
    );
}
  
export default EditTreinoAluno;