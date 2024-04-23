//import components
import InputComponent from "../../components/InputComponent/InputComponent";
import CefetImage from "../../components/CefetImage/CefetImage";
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";
import SelectComponentYup from "../../components/InputComponent/SelectComponentYup";

//import react stuff
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTreinosByUserID } from "../../redux/trainings/slice";

//import axios
import axios from "axios";

//css 
import "./../pages.css";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addLoggedUser, logoutUser } from "../../redux/user/slice";
import { clearPersonals, getPersonais } from "../../redux/personal/slice";
import { clearAnamnese, getAnamnese } from "../../redux/anamnese/slice";
import { clearExercises } from "../../redux/exercises/slice";

//yup
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormList from "../../components/FormList/formList";

function Login(){
    // const [email, setEmail] = useState();
    // const [senha, setSenha] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //dispatchs para deslogar totalmente em caso de redirecionamento
    dispatch(logoutUser());
    dispatch(clearExercises());
    dispatch(clearPersonals());
    dispatch(clearAnamnese());

    async function Autentica (info){
        const response = await axios.get("http://localhost:3004/users");
        const users = response.data;

        for (let user of users){
            if(user.email === info.email && user.senha === info.senha){
                dispatch(addLoggedUser(user));
                dispatch(getTreinosByUserID(user.id))
                dispatch(getPersonais());
                dispatch(getAnamnese(user.id));
                alert("autenticado");
                navigate("/personais");
                return;
            }
        }
        alert("usuario invalido");
    }

    const initialValues = {
        email: "",
        senha: "",
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required("Insira um email"),
        senha: Yup.string().required("Insira a senha")
    })

    return(
        <div className="bg-image cefit-background-img"style=
        {{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
            <div className="div-principal container d-flex align-items-center justify-content-center m-auto">
                <div className="w-50 rounded-5 p-4 login-container">
                    <CefetImage/>
                    {/*                                         
                    <form className="formulario-login" onSubmit={Autentica}>
                        <InputComponent classes="mb-3 mt-3" id="InputEmail" text={<b>Email</b>} type="text" placeholder="Insira seu email aqui" value={email} onChange={(e)=>[setEmail(e.target.value)]}/>
                        <InputComponent classes="mb-3" id="Password" text="Senha" type="password" placeholder="Insira sua senha aqui" value={senha} onChange={(e)=>[setSenha(e.target.value)]}/>
                        
                        <div className="d-flex w-100 mt-3">
                            <button type="submit" className="btn btn-primary w-100">Entrar</button>
                        </div>
                        <div className="mt-3">
                            Não possui conta?<Link to="/cadastro"> Cadastre-se agora!</Link> 
                        </div>
                    </form>
                    */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            Autentica(values);
                        }}>
                        {({ isValid }) => (
                        <Form className="formulario-login">
                                <InputComponentYup classes="mb-3 mt-3" id="InputEmail" name="email" text={<b>Email:</b>} type="text" placeholder="Insira seu email aqui" />
                                <InputComponentYup classes="mb-3" id="Password" name="senha" text={<b>Senha:</b>} type="text" placeholder="Digite a descrição do treino" />

                                <div className="d-flex w-100 mt-3">
                                    <button className="btn-submit btn-primary w-100" type="submit" disabled={!isValid}>Enviar</button>
                                </div>
                                <div className="mt-3">
                                    Não possui conta?<Link to="/cadastro"> Cadastre-se agora!</Link> 
                                </div>
                        </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Login;
