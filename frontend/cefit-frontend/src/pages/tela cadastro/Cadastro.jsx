import InputComponent from "../../components/InputComponent/InputComponent";
import CefetImage from "../../components/CefetImage/CefetImage";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Navbar from "../../components/Navbar/Navbar";
import "./../pages.css";

function Cadastro(){
    return(
            <div class="bg-image cefit-background-img" style={{backgroundImage: `url('https://img.goodfon.com/original/1920x1080/e/97/shtanga-skamya-gym-fitness.jpg')`}}>
                <div class="login-container rounded-5 p-3">
                    <CefetImage/>
                    <form class="formulario-cadastro">
                        <InputComponent classes="mt-3" id="nameImput" text="Nome Completo" type="text" placeholder="Seu nome completo aqui"/>
                        <InputComponent classes="" id="InputEmail" text="Email" type="email" placeholder="Insira seu email aqui"/>
                        <InputComponent classes="" id="CPFInput" text="CPF" type="text" placeholder="Seu CPF aqui"/>
                        <InputComponent classes="" id="age" text="Data de Nascimento" type="date" placeholder=""/>
                        <InputComponent classes="" id="Password" text="Senha" type="password" placeholder="Insira sua senha aqui"/>
                        <SubmitButton nomeButton="Cadastrar"/>
                        <div class="cadastro-texto mt-3">
                            Possui conta?<a href="./../tela-login/Login.jsx"> Faça o seu Login!</a>
                        </div>
                    </form>
                </div>
            </div>
    );
}
{/* <div className="bg-image cefit-background-img"style=
                {{backgroundImage: `url('https://img.goodfon.com/original/1920x1080/e/97/shtanga-skamya-gym-fitness.jpg')`,
                height: "100%",
                width: "100%"}}>
                <div className="div-principal d-flex align-items-center justify-content-center mb-4   ">
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
            </div> */}
export default Cadastro;