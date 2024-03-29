
import InputComponent from "../../components/InputComponent/InputComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import CefetImage from "./../../components/CefetImage/CefetImage"
import "./../pages.css";

function Login(){
    return(
        <div className="bg-image cefit-background-img"style=
        {{backgroundImage: `url('https://media.licdn.com/dms/image/C4D1BAQHmSj8U8aUKGw/company-background_10000/0/1583773755115/grupo_wave_cover?e=2147483647&v=beta&t=xa3nLX_MondQhxOWso-6bVlkLaBGgteKc897UK609TI')`,
        height: "100vh",
        width: "100vw"}}>
            <div className="div-principal container d-flex align-items-center justify-content-center m-auto">
                <div className="w-50 rounded-5 p-4 login-container">
                    <CefetImage/>
                    <form className="formulario-login">
                        <InputComponent classes="mb-3 mt-3" id="InputEmail" text="Email" type="email" placeholder="Insira seu email aqui"/>
                        <InputComponent classes="mb-3" id="Password" text="Senha" type="password" placeholder="Insira sua senha aqui"/>
                        <div className="esqueceu-senha mt-3">
                            <a href="./../sign-up-area/cadastro.html"> Esqueci minha senha</a>
                        </div>
                        <SubmitButton nomeButton="Entrar"/>
                        <div className="mt-3">
                            Não possui conta?<a href="./../tela-cadastro/Cadastro.jsx"> Cadastre-se agora</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
