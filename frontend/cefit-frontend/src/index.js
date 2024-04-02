import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.js';
import Login from './pages/tela login/Login.jsx';
import Cadastro from './pages/tela cadastro/Cadastro.jsx';
import Anamnese from './pages/tela-anamnese/Anamnese.jsx';
import Personais from './pages/tela-personais/Personais.jsx';
import AreaFIT from './pages/tela area-fit/AreaFIT.jsx';
import Home from './pages/tela-home/Home.jsx';

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
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

