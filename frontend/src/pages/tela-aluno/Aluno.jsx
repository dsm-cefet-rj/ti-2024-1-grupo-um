//components
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import FooterComp from "../../components/Footer/Footer";

//css
import "./Aluno.css";
import user from "../../images/user.png";
import lixeira from "../../components/Exercicio/lixeira.png";
//redux
import { useSelector, useDispatch } from "react-redux";
import { clearExercises, getExercisesByTreinoID } from "../../redux/exercises/slice";
import { addForms } from "../../redux/form-treino/slice";
import { v4 as idGen } from "uuid";
import { deleteTraining, deleteTreinoByID } from "../../redux/trainings/slice";
import { logoutUser } from "../../redux/user/slice";
function Aluno() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(clearExercises());
    //pega o personal
    const currentUser = useSelector(rootReducer => rootReducer.user);
    
    //pega os treinos relacionados ao aluno
    const treinosUser = useSelector(rootReducer => rootReducer.trainings);

    //pega a anamnese relacionada ao aluno
    const anamnese = useSelector(rootReducer => rootReducer.anamnese);

    const alunos = useSelector(rootReducer => rootReducer.aluno);
    if (!currentUser.loggedPersonal) {
        return <Navigate to="/login" />;
    }
    const usuario = alunos.filter((aluno) => aluno.idUser === id)[0];

    const handleDeleteTreino = (treinoId) => {
        dispatch(deleteTreinoByID({
            idTreino: treinoId,
            token: currentUser.loggedPersonal
        }))
        dispatch(deleteTraining(treinoId))
    }

    

    return (
        <div className="card-personal">
            <Navbar />
            <div className="mt-4 m-auto mb-4" id="card-block-personal">
                <a href="page2.html" className="back-button">
                    <span className="seta"><i className="fas fa-arrow-left"></i></span>
                </a>
                <div className="card-body text-center m-auto">
                    <div>
                    {usuario.userImage ? (<img className="rounded-circle img-fluid" style={{ width: "150px" }} src={require(`../../../../uploads/${usuario.userImage}`)} alt="Imagem de capa do card" />)
                : (<img className="rounded-circle img-fluid" src={user} alt="Imagem de capa do card" />)}
                        {/* <img src={user} alt="foto de perfil usuario"
                            className="rounded-circle img-fluid" style={{ width: "150px" }} /> */}
                        <h4 className="my-3" id="nome-aluno">{usuario?.nomeUser}</h4>
                        
                    </div>
                    <div className="card m-auto" id="card-anamnese">
                        <h2 className="display-4" id="titulo-anamnese">Anamnese</h2>
                        <div className="line" id="linha-div">

                        </div>
                        <div className="card-body">
                            <p className="mb-1" id="titulo-info-aluno" style={{ fontWeight: "bold" }}>Peso</p>
                            <p className="mb-1" id="info-aluno" style={{ fontSize: "0.85rem" }}>{anamnese?.weight} Kg</p>
                        </div>
                        <div className="card-body">
                            <p className="mb-1" id="titulo-info-aluno" style={{ fontWeight: "bold" }}>Motivação</p>
                            <p className="mb-1" id="info-aluno" style={{ fontSize: "0.85rem" }}>{anamnese?.motivation}</p>
                        </div>
                        <div className="card-body">
                            <p className="mb-1" id="titulo-info-aluno" style={{ fontWeight: "bold" }}>Frequência de Atividade Física</p>
                            <p className="mb-1" id="info-aluno" style={{ fontSize: "0.85rem" }}>{anamnese?.activityFreq}</p>
                        </div>
                        <div className="card-body">
                            <p className="mb-1" id="titulo-info-aluno" style={{ fontWeight: "bold" }}>Data do último exame</p>
                            <p className="mb-1" id="info-aluno" style={{ fontSize: "0.85rem" }}>{anamnese?.date}</p>
                        </div>
                        <div className="card-body">
                            <p className="mb-1" id="titulo-info-aluno" style={{ fontWeight: "bold" }}>Faz Dieta?</p>
                            <p className="mb-1" id="info-aluno" style={{ fontSize: "0.85rem" }}>{anamnese?.diet}</p>
                        </div>
                        <div className="card-body">
                            <p className="mb-1" id="titulo-info-aluno" style={{ fontWeight: "bold" }}>Observações</p>
                            <p className="mb-1" id="info-aluno" style={{ fontSize: "0.85rem" }}>{anamnese?.observacoes}</p>
                        </div>
                    </div>

                </div>
            </div>

            {treinosUser.map((treino) => 
            <>
                <Link onClick={() => {dispatch(getExercisesByTreinoID({idTreino: treino._id, token: currentUser.loggedPersonal}))}} to={`/EditTreinoAluno/${treino._id}`}>
                    <div className="exercicio-card" id="treino-aluno">
                        <div className="exercicio-info">
                            <span className="card-title" id="exercicio-nome">{treino.title}</span>
                        </div>
                        <div className="btn-div">
                            <button className="btn-lixeira" onClick={() => {handleDeleteTreino(treino._id)}}>
                                <img className="lixeira-image" src={lixeira} alt="lixeira" />
                            </button>
                        </div>
                    </div>
                </Link>
            </>
            )}

            <div className="d-flex justify-content-center mb-2">
                <Link data-aos="fade-up" data-aos-delay="200" to={`/CreateTreinoAluno`} onClick={() => {dispatch(addForms({userId: id, infos: {}}))}} className="btn btn-success w-50">Preescrever Treino</Link>
            </div>
            <FooterComp />
        </div>
    );
}

export default Aluno;