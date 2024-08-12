//import components
import CefetImageVerde from "../../components/CefetImage/CefetImage";
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";
import "../../components/CefetImage/CefetImage.css";
import logo from "../../images/logo.png";

//import react stuff
import { Link, useNavigate } from "react-router-dom";
import { getTreinosByUserID } from "../../redux/trainings/slice";

//import axios
import axios from "axios";

//css 
import "./../pages.css";

//redux
import { useDispatch } from "react-redux";
import { addLoggedPersonal, addLoggedUser, logoutUser } from "../../redux/user/slice";
import { clearPersonals, getPersonais } from "../../redux/personal/slice";
import { clearAnamnese, getAnamnese } from "../../redux/anamnese/slice";
import { clearExercises } from "../../redux/exercises/slice";
import { clearAlunos, getAlunosByPersonalId } from "../../redux/aluno/slice";

//yup
import * as Yup from "yup";
import { Formik, Form } from "formik";

function LoginPersonal(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //dispatchs para deslogar totalmente em caso de redirecionamento
    dispatch(logoutUser());
    dispatch(clearAlunos());
    dispatch(clearExercises());
    dispatch(clearPersonals());
    dispatch(clearAnamnese());

    async function Autentica (info){

        const loginObj = {
            email: info.email,
            senha: info.senha
        }
        //caso login de personal 
        const autenticado = await axios.post("http://localhost:5000/loginPersonal", loginObj);
        const response = autenticado.data;
        if(response.status === true){
            const personal = response.personal;
            dispatch(addLoggedPersonal(personal));
            dispatch(getAlunosByPersonalId(personal._id));
            alert("autenticado");
            navigate("/");
            return;
        }else{
            alert("Login ou senha incorretos");
        }
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
                    <div className="cefit-logo verde text-center rounded-5 m-auto">
                        <a href="/Login">
                            <img src={logo} alt="foto cefit" className="p-1" width="100%" height="100%"/>
                        </a>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            Autentica(values);
                        }}>
                        {({ isValid }) => (
                        <Form className="formulario-login">
                                <InputComponentYup classes="mb-3 mt-3" id="InputEmail" name="email" text={<b>Email:</b>} type="text" placeholder="Insira seu email aqui" />
                                <InputComponentYup classes="mb-3" id="Password" name="senha" text={<b>Senha:</b>} type="password" placeholder="Digite a descrição do treino" />

                                <div className="d-flex w-100 mt-3">
                                    <button className="btn-submit btn-primary w-100" type="submit" disabled={!isValid}>Enviar</button>
                                </div>
                                <div className="d-flex space-between align-items-center">
                                    <div>
                                        <div className="mt-3">
                                            Não possui conta? <Link to="/cadastro">Cadastre-se agora!</Link> 
                                        </div>
                                        <div className="mt-3">
                                            Personal? <Link to="/cadastroPersonal">Cadastre-se agora!</Link> 
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center w-20 mt-3">
                                        <a href="/login" className="btn verde rounded-5 w-20">
                                            Aluno
                                        </a>
                                    </div>
                                </div>
                        </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default LoginPersonal;