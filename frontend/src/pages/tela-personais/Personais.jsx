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
