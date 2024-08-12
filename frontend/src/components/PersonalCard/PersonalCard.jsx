// import imagens
import star from "../../images/star.png";
import user from "../../images/user.png";

// import CSS
import "./PersonalCard.css";

// react router dom
import { Link } from "react-router-dom";

function PersonalCard({ nome, descricao, id, image }) {
    return (
        <Link className="card" id="card-personal" to={`/personal/${id}`}>
            {image ? (<img className="card-img-top m-auto mt-2" src={require(`../../images/PersonalImages/${image}.png`)} alt="Imagem de capa do card" />)
                : (<img className="card-img-top m-auto mt-2" src={user} alt="Imagem de capa do card" />)}
            <div className="card-body text-center">
                <h5 className="card-title">{nome}</h5>
                <p className="card-text">{descricao}</p>
            </div>
            <div className="card-footer">
            </div>
        </Link>
    );
}

export default PersonalCard;