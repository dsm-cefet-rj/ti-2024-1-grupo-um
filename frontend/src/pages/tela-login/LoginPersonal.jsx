//import components
import CefetImageVerde from "../../components/CefetImage/CefetImage";
import InputComponentYup from "../../components/InputComponent/InputComponenteYup";

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
        const autenticado = await axios.post("http://localhost:3000/login", loginObj);   
        console.log(autenticado.data.user)
        if(autenticado.data.status == true){
            dispatch(addLoggedUser(autenticado.data.user));
            dispatch(getTreinosByUserID(autenticado.data.user._id));
            dispatch(getPersonais());
            dispatch(getAnamnese(autenticado.data.user._id));
            alert("autenticado");
            navigate("/personais");
            return;
        }

        //adicionar user com comando dispatch(addLoggedUser(user));
        //pegar os treinos do usuario atraves do dispatch(getTreinosByUserID(user.id));
        //pegar todos os personais atraves do dispatch(getPersonais());
        //pegar a anamnese do usuario atraves do dispatch(getAnamnese(user.id));
        //alertar o usuario com alert("autenticado");
        //navegar para /personais com navigate("/personais");




        //caso login de personal 
        const responsePersonal = await axios.get("http://localhost:3004/personais");
        const personais = responsePersonal.data;

        for (let personal of personais){
            if(personal.email === info.email && personal.senha === info.senha){
                dispatch(addLoggedPersonal(personal));
                dispatch(getAlunosByPersonalId(personal.id));
                
                alert("autenticado");
                navigate("/");
                //navigate("/meusAlunos");
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
                    <CefetImageVerde/>
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
                                <div className="mt-3">
                                    Não possui conta?<Link to="/cadastro"> Cadastre-se agora!</Link> 
                                </div>
                                <div className="mt-3 text-center">
                                    Personal?<Link to="/cadastroPersonal"> Cadastre-se agora!</Link> 
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