//Components
import Navbar from "../../components/Navbar/Navbar";
import FooterComp from "../../components/Footer/Footer";
import AlunoCard from "../../components/AlunoCard/AlunoCard";

//css
import "./MeusAlunos.css";

//redux
import { useDispatch, useSelector } from "react-redux";
//react
import { Navigate } from "react-router-dom";
import { clearAnamnese } from "../../redux/anamnese/slice";
import { clearExercises } from "../../redux/exercises/slice";
import { clearForms } from "../../redux/form-treino/slice";
import { clearTrainings } from "../../redux/trainings/slice";


function MeusAlunos(){
    const dispatch = useDispatch();
    //clear functions
    dispatch(clearAnamnese());
    dispatch(clearExercises());
    dispatch(clearForms());
    dispatch(clearTrainings());

    const currentPersonal =  useSelector(rootReducer => rootReducer.user);
    const Alunos = useSelector(rootReducer => rootReducer.aluno);

    if (!currentPersonal.loggedPersonal) {
        return <Navigate to="/login" />;
    }

    return(
        <div style={{height:'100vh'}}>
            <Navbar/>
            <div className="container">
                <a href="#" className="back-button">
                    <span className="seta"><i className="fas fa-arrow-left"></i></span>
                </a>
                <div className="trainer-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Meus Alunos</h1>
                </div>
                <div className="card-deck" id="card-deck-personal">
                    {Alunos.map((aluno)=>
                        <AlunoCard 
                            nomeUser={aluno.nomeUser}
                            idUser={aluno.idUser}
                            token={currentPersonal.loggedPersonal}
                            userImage = {aluno.userImage}
                        />
                    )}
                </div>
            </div>
            <FooterComp />
        </div>
        
    )
}

export default MeusAlunos;