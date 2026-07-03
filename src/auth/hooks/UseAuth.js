import { useReducer } from "react";
import { loginReducer } from "../reducers/LoginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";

const initialLogin = sessionStorage.getItem('login') ? JSON.parse(sessionStorage.getItem('login')) : {
    isAuth: false,
    user: undefined
};

export const UseAuth = () => {
    const [ login, dispatch ] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({ username, password }) => {
        const isLogin = loginUser({ userLogin: { username, password } });
        if (isLogin) {
            const user = { username: 'admin' };
            dispatch({ type: 'LOGIN', payload: user });
            sessionStorage.setItem('login', JSON.stringify({isAuth: true, user}));

        } else {
            Swal.fire({icon: 'error', title: 'Error', text: 'Invalid username or password'});
        }
    }

    const handlerLogout = () => {
        dispatch({ type: 'LOGOUT' });
        sessionStorage.removeItem('login');
    }

    return {
        login,
        handlerLogin,
        handlerLogout
    };
}
