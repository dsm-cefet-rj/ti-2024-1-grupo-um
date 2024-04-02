import star from "./star.png";
import user from "./user.png";
import "./PersonalCard.css"

function PersonalCard({ nome, descricao, rating } ){
    const estrelas = [];
    for (let i = 0; i < rating; i++) {
        estrelas.push(<img key={i} className="imagem-estrela" src={star} alt="imagem estrela"/>);
    }

    return (
        <a className="card" id="card-personal" href="personal.html">
            <img className="card-img-top m-auto" src={user} alt="Imagem de capa do card"/>
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <p className="card-text">{descricao}</p>
            </div>
            <div className="card-footer">
                <div className="button-rating">
                        {estrelas}
                </div>
            </div>
        </a>
    );
}

export default PersonalCard;