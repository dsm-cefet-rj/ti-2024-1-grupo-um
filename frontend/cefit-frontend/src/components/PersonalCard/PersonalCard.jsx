// import imagens
import star  from "../../images/star.png";
import user  from "../../images/user.png";

// import CSS
import "./PersonalCard.css";

// react router dom
import { Link } from "react-router-dom";

function PersonalCard({ nome, descricao, rating }){
    const estrelas = [];
    for (let i = 0; i < rating; i++) {
        estrelas.push(<img key={i} className="imagem-estrela" src={star} alt="imagem estrela"/>);
    }

    return (
        <Link className="card" id="card-personal" to={"/"}>
            <img className="card-img-top m-auto" src={user} alt="Imagem de capa do card"/>
            <div className="card-body text-center">
                <h5 className="card-title">{nome}</h5>
                <p className="card-text">{descricao}</p>
            </div>
            <div className="card-footer">
                <div className="button-rating">
                        {estrelas}
                </div>
            </div>
        </Link>
    );
}

export default PersonalCard;