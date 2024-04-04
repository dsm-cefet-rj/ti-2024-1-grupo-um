import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store.js';

import App from './App.js';
import Login from './pages/tela-login/Login.jsx';
import Cadastro from './pages/tela-cadastro/Cadastro.jsx';
import CadastroPersonal from './pages/tela-cadastro/CadastroPersonal.jsx';
import Anamnese from './pages/tela-anamnese/Anamnese.jsx';
import Personais from './pages/tela-personais/Personais.jsx';
import AreaFIT from './pages/tela-area-fit/AreaFIT.jsx';
import Home from './pages/tela-home/Home.jsx';
import Personal from './pages/tela-personal/Personal.jsx';
import AddTreinos from './pages/tela-add-treinos/Treinos.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "cadastro",
        element: <Cadastro/>
      },
      {
        path: "personais",
        element: <Personais/>
      },
      {
        path: "anamnese",
        element: <Anamnese/>
      },
      {
        path: "areaFIT",
        element: <AreaFIT/>
      },
      {
        path: "personal/:id",
        element: <Personal/>
      },
      {
        path: "add-treinos",
        element: <AddTreinos />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

