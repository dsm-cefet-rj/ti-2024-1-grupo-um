import InputComponent from "../../components/InputComponent/InputComponent";
import CefetImage from "../../components/CefetImage/CefetImage";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useState } from "react";
import "./../pages.css";
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
        <div className="bg-image cefit-background-img" style={{backgroundImage: `url('https://img.goodfon.com/original/1920x1080/e/97/shtanga-skamya-gym-fitness.jpg')`}}>
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
// function hashCrypt(senha){
//     return createHash('sha256').update(senha).digest("hex");
// }

// class Usuario{
//     constructor(nome, senha){
//         this.nome = nome;
//         this.hash = hashCrypt(senha);
//     }
//     autentica(nome, senha){
//         if(nome === this.nome && this.hash === hashCrypt(senha)){
//             console.log("usuario autenticado com sucesso");
//             return true;
//         }
//         console.log("nome ou senha errados");
//         return false;
//     }
// }

// const usuario = new Usuario("caio", "haha");

// console.log(usuario.autentica("Caio","haha"));