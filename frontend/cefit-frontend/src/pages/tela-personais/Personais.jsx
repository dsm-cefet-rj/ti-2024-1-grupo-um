import Navbar from "../../components/Navbar/Navbar";
import PersonalCard from "../../components/PersonalCard/PersonalCard"
import "./Personais.css";


function Personais(){

    const Personais = [
        {
            nome: "Luiz",
            descricao: "Especialista em finalização",
            rating: 4
        },
        {
            nome: "Arnold",
            descricao: "3x Olympia Winner",
            rating: 1
        },
        {
            nome: "Glauco",
            descricao: "Treinador de alta performance",
            rating: 5
        }
    ]

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
                <button><i className="fas fa-search"></i></button>
            </div>
            <div className="card-deck">
                <PersonalCard {...Personais[0]}/>
                <PersonalCard {...Personais[1]}/>
                <PersonalCard {...Personais[2]}/>
            </div>
        </div>
        </>
    )
}

export default Personais
{/* <a className="card" href="personal.html">
<img className="card-img-top" src="images/user.png" alt="Imagem de capa do card"/>
<div className="card-body">
    <h5 className="card-title">Marquin</h5>
    <p className="card-text">Cara meio bom mas tá precisando melhorar um pouco</p>
</div>
<div className="card-footer">
    <div className="button-rating">
    <img className="imagem-estrela" src="images/star.png" alt="imagem estrela"/>
    <img className="imagem-estrela" src="images/star.png" alt="imagem estrela"/>
    <img className="imagem-estrela" src="images/star.png" alt="imagem estrela"/>
    <img className="imagem-estrela" src="images/star.png" alt="imagem estrela"/>
    </div>
</div>
</a>
<a className="card" href="personal.html">
    <img className="card-img-top" src="images/user.png" alt="Imagem de capa do card"/>
    <div className="card-body">
        <h5 className="card-title">Carlona</h5>
        <p className="card-text">A mais braba, essa daqui pode confiar e ir na fé</p>
    </div>
    <div className="card-footer">
        <div className="button-rating">
        <img className="imagem-estrela" src="images/star.png" alt="imagem estrela"/>
        <img className="imagem-estrela" src="images/star.png" alt="imagem estrela"/>
        <img className="imagem-estrela" src="images/star.png" alt="imagem estrela"/>
        </div>
    </div>
</a> */}