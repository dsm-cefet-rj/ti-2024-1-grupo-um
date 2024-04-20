import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createAluno } from '../../redux/aluno/slice';
import InputComponent from '../../components/InputComponent/InputComponent';
import Navbar from '../../components/Navbar/Navbar';
import FooterComp from '../../components/Footer/Footer';
// Importe outros componentes necessários

function Pagamento() {
  const currentUser = useSelector(rootReducer => rootReducer.user).user;
  const idPersonal = useParams();
  const navigate = useNavigate();

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
      idUser: currentUser.id,
      idPersonal: idPersonal.id
    }));
    alert("pagamento feito com sucesso!");
    navigate("/");
  };

  return (
    <div>
      <Navbar/>
      <div className="bg-image cefit-background-img" style={{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="login-container rounded-5 p-3">

        </div>

        <div className="login-container rounded-5 p-3">
          
          <form className="adicionar-cartao mb-3" onSubmit={handlePayment}>
            <InputComponent classes="mt-3" id="numeroInput" text="Número do Cartão" type="text" placeholder="XXXX XXXX XXXX XXXX" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <InputComponent classes="mt-3" id="cvcInput" text="CVC" type="text" placeholder="***" value={cvc} onChange={(e) => setCvc(e.target.value)} />
            <InputComponent classes="mt-3" id="expiracaoInput" text="Data de Expiração" type="text" placeholder="MM/AA" value={expiracao} onChange={(e) => setExpiracao(e.target.value)} />
            <InputComponent classes="mt-3" id="nomeInput" text="Nome no Cartão" type="text" placeholder="Insira nome no cartão" value={nome} onChange={(e) => setNome(e.target.value)} />
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mt-2" type='Submit'>Pagar</button>
            </div>
          </form>
        </div>
      </div>

      <FooterComp/>
    </div>
  );
}

export default Pagamento;