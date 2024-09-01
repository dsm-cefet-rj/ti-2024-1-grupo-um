import { checkTokenValidity } from '../../utils/checkTokenValidity.js';
import { logoutUser } from '../user/slice.js';


const tokenMiddleware = store => next => action => {
    const user = store.getState().user;
    console.log(user);

    const token = user.logged ? user.logged : user.loggedPersonal;

    // console.log(token)
    const ignoreActions = ['LOGOUT'];

    if (!ignoreActions.includes(action.type)) {
        if (token && !checkTokenValidity(token)) {
            // Se o token é inválido, deslogar o usuário
            store.dispatch(logoutUser({token}));
            return; // Impede que a ação original seja processada
        }
    }
    
    // Se o token é válido, seguir com a ação
    next(action);
    
};

export default tokenMiddleware;