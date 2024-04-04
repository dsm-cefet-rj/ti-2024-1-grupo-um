import "./exercicios.css";

function Exercicio({ nome, carga, obs}) {
    return (
      <div className="exercicio-card">
        <div className="exercicio-info">
          <h2 className="exercicio-nome">{nome}</h2>
          <p className="exercicio-carga">Carga: {carga}</p>
          <p className="exercicio-obs">Observação: {obs}</p>
        </div>
      </div>
    );
  }
  
export default Exercicio;