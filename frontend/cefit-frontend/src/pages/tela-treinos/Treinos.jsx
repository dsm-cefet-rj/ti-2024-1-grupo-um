import Navbar from "../../components/Navbar/Navbar";
import FooterComp from "../../components/Footer/Footer";
import Exercicio from "../../components/Exercicio/Exercicios.jsx";
import "./treinos.css";
import { Link } from "react-router-dom";

function Treino() {
    const exercicios = [
        {
            nome: "Cadeira Extensora",
            carga: "30kg",
            obs: "Ajuste do banco: 3"

        },
        {
            nome: "Cadeira Flexora",
            carga: "30kg",
            obs: "Ajuste do banco: 3"

        },
        {
            nome: "LegPress",
            carga: "60kg",
            obs: "Ajuste do banco: 1"

        },
    ]
  
    return (
        <>
        <Navbar />
        <div className="treino">
        <div className="traino-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Exercícios</h1>
            </div>
            <div className="exercicios">
            {exercicios.map((exercicio, index) => (
                <Exercicio
                key={index}
                nome={exercicio.nome}
                carga={exercicio.carga}
                obs={exercicio.obs}
                
                />
            ))}
            </div>
        </div>
        <FooterComp />
        </>
    );
  }
  
  export default Treino;