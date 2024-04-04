//import components
import InputComponent from "../../components/InputComponent/InputComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import CefetImage from "../../components/CefetImage/CefetImage";

//import react stuff
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//css 
import "./../pages.css";

//redux
import { useSelector } from "react-redux";

function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const navigate = useNavigate();
    
    
    const user = useSelector(rootReducer => rootReducer.user);
    let usuarioSistema = user.filter((user) => user.email === email);
    usuarioSistema = usuarioSistema[0];
    function autentica(e){

        if(!usuarioSistema){
            alert("usuario invalido")
        }else{
            if(usuarioSistema.senha === senha){
                alert("autenticado");
                navigate("/personais");
            }
        }
        e.preventDefault();
        
    }

    return(
        <div className="bg-image cefit-background-img"style=
        {{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
            <div className="div-principal container d-flex align-items-center justify-content-center m-auto">
                <div className="w-50 rounded-5 p-4 login-container">
                    <CefetImage/>
                    <form className="formulario-login" onSubmit={autentica}>
                        <InputComponent classes="mb-3 mt-3" id="InputEmail" text="Email" type="text" placeholder="Insira seu email aqui" value={email} onChange={(e)=>[setEmail(e.target.value)]}/>
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
