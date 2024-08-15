import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import { Outlet } from 'react-router-dom';

export const notify = (type, message) => {
  if(type === "success"){
    toast.success(message || "Usuário autenticado com sucesso!");
  } else if(type === "error") {
    toast.error(message || "Ocorreu um erro!");
  }
}

function App() {
  return (
    <div className="App">
      <Outlet/>
      <ToastContainer/>
    </div>
  );
}

export default App;
