//Components
import Navbar from "../../components/Navbar/Navbar";
import PersonalCard from "../../components/PersonalCard/PersonalCard"
import FooterComp from "../../components/Footer/Footer";
import NotLoggedInPersonais from "./NotLoggedPersonais";
//css
import "./Personais.css";

//redux
import { useSelector } from "react-redux";


function Personais(){
    const currentUser =  useSelector(rootReducer => rootReducer.user);
    const Personais = useSelector(rootReducer => rootReducer.personais);
    if (!currentUser.logged) {
        return <NotLoggedInPersonais />;
      }
    return(
        <>
        <Navbar/>
        <div className="container">
            <a href="#" className="back-button">
                <span className="seta"><i className="fas fa-arrow-left"></i></span>
            </a>
            <div className="trainer-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Personais</h1>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Buscar personal"/>
                <button className="btn btn-primary botao-busca"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                </button>
            </div>
            <div className="card-deck" id="card-deck-personal">
                {Personais.map((personal, index)=>
                    <PersonalCard {...personal}/>
                )}
            </div>
        </div>
        <FooterComp />
        </>
    )
}

export default Personais
