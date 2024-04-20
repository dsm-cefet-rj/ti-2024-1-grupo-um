import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/user/slice';
import { v4 as idGen } from 'uuid';
import InputComponent from '../../components/InputComponent/InputComponent';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
// Importe outros componentes necessários

function Pagamento() {
  const [numero, setNumero] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiracao, setExpiracao] = useState('');
  const [nome, setNome] = useState('');

  const pagamento = { 
    numero: numero,
    cvc: cvc,
    expiracao: expiracao,
    nome: nome,
    id: idGen()
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(addUser({ ...pagamento}));
    navigate('/login');
  };

  return (
    <div className="bg-image cefit-background-img" style={{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
      <div className="login-container rounded-5 p-3">
        <form className="adicionar-cartao" onSubmit={handleSignUp}>
          <InputComponent classes="mt-3" id="numeroInput" text="Número do Cartão" type="text" placeholder="XXXX XXXX XXXX XXXX" value={numero} onChange={(e) => setNumero(e.target.value)} />
          <InputComponent classes="" id="cvcInput" text="CVC" type="text" placeholder="***" value={cvc} onChange={(e) => setCvc(e.target.value)} />
          <InputComponent classes="" id="expiracaoInput" text="Data de Expiração" type="text" placeholder="MM/AA" value={expiracao} onChange={(e) => setExpiracao(e.target.value)} />
          <InputComponent classes="" id="nomeInput" text="Nome no Cartão" type="text" placeholder="Insira nome no cartão" value={nome} onChange={(e) => setNome(e.target.value)} />
          <SubmitButton nomeButton="Cadastrar cartão" />
        </form>
      </div>
    </div>
  );
}

export default Pagamento;