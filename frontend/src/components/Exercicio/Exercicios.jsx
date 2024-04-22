import "./exercicios.css";
import cardio from "./esteira-icon.png";
import musculacao from "./haltere-icon.png";
import padr from "./default-icon.png";
import lixeira from "./lixeira.png";

function Exercicio({ nome, carga, rep, obs, type}) {
  const Img =() => {
    switch(type){
      case 'musc':
        return <img className="exercise-image" src={musculacao} alt="Musculacao"/>;
      case 'cardio':
        return <img className="exercise-image" src={cardio} alt="cardio"/>;
      default:
        return <img className="exercise-image" src={padr} alt="img padrao"/>;

    }
  }

    return (
      <div className="exercicio-card">
        <div id="img-exercicio">
            
          <Img />
        </div>
        <div className="exercicio-info">
          <h2 className="card-title" id="exercicio-nome">{nome}</h2>
          <p className="card-subtitle" id="exercicio-subtitle">{rep} | {carga}kg </p>
          <p className="card-subtitle" id="exercicio-subtitle">{obs}</p>
        </div>
        <input type="checkbox" className="checkbox" />
        <div className="btn-div">
            <button className="btn-lixeira" >
              <img className="lixeira-image" src={lixeira} alt="lixeira"/>
            </button>
        </div>
      </div>
    );
  }
  
export default Exercicio;