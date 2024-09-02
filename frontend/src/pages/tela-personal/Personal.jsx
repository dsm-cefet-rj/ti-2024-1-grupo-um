import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Pagamento from "../tela-pagamento/Pagamento";
import FooterComp from "../../components/Footer/Footer";
import Login from "../tela-login/Login";
import "././../tela-personal/Personal.css";
import star from "../../images/star.png";
import user from "../../images/user.png";
import { useSelector, useDispatch } from "react-redux";
import { getAnamnese } from "../../redux/anamnese/slice";
import CreateAxiosInstance from "../../utils/api";
import { useEffect, useState } from "react";

function Personal() {
  const {id} = useParams();
  const api = CreateAxiosInstance();
  
  const dispatch = useDispatch();
  const currentUser = useSelector(rootReducer => rootReducer.user);
  const personais = useSelector(rootReducer => rootReducer.personais);
  const personalAtual = personais.filter((personal) => personal._id === id)[0];
  
  //calcular idade
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    return age;
  };

  dispatch(getAnamnese(currentUser.user._id));

  const anamnese = useSelector(rootReducer => rootReducer.anamnese);

  if(!currentUser.logged){
    return <Navigate to={"/login"}/>
  }

  return (
    <div className="card-personal">
      <Navbar/>
        <div className="mt-4 m-auto mb-4" id="card-block-personal">
          <a href="page2.html" className="back-button">
            <span className="seta"><i className="fas fa-arrow-left"></i></span>
          </a>
          <div className="card-body text-center m-auto">
            {personalAtual?.image ?
              (
                <div>
                  <img src={require(`../../../../uploads/${personalAtual?.image}`)} alt="avatar"
                    className="rounded-circle img-fluid" style={{ width: "150px" }} />
                  <h5 className="my-3">{personalAtual?.nome}</h5> 
                </div>
              ):(
                <div>
                  <img src={user} alt="caso2"
                  className="rounded-circle img-fluid" style={{ width: "150px" }} />
                  <h5 className="my-3">{personalAtual?.nome}</h5> 
                </div>
               )
            } 
            <div className="d-flex justify-content-center mb-2">
              {anamnese.preenchida?(
                  <Link data-aos="fade-up" data-aos-delay="200" to={`/pagamento/${id}`} className="btn btn-primary">Solicitar consultoria</Link>
                ):(
                  <Link data-aos="fade-up" data-aos-delay="200" to={`/anamnese`} className="btn btn-primary">Solicitar consultoria</Link>
                )
              }
            </div>
          </div>
        </div>

        <div className="card m-auto mb-4" id="card-block-personal">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Nome completo</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{personalAtual?.nome}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Idade</p>
              </div>
              <div className="col-sm-9">
                {/* Exibe a idade calculada */}
                <p className="text-muted mb-0">{calculateAge(personalAtual?.birth)}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Formação acadêmica</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{personalAtual?.formacao}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Cidade</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{personalAtual?.cidade}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card m-auto mb-4" id="card-block-personal">
          <div className="card-body">
            <p className="mb-4" style={{ fontWeight: "bold" }}>Biografia</p>
            <p className="mb-1" style={{ fontSize: "0.85rem" }}>{personalAtual?.biografia}</p>
          </div>
        </div>
        <FooterComp/>
    </div>
  );
}

export default Personal;
