//Components
import Navbar from "../../components/Navbar/Navbar";
import PersonalCard from "../../components/PersonalCard/PersonalCard"
import FooterComp from "../../components/Footer/Footer";

//css
import "./Personais.css";

//redux
import { useSelector } from "react-redux";


function Personais(){
    const Personais = useSelector(rootReducer => rootReducer.personais);
    
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
// const Personais = [
    //     {
    //         nome: "Luiz",
    //         descricao: "Especialista em finalização",
    //         rating: 4
    //     },
    //     {
    //         nome: "Arnold Schwarzenegger",
    //         descricao: "3x Olympia Winner",
    //         rating: 1
    //     },
    //     {
    //         nome: "Glauco Amorim",
    //         descricao: "Treinador de alta performance",
    //         rating: 5
    //     },
    //     {
    //         nome:"Vinicius",
    //         descricao:"Treinador",
    //         rating: 6
    //     },
    //     {
    //         nome:"Chico",
    //         descricao:"Aquariano Nato",
    //         rating: 6
    //     },
    //     {
    //         nome:"Caio",
    //         descricao:"Treinador de crossfit",
    //         rating: 3
    //     },
    //     {
    //         nome:"Diogo Mendonça",
    //         descricao:"Treinador de Boxe",
    //         rating: 3
    //     },
    //     {
    //         nome:"Kele Bellorze",
    //         descricao:"Treinadora de Artes Marciais",
    //         rating: 3
    //     },
    // ]
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