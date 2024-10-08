import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store.js";

import App from "./App.js";
import Login from "./pages/tela-login/Login.jsx";
import Cadastro from "./pages/tela-cadastro/Cadastro.jsx";
import CadastroPersonal from "./pages/tela-cadastro/CadastroPersonal.jsx";
import Anamnese from "./pages/tela-anamnese/Anamnese.jsx";
import Personais from "./pages/tela-personais/Personais.jsx";
import AreaFIT from "./pages/tela-area-fit/AreaFIT.jsx";
import Home from "./pages/tela-home/Home.jsx";
import Personal from "./pages/tela-personal/Personal.jsx";
import AddTreinos from "./pages/tela-add-treinos/Treinos.jsx";
import EditTreinoAluno from "./pages/tela-personal-treino/EditTreinoAluno.jsx";
import CreateTreinoAluno from "./pages/tela-personal-treino/CreateTreinoAluno.jsx";
import Treino from "./pages/tela-treino/Treino.jsx";
import Pagamento from "./pages/tela-pagamento/Pagamento.jsx";
import Error from "./pages/tela-error/error.jsx";
import Perfil from "./pages/tela-perfil/Perfil.jsx";
import PerfilPersonal from "./pages/tela-perfil/PerfilPersonal.jsx";
import MeusAlunos from "./pages/tela-meus-alunos/MeusAlunos.jsx";
import Aluno from "./pages/tela-aluno/Aluno.jsx";
import LoginPersonal from "./pages/tela-login/LoginPersonal.jsx";
import { toast, ToastContainer } from "react-toastify";



const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "cadastro",
				element: <Cadastro />,
			},
			{
				path: "cadastroPersonal",
				element: <CadastroPersonal />,
			},
			{
				path: "personais",
				element: <Personais />,
			},
			{
				path: "anamnese",
				element: <Anamnese />,
			},
			{
				path: "areaFIT",
				element: <AreaFIT />,
			},
			{
				path: "areaFIT/:id",
				element: <AreaFIT />,
			},
			{
				path: "personal/:id",
				element: <Personal />,
			},
			{
				path: "add-treinos",
				element: <AddTreinos />,
			},
			{
				path: "treino/:id", //treino/:id
				element: <Treino />,
			},
			{
				path: "EditTreinoAluno/:id",
				element: <EditTreinoAluno />,
			},
			{
				path: "CreateTreinoAluno",
				element: <CreateTreinoAluno />,
			},
			{
				path: "pagamento/:id",
				element: <Pagamento />,
			},
			{
				path: "perfil",
				element: <Perfil />,
			},
			{
				path: "perfilPersonal",
				element: <PerfilPersonal />,
			},
			{
				path: "meusAlunos",
				element: <MeusAlunos />,
			},
			{
				path: "aluno/:id",
				element: <Aluno />,
			},
			{
				path: "LoginPersonal",
				element: <LoginPersonal />,
			},
		],
	},
]);

export const notify = (type, message) => {
	try {
		if (type === "success") {
			toast.success(message, {
				autoClose: 1000,
			});
		} else if (type === "error") {
			toast.error(message || "Ocorreu um erro!");
		}
	} catch (error) {}
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
				<ToastContainer />
			</PersistGate>
		</Provider>
	</React.StrictMode>
)
