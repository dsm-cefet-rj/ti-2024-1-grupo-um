//import components
import CefetImage from "../../components/CefetImage/CefetImage";
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";
import { ToastContainer, toast } from 'react-toastify';
//import react stuff
import { Link, useNavigate } from "react-router-dom";
import { getTreinosByUserID } from "../../redux/trainings/slice";
//import axios
import axios from "axios";

//css 
import 'react-toastify/dist/ReactToastify.min.css';
import "./../pages.css";

//redux
import { useDispatch } from "react-redux";
import { addLoggedPersonal, addLoggedUser, logoutUser } from "../../redux/user/slice";
import { clearPersonals, getPersonais } from "../../redux/personal/slice";
import { clearAnamnese, getAnamnese } from "../../redux/anamnese/slice";
import { clearExercises } from "../../redux/exercises/slice";
import { clearAlunos, getAlunosByPersonalId } from "../../redux/aluno/slice";
import { notify } from "../../index";
//yup
import * as Yup from "yup";
import { Formik, Form } from "formik";

function Login(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //dispatchs para deslogar totalmente em caso de redirecionamento
    dispatch(logoutUser());
    dispatch(clearAlunos());
    dispatch(clearExercises());
    dispatch(clearPersonals());
    dispatch(clearAnamnese());

    async function Autentica (info){
        //caso login de usuario

        // const response = await axios.get("http://localhost:3004/users");
        // const users = response.data;

        // for (let user of users){
        //     if(user.email === info.email && user.senha === info.senha){
        //         dispatch(addLoggedUser(user));
        //         dispatch(getTreinosByUserID(user.id));
        //         dispatch(getPersonais());
        //         dispatch(getAnamnese(user.id));
        //         alert("autenticado");
        //         navigate("/personais");
        //         return;
        //     }
        // }
        const loginObj = {
            email: info.email,
            senha: info.senha
        }

        try{
            const autenticado = await axios.post("http://localhost:5000/login", loginObj);
            console.log(autenticado.data.user)
            if(autenticado.data.status == true){
                dispatch(addLoggedUser(autenticado.data.user));
                dispatch(getTreinosByUserID(autenticado.data.user._id));
                dispatch(getPersonais());
                dispatch(getAnamnese(autenticado.data.user._id));
                // alert("autenticado");
                notify("success", "Login realizado com sucesso")
                // setTimeout(10000);

                setTimeout(() => {
                    navigate("/personais");
                }, 3000);
                // toast("Usuário autenticado com sucesso!");
                return;
            }else{
                notify("error", "Login ou senha inválidos.");
                // alert("usuario invalido");
            }
        }catch(err){
            notify("error", "Login ou senha inválidos.");
            // alert(err);
        }
    }


    const initialValues = {
        email: "",
        senha: "",
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required("O email é obrigatório"),
        senha: Yup.string().required("A senha é obrigatória")
    })

    return(
        <div className="bg-image cefit-background-img"style=
        {{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}>
            <div className="div-principal container d-flex align-items-center justify-content-center m-auto">
                <div className="w-50 rounded-5 p-4 login-container">
                    <CefetImage/>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            Autentica(values);
                        }}>
                        {({ isValid }) => (
                        <Form className="formulario-login">
                                <InputComponentYup classes="mb-3 mt-3" id="InputEmail" name="email" text={<b>Email:</b>} type="text" placeholder="Insira seu email aqui" />
                                <InputComponentYup classes="mb-3" id="Password" name="senha" text={<b>Senha:</b>} type="password" placeholder="Insira sua senha aqui" />

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
                                        <a href="/LoginPersonal" className="btn btn-primary rounded-5 w-20">
                                            Personal
                                        </a>
                                    </div>
                                </div>
                        </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Login;
