
//Componentes
import InputComponent from "../../components/InputComponent/InputComponent";
import CefetImage from "../../components/CefetImage/CefetImage";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

//react imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//style imports
import logo from "./../../images/logo.png";
import "./CadastroPersonal.css";
import "./../pages.css";

// import { createHash } from "crypto";
import { v4 as idGen } from "uuid";

function Cadastro(){

    const [ nome, setNome ] = useState();
    const [ password, setPassword ] = useState();
    const [ descricao, setDescricao ] = useState();
    const [ biografia, setBiografia ] = useState();

    const cadastro = {
        nome: nome,
        senha: password,
        descricao: descricao,
        biografia: biografia,
        id: idGen()
    }

    const navigate = useNavigate();

    const handlePersonalSingUp=(e)=>{
        e.preventDefault();
    }

    return(
        <div className="bg-image cefit-background-img" style={{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
                <div className="login-container rounded-5 p-3">
                    <div className="cefit-logo verde text-center rounded-5 m-auto">
                        <img src={logo} alt="foto cefit" className="p-1" width="100%" height="100%"/>
                    </div>
                    <form className="formulario-cadastro" >
                        <InputComponent classes="mt-3" id="nameImput" text="Nome Completo" type="text" placeholder="Seu nome completo aqui" value={nome} onChange={(e) => [setNome(e.target.value)]}/>
                        <InputComponent classes="" id="descricao" text="Descricao" type="text" placeholder="Insira sua descricao aqui" value={descricao} onChange={(e) => [setDescricao(e.target.value)]}/>
                        <InputComponent classes="" id="biografia" text="Biografia" type="text" placeholder="Biografia aqui" value={biografia} onChange={(e) => [setBiografia(e.target.value)]}/>
                        <InputComponent classes="" id="Password" text="Senha" type="password" placeholder="Insira sua senha aqui"value={password} onChange={(e) => [setPassword(e.target.value)]}/>
                        {/* {
                            id: 2,
                            nome: "Arnold Schwarzenegger",
                            descricao: "3x Olympia Winner",
                            rating: [],
                            biografia: ""
                        }, */}
                        <div className="d-flex w-100 mt-3">
                            <button type="submit" className="btn verde w-100" onClick={handlePersonalSingUp}>Cadastrar</button>
                        </div>
                        <div className="cadastro-texto mt-3">
                            Possui conta?<Link to="/login">Faça o seu Login!</Link>
                        </div>
                    </form>
                </div>
            </div>
    );
}
export default Cadastro;