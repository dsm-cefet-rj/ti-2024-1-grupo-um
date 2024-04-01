import InputComponent from "../../components/InputComponent/InputComponent";
import CefetImage from "../../components/CefetImage/CefetImage";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
// import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import "./../pages.css";
import { Link } from "react-router-dom";
// import { createHash } from "crypto";

function Cadastro(){

    const [ nome, setNome ] = useState();
    const [ password, setPassword ] = useState();
    const [ email, setEmail ] = useState();
    const [ birth, setBirth ] = useState();
    const [ CPF, setCPF ] = useState();



    const handleSingUp=(e)=>{
        e.preventDefault();
        if(!password | !nome | !email | !CPF | !birth){
            console.log("alerta");
        }
        console.log(nome);
        console.log(password);
        console.log(email);
        console.log(CPF);
        console.log(birth);
        alert("Usuario cadastrado com sucesso!");
    }

    return(
        <div className="bg-image cefit-background-img" style={{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
            {/* <Navbar/> */}
                <div className="login-container rounded-5 p-3">
                    <CefetImage/>
                    <form className="formulario-cadastro" onSubmit={handleSingUp}>
                        <InputComponent classes="mt-3" id="nameImput" text="Nome Completo" type="text" placeholder="Seu nome completo aqui" value={nome} onChange={(e) => [setNome(e.target.value)]}/>
                        <InputComponent classes="" id="InputEmail" text="Email" type="email" placeholder="Insira seu email aqui" value={email} onChange={(e) => [setEmail(e.target.value)]}/>
                        <InputComponent classes="" id="CPFInput" text="CPF" type="text" placeholder="Seu CPF aqui" value={CPF} onChange={(e) => [setCPF(e.target.value)]}/>
                        <InputComponent classes="" id="age" text="Data de Nascimento" type="date" placeholder="" value={birth} onChange={(e) => [setBirth(e.target.value)]}/>
                        <InputComponent classes="" id="Password" text="Senha" type="password" placeholder="Insira sua senha aqui"value={password} onChange={(e) => [setPassword(e.target.value)]}/>
                        <SubmitButton nomeButton="Cadastrar" />
                        <div className="cadastro-texto mt-3">
                            Possui conta?<Link to="/">Faça o seu Login!</Link>
                        </div>
                    </form>
                </div>
            </div>
    );
}
export default Cadastro;