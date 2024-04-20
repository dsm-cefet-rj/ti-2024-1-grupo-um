import Navbar from "../../components/Navbar/Navbar.jsx";
import FooterComp from "../../components/Footer/Footer.jsx";
import Exercicio from "../../components/Exercicio/Exercicios.jsx";


import "./treinos.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Treino() {

    const {id} = useParams();
    const Exercises = useSelector(rootReducer => rootReducer.exercises)

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
  
    return (
        <>
        <Navbar />
        <div className="treino">
        <div className="traino-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Exercícios</h1>
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
            </div>
        </div>
        <FooterComp />
        </>
    );
  }
  
  export default Treino;