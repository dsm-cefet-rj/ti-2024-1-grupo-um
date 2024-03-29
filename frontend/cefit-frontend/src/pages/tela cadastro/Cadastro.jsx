import InputComponent from "../../components/InputComponent/InputComponent";
import CefetImage from "../../components/CefetImage/CefetImage";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Navbar from "../../components/Navbar/Navbar";
import "./../pages.css";

function Cadastro(){
    return(
        <div>
            <Navbar/>
            <div className="bg-image cefit-background-img"style=
                {{backgroundImage: `url('https://media.licdn.com/dms/image/C4D1BAQHmSj8U8aUKGw/company-background_10000/0/1583773755115/grupo_wave_cover?e=2147483647&v=beta&t=xa3nLX_MondQhxOWso-6bVlkLaBGgteKc897UK609TI')`,
                height: "100vh",
                width: "100vw"}}>
                <div className="div-principal container d-flex align-items-center justify-content-center m-auto">
                    <div className="w-50 rounded-5 p-4 login-container">
                        <CefetImage/>
                        <form className="formulario-cadastro">
                            <InputComponent classes="mb-3 mt-3" id="nameImput" text="Nome Completo" type="text" placeholder="Seu nome completo aqui"/>
                            <InputComponent classes="mb-3" id="InputEmail" text="Email" type="email" placeholder="Insira seu email aqui"/>
                            <InputComponent classes="mb-3" id="CPFInput" text="CPF" type="text" placeholder="Seu CPF aqui"/>
                            <InputComponent classes="mb-3" id="age" text="Data de Nascimento" type="date" placeholder=""/>
                            <InputComponent classes="mb-3" id="Password" text="Senha" type="password" placeholder="Insira sua senha aqui"/>
                            <SubmitButton nomeButton ="Cadastrar"/>
                            <div class="cadastro-texto mt-3">
                            Possui conta?<a href="./../tela-login/Login.jsx"> Faça o seu Login!</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;