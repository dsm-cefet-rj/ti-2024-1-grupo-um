
//Componentes
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";
import FooterComp from "../../components/Footer/Footer";
//react imports
import { Link, useNavigate } from "react-router-dom";
//style imports
import logo from "./../../images/logo.png";
import "./LoginPersonal.css";
import "./../pages.css";
//import yup and formik
import * as Yup from "yup";
import { Formik, Form } from "formik";
//redux
import { useDispatch } from "react-redux";
import { createPersonal } from "../../redux/personal/slice";

// import { createHash } from "crypto";
import { v4 as idGen } from "uuid";
import axios from "axios";

function LoginPersonal(){

    const validationSchema = Yup.object({
        email: Yup.string().email().required("O email é obrigatório."),
        senha: Yup.string().required("Senha é obrigatória.")
    });

    const initialValues = {
        email: "",
        senha:"",
    };



    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function Autentica (info){
        const response = await axios.get("http://localhost:3004/personais");
        const personais = response.data;

        for (let personal of personais){
            if(personal.email === info.email && personal.senha === info.senha){
                //dispatch(addLoggedPersonal(personal));
                //dispatch(getAlunosByPersonalId(personal.id));
                
                alert("autenticado");
                //navigate("/meusAlunos");
                return;
            }
        }
        alert("usuario invalido");
    }

    return(
        <div>
            <div className="bg-image cefit-background-img" style={{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
                    <div className="login-container rounded-5 p-3">
                        <div className="cefit-logo verde text-center rounded-5 m-auto">
                            <img src={logo} alt="foto cefit" className="p-1" width="100%" height="100%"/>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                Autentica(values);
                            }}>
                                {({ isValid }) => (
                            <Form className="formulario-cadastro justify-content-center">
                                <InputComponentYup classes="" id="InputEmail" name="email" text="Email" type="email" placeholder="Insira seu email aqui" />
                                <InputComponentYup classes="" id="Password" name="senha" text="Senha" type="password" placeholder="Insira sua senha aqui"/>
                                <div className="d-flex w-100 mt-3">
                                    <button type="submit" className="btn verde w-100" disabled={!isValid}>Login</button>
                                </div>
                                <div className="mt-3 text-center">
                                    <Link to="/login">Login</Link> 
                                </div>
                                <div className="mt-3 text-center">
                                    Não possui conta?<Link to="/cadastroPersonal"> Cadastre-se agora!</Link> 
                                </div>
                            </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            <FooterComp/>
        </div>
    );
}
export default LoginPersonal;