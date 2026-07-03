import { LoginPage } from "./auth/pages/LoginPage";
import { UserPage } from "./pages/UserPage";
import { Navbar } from "./components/layout/Navbar";
import { UseAuth } from "./auth/hooks/UseAuth";

export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = UseAuth();

    return (
        <>
            {login.isAuth ? (<> <Navbar login={login} handlerLogout={handlerLogout} />  <UserPage /> </>) : <LoginPage handlerLogin={handlerLogin} />}
        </>
    );
}