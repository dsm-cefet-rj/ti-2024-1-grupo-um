//components
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Pagamento from "../tela-pagamento/Pagamento";

//css
import "././../tela-personal/Personal.css";
import star from "../../images/star.png";
import user from "../../images/user.png";

//redux
import { useSelector } from "react-redux";


function Personal() {
  const {id} = useParams();

  const personais = useSelector(rootReducer => rootReducer.personais);

  const personalAtual = personais.filter((personal) => personal.id == id)[0];

  // console.log(personalAtual);
  const barra = "100";

  const estrelas = [];
  for (let i = 0; i < personalAtual.rating; i++) {
      estrelas.push(<img key={i} className="imagem-estrela" src={star} alt="imagem estrela"/>);
  }

  return (
    <div className="card-personal">
      <Navbar/>
        <div className="mt-4 m-auto mb-4" id="card-block-personal">
          <a href="page2.html" className="back-button">
            <span className="seta"><i className="fas fa-arrow-left"></i></span>
          </a>
          {/* inicio fulaninho */}
          <div className="card-body text-center m-auto">
            {/* renderizacao condicional se personal tiver imagem */}
            {personalAtual.image ?
              <div>
                <img src={personalAtual.image} alt="avatar"
                  className="rounded-circle img-fluid" style={{ width: "150px" }} />
                <h5 className="my-3">{personalAtual.nome}</h5> 
              </div>
                : 
              <div>
                <img src={user} alt="avatar"
                className="rounded-circle img-fluid" style={{ width: "150px" }} />
                <h5 className="my-3">{personalAtual.nome}</h5> 
              </div>
            }
            <div className="margin-bottom-10px mb-4">
              {estrelas}
            </div>
            <div className="d-flex justify-content-center mb-2">
              <Link data-aos="fade-up" data-aos-delay="200" to="/pagamento" className="btn btn-primary">Solicitar consultoria</Link>
            </div>
          </div>
        </div>
          {/* fim fulaninho */}

          {/* inicio desc fulaninho */}
        <div className="card m-auto mb-4" id="card-block-personal">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Nome completo</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{personalAtual.nome}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Idade</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{personalAtual.idade}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Formação acadêmica</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{personalAtual.formacao}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Cidade</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{personalAtual.cidade}</p>
              </div>
            </div>
          </div>
        </div>
      
        {/* fim desc fulaninho */}
        {/* inicio biografia */}
        <div className="card m-auto mb-4" id="card-block-personal">
          <div className="card-body">
            <p className="mb-4" style={{ fontWeight: "bold" }}>Biografia</p>
            <p className="mb-1" style={{ fontSize: "0.85rem" }}>{personalAtual.biografia}</p>
          </div>
        </div>
        {/* fim biografia */}
        
        {/* inicio stats fulaninho */}
        {/* <div className="m-auto mb-4" id="card-block-personal">
            <div className="card mb-4">
              <div className="card-body">
                <p className="mb-4">Especialidades</p>
                <p className="mb-1" style={{ fontSize: ".77rem" }}>Emagrecimento</p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: `${barra}%` }} aria-valuenow={barra}
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Ganho de massa muscular</p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Forma física</p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Condicionamento físico</p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Esportes</p>
                <div className="progress rounded mb-2" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "66%" }} aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
        </div> */}
        {/* fim desc fulaninho */}
    </div>
  );
}

export default Personal;