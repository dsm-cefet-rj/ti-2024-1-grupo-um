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
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/user/slice";

function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let user = useSelector(rootReducer => rootReducer.user);
    
    
    
    function Autentica(e){
        e.preventDefault();
        dispatch(loginUser({email, senha})); 
        user = user.filter((user) => user.email === email)[0];
        console.log(user);
        if(user == undefined){
            alert("usuario invalido");
        }else{
            if(user.senha === senha){
                alert("autenticado");
                navigate("/personais");
            }else{
                alert("usuario invalido");
            }
        }
        
        
    }

    return(
        <div className="bg-image cefit-background-img"style=
        {{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
            <div className="div-principal container d-flex align-items-center justify-content-center m-auto">
                <div className="w-50 rounded-5 p-4 login-container">
                    <CefetImage/>
                    <form className="formulario-login" onSubmit={Autentica}>
                        <InputComponent classes="mb-3 mt-3" id="InputEmail" text="Email" type="text" placeholder="Insira seu email aqui" value={email} onChange={(e)=>[setEmail(e.target.value)]}/>
                        <InputComponent classes="mb-3" id="Password" text="Senha" type="password" placeholder="Insira sua senha aqui" value={senha} onChange={(e)=>[setSenha(e.target.value)]}/>
                        <div className="esqueceu-senha mt-3">
                            <a href="./../sign-up-area/cadastro.html"> Esqueci minha senha</a>
                        </div>
                        <div className="d-flex w-100 mt-3">
                            <button type="submit" className="btn btn-primary w-100">Entrar</button>
                        </div>
                        {/* <SubmitButton nomeButton="Entrar"/> */}
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
