import "./exercicios.css";

function Exercicio({ nome, carga, obs}) {
    return (
      <div className="exercicio-card">
        <div className="exercicio-info">
          <h2 className="card-title mt-3 mb-3" id="exercicio-nome">{nome}</h2>
          <p className="card-subtitle mt-3 mb-3" id="exercicio-carga">Carga: {carga}</p>
          <p className="card-subtitle mt-3 mb-3" id="exercicio-obs">Observação: {obs}</p>
        </div>
      </div>
    );
  }
  
export default Exercicio;