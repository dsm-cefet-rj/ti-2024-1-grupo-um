import Navbar from "../../components/Navbar/Navbar";
import TreinoCard from "../../components/TreinosCard/TreinosCard";
import FooterComp from "../../components/Footer/Footer";

import "./AreaFIT.css";
import { Link } from "react-router-dom";

function AreaFIT() {
  const Treinos = [
    {
      title: "Treino A",
      description: "Pernas",
      type: "inferiores"
    },
    {
      title: "Treino B",
      description: "Costas",
      type: "superiores"
    },
    {
      title: "Treino C",
      description: "Esteira",
      type: "cardio"
    },
    {
        title: "Treino D",
        description: "Natação",
        type: "natacao"
      },
      // {
      //   title: "Treino E",
      //   description: "Crossfit",
      //   type: "crossfit"
      // }
  ];

  return (
    <>
      <Navbar />
      <div className="fit-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Área FIT</h1>
        <p className="lead">Monte seus treinos ideais ou visualize seus treinos montados pelo personal</p>
      </div>
    <div className="container mt-2" id="container-card">
        <div className="row justify-content-center"id="row-card">
          {Treinos.map((treino, index) => (
            <div key={index} className="col mb-3">
              <TreinoCard
                title={treino.title}
                description={treino.description}
                type={treino.type}
              />
            </div>
          ))} 
        </div>
    </div>

    <Link to={"/add-treinos"} className="monte-button">Monte seu treino</Link>
    <div className="espacamento">

      </div>
    <FooterComp />
    </>
  );
}

export default AreaFIT;
