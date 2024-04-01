
import InputComponent from "../../components/InputComponent/InputComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import CefetImage from "./../../components/CefetImage/CefetImage"
import { useState } from "react";
import "./../pages.css";
import { Link } from "react-router-dom";

function Login(){
    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();

    const vinicius = {
        nome: "vinicius",
        senha: "123"
    }

    function autentica(e){
        e.preventDefault();
        console.log(vinicius.nome);
        console.log(vinicius.senha);
        if(vinicius.nome === nome && vinicius.senha === senha){
            console.log("autenticado");
        }else{
            console.log("invalido");
        }
    }

    return(
        <div className="bg-image cefit-background-img"style=
        {{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
            <div className="div-principal container d-flex align-items-center justify-content-center m-auto">
                <div className="w-50 rounded-5 p-4 login-container">
                    <CefetImage/>
                    <form className="formulario-login" onSubmit={autentica}>
                        <InputComponent classes="mb-3 mt-3" id="InputEmail" text="Email" type="text" placeholder="Insira seu email aqui" value={nome} onChange={(e)=>[setNome(e.target.value)]}/>
                        <InputComponent classes="mb-3" id="Password" text="Senha" type="password" placeholder="Insira sua senha aqui" value={senha} onChange={(e)=>[setSenha(e.target.value)]}/>
                        <div className="esqueceu-senha mt-3">
                            <a href="./../sign-up-area/cadastro.html"> Esqueci minha senha</a>
                        </div>
                        <SubmitButton nomeButton="Entrar"/>
                        <div className="mt-3">
                            Não possui conta?<Link to="/cadastro"> Cadastre-se agora!</Link> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
