import sup from "./images/img-superiores.jpg";
import inf from "./images/img-inferiores.png";
import cardio from "./images/img-cardio.jpg";
import natacao from "./images/img-natacao.avif";
import crossfit from "./images/img-crossfit.jpg";
import padrao from "./images/img-default.avif";
import "./TreinoCard.css"

function TreinoCard({title, description, type}){
    const Image = () => {
        switch(type){
            case 'superiores':
                return <img className="treino-image" src={sup} alt="Treino de superiores"/>;
            case 'inferiores':
                return <img className="treino-image" src={inf} alt="Treino de inferiores"/>;
            case 'cardio':
                return <img className="treino-image" src={cardio} alt="Cardio"/>;
            case 'natacao':
                return <img className="treino-image" src={natacao} alt="Natação"/>;
            case 'crossfit':
                return <img className="treino-image" src={crossfit} alt="Crossfit"/>;
            default:
                return <img className="treino-image" src={padrao} alt="Outro"/>;
        }
    }
    return (
        <div className="row"> 
            <div className="col md-4"> 
                <a href="treino.html" className="card-link">
                    <div className="card card-block" id="card-fit">
                        <h1 className="card-title mt-3 mb-3">{title}</h1>
                        <Image/>
                        <h2 className="card-subtitle mt-3 mb-3">{description}</h2>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default TreinoCard;
