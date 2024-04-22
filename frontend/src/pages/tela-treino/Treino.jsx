import Navbar from "../../components/Navbar/Navbar.jsx";
import FooterComp from "../../components/Footer/Footer.jsx";
import Exercicio from "../../components/Exercicio/Exercicios.jsx";
//modal
import Modal from "../../components/Modal/AddExercicio";

import "./treinos.css";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";

import { deleteTreinoByID, deleteTraining } from "../../redux/trainings/slice.js";

function Treino() {
    //id treino
    const {id} = useParams();
    const dispatch = useDispatch();
    const Exercises = useSelector(rootReducer => rootReducer.exercises)
    const navigate = useNavigate();
    const currentUser = useSelector(rootReducer => rootReducer.user);

    if(!currentUser.logged){
        return <Navigate to={"/login"}/>
    }
    

    const exercicios = [
        {
            nome: "Esteira",
            carga: "10kg",
            rep: "3x15",
            obs: "Ajuste do banco: 1",
            type: "cardio"

        },
        {
            nome: "Cadeira Extensora",
            carga: "30kg",
            rep: "3x15",
            obs: "Ajuste do banco: 3",
            type: "musc"

        },
        {
            nome: "Cadeira Flexora",
            carga: "30kg",
            rep: "3x15",
            obs: "Ajuste do banco: 3",
            type: "musc"

        },
        {
            nome: "Leg Press",
            carga: "60kg",
            rep: "3x15",
            obs: "Ajuste do banco: 1",
            type: "musc"

        },
        {
            nome: "Stiff Barra",
            carga: "15kg",
            rep: "3x15",
            obs: "Descanso de 1 min",
            type: "musc"

        },
        {
            nome: "Elevação pélvica",
            carga: "10kg",
            rep: "3x15",
            obs: "Ajuste do banco: 1"

        }
        
    ]

    const handleDeleteTreino = (idTreino) => {
        dispatch(deleteTreinoByID(id));
        dispatch(deleteTraining(id));
        navigate("/areaFIT");
    }
    
    /*const openModal = () => {
        setShowModal(true);
    };*/

    return (
        <>
        <Navbar />
        <div className="treino">
        <div className="traino-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Exercícios</h1>
        </div>
        
        <div className="botao">
            <button className="btn-submit">+ Exercício</button>
        </div>

            <div className="exercicios">
            {id?(
                Exercises.map((exercicio, index) => (
                    <Exercicio
                    key={index}
                    nome={exercicio.name}
                    carga={exercicio.peso}
                    rep={exercicio.series}
                    obs={exercicio.obs}
                    type={exercicio.type}
                    />
                ))
            ):(
                exercicios.map((exercicio, index) => (
                    <Exercicio
                    key={index}
                    nome={exercicio.nome}
                    carga={exercicio.carga}
                    rep={exercicio.rep}
                    obs={exercicio.obs}
                    type={exercicio.type}
                    
                    />
                ))
            )}
            {/*{showModal && (
                    <Modal
                        setModal={() => {
                            setShowModal();

                        }}
                        idForm={form.id}
                    />
                )}*/}
            </div>
        </div>
        <div className="btn-div">
            <button className="btn-delete" onClick={() =>{handleDeleteTreino(id)}}>Excluir treino</button>
        </div>
        <FooterComp />
        </>
    );
  }
  
  export default Treino;