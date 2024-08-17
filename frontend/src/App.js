import './App.css';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Outlet/>
      
    </div>
  );
}

export default App;
