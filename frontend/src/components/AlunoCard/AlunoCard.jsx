// import imagens
import star  from "../../images/star.png";
import user  from "../../images/user.png";

// import CSS
import "./AlunoCard.css";

// react router dom
import { Link } from "react-router-dom";

function AlunoCard({ nome, id, image = user }){
    return (
        <Link className="card" id="card-personal" to={`/aluno/${id}`}>
            <img className="card-img-top m-auto mt-2" src={user} alt="Imagem de capa do card"/>
            {/* <div className="card-body text-center">
                <p className="card-text">{descricao}</p>
            </div> */}
            <div className="card-footer">
                <h5 className="card-title">{nome}</h5>
            </div>
        </Link>
    );
}

export default AlunoCard;