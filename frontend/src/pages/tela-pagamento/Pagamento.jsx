//components
import InputComponent from '../../components/InputComponent/InputComponent';
import Navbar from '../../components/Navbar/Navbar';
import FooterComp from '../../components/Footer/Footer';
//react
import React, { useState } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//redux
import { createAluno } from '../../redux/aluno/slice';
//images
import User from '../../images/user.png';
//css
import './Pagamento.css';

function Pagamento() {
  const currentUser = useSelector(rootReducer => rootReducer.user);
  const { id } = useParams();
  const navigate = useNavigate();
  const personais = useSelector(rootReducer => rootReducer.personais);
  const personalAtual = personais.filter((personal) => personal._id === id)[0];
  
  const [numero, setNumero] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiracao, setExpiracao] = useState('');
  const [nome, setNome] = useState('');
  
  const pagamento = { 
    numero: numero,
    cvc: cvc,
    expiracao: expiracao,
    nome: nome,
  };
  
  const dispatch = useDispatch();
  
  const handlePayment = (e) => {
    e.preventDefault();
    dispatch(createAluno({
      userId: currentUser.user.id,
      userName: currentUser.user.nome,
      idPersonal: id
    }));
    alert("pagamento feito com sucesso!");
    navigate("/");
  };
  
  if(!currentUser.logged){
    return <Navigate to={"/login"}/>
  }
  return (
    <div>
      <Navbar/>
      <div className="bg-image cefit-background-img" style={{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="pag-container">
        {personalAtual.image ?
              (
                <div className="infos d-flex flex-column justify-content-center">
                  <img src={require(`../../images/PersonalImages/${personalAtual.image}.png`)} alt="avatar"
                    className="img-personal" style={{ width: "100px" }} />
                  <h5 className="my-3 d-flex justify-content-center align-items-center">{personalAtual.nome}</h5> 
                  <h1 className="preco">R${personalAtual.preco}</h1>
                </div>
              ):(
                <div className="infos d-flex flex-column justify-content-center">
                  <img src={User} alt="caso2"
                  className="img-personal" style={{ width: "100px" }} />
                  <h5 className="my-3 d-flex justify-content-center align-items-center">{personalAtual.nome}</h5> 
                  <h1 className="preco">R${personalAtual.preco}</h1>
                </div>
              )
            }
          <form className="adicionar-cartao mb-3" onSubmit={handlePayment}>
            <InputComponent classes="mt-2" id="numeroInput" text={<b>Número do Cartão</b>} type="text" placeholder="XXXX XXXX XXXX XXXX" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <InputComponent classes="mt-2" id="cvcInput" text={<b>CVC</b>} type="text" placeholder="***" value={cvc} onChange={(e) => setCvc(e.target.value)} />
            <InputComponent classes="mt-2" id="expiracaoInput" text={<b>Data de Expiração</b>} type="text" placeholder="MM/AA" value={expiracao} onChange={(e) => setExpiracao(e.target.value)} />
            <InputComponent classes="mt-2" id="nomeInput" text={<b>Nome no Cartão</b>} type="text" placeholder="Insira nome no cartão" value={nome} onChange={(e) => setNome(e.target.value)} />
            <div className="d-flex justify-content-center">
            < button className="btn-submit mt-3">Confirmar pagamento</button>
          </div>
          </form>
          
        </div>

      </div>

      <FooterComp/>
    </div>
  );
}

export default Pagamento;