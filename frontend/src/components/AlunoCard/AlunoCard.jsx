// import imagens
import { useDispatch } from "react-redux";
import user  from "../../images/user.png";

// import CSS
import "./AlunoCard.css";
//redux
import { getTreinosByUserID } from "../../redux/trainings/slice";
import { getAnamnese } from "../../redux/anamnese/slice";
// react router dom
import { Link } from "react-router-dom";

function AlunoCard({nomeUser, idUser, token, userImage}){
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(getAnamnese({
            userId: idUser,
            token
        }));
        dispatch(getTreinosByUserID({
            userId: idUser,
            token
        }));
    }

    return (
        <Link className="card" id="card-personal" onClick={handleOnClick} to={`/aluno/${idUser}`} >
            {userImage ? (<img className="card-img-top m-auto mt-2" src={require(`../../../../uploads/${userImage}`)} alt="Imagem de capa do card" />)
                : (<img className="card-img-top m-auto mt-2" src={user} alt="Imagem de capa do card" />)}
            {/* <img className="card-img-top m-auto mt-2" src={user} alt="Imagem de capa do card"/> */}
            {/* <div className="card-body text-center">
                <p className="card-text">{descricao}</p>
            </div> */}
            <div className="card-footer">
                <h5 className="card-title">{nomeUser}</h5>
            </div>
        </Link>
    );
}

export default AlunoCard;