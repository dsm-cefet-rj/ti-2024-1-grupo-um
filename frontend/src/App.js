import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { checkTokenValidity } from './utils/checkTokenValidity';
import { useEffect } from 'react';
import { logoutUser } from './redux/user/slice';



function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const tokenPersonal = user.loggedPersonal;
  const tokenAluno = user.logged;
  const tokenExpiration = user.expiration;

  useEffect(() => {
    if(tokenAluno){
      const isTokenValid = checkTokenValidity(tokenAluno);
      if(!isTokenValid){
        dispatch(logoutUser({tokenAluno}));
      }
    }
    if(tokenPersonal){
      const isTokenValid = checkTokenValidity(tokenPersonal);
      if(!isTokenValid){
        dispatch(logoutUser({tokenPersonal}));
      }
    }
  }, [tokenAluno, tokenPersonal, dispatch]);
  
  

  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
