//import images
import sup from "./images/img-superiores.jpg";
import inf from "./images/img-inferiores.png";
import cardio from "./images/img-cardio.jpg";
import natacao from "./images/img-natacao.avif";
import crossfit from "./images/img-crossfit.jpg";
import padrao from "./images/img-default.avif";
import "./TreinoCard.css"

//react imports
import { Link } from "react-router-dom";
import { getExercisesByTreinoID } from "../../redux/exercises/slice";
import { useDispatch, useSelector } from "react-redux";


function TreinoCard({title, description, type, id}){
    const dispatch = useDispatch();
    const currentUser = useSelector(rootReducer => rootReducer.user);
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
            {/** passando o id do treino para o card do treino/ */}
            <Link to={`/treino/${id}`} className="card-link" onClick={() => { dispatch(getExercisesByTreinoID({idTreino: id, token: currentUser.logged})) }}>
                    <div className="card card-block" id="card-fit">
                        <h1 className="card-title mt-3 mb-3">{title}</h1>
                        <Image/>
                        <h2 className="card-subtitle mt-3 mb-3">{description}</h2>
                    </div>
            </Link>
            </div>
        </div>
    );
}

export default TreinoCard;
