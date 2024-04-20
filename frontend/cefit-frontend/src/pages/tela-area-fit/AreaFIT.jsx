//componentes
import Navbar from "../../components/Navbar/Navbar";
import TreinoCard from "../../components/TreinosCard/TreinosCard";
import FooterComp from "../../components/Footer/Footer";
import NotLoggedInAreaFIT from "./NotLoggedAF";
//css
import "./AreaFIT.css";
//react
import { Link } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { addForms } from "../../redux/form-treino/slice";
//id gen
import { v4 as idGen } from "uuid";
//axios
import { getTreinos } from "../../redux/trainings/slice";
import axios from "axios";


async function AreaFIT() {
  const currentUser =  useSelector(rootReducer => rootReducer.user);
  const dispatch = useDispatch();
  // const treinos = getTreinos();
  
  // Filtrar os treinos pelo idUser
  if (!currentUser.logged) {
    return <NotLoggedInAreaFIT />;
  }
  const treinos = await axios.get("http://localhost:3004/treino");
  const treinosDoUsuario = treinos.data.filter(treino => treino.idUser == currentUser.user.id);
  console.log(treinosDoUsuario);
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
     {
       title: "Treino E",
       description: "Crossfit",
       type: "crossfit"
       }
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
        {currentUser ? (
            Treinos.map((treino, index) => (
              <div key={index} className="col mb-3">
                <TreinoCard
                  title={treino.title}
                  description={treino.description}
                  type={treino.type}
                  //id = {treino.id}
                />
              </div>)
              )):(
                Treinos.map((treino, index) => (
                  <div key={index} className="col mb-3">
                    <TreinoCard
                      title={treino.title}
                      description={treino.description}
                      type={treino.type}
                      
                    />
                  </div>)
                  )
                )  
          }
        </div>
    </div>

    <Link to={"/add-treinos"} >
      <button className="monte-button" onClick={() => {dispatch(addForms({idUser: currentUser.user.id, id: idGen(), infos: {}}))}}>Monte seu treino</button>
    </Link>
    <div className="espacamento">

      </div>
    <FooterComp />
    </>
  );
}

export default AreaFIT;
