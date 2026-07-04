import { LoginPage } from "./auth/pages/LoginPage";
import { UseAuth } from "./auth/hooks/UseAuth";
import { UserRoutes } from "./routes/UserRoutes";
import { Routes, Route, Navigate } from "react-router-dom";

export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = UseAuth();

    return (
        <Routes>
            {
                login.isAuth ? 
                (
                    <Route path="/*" element={ <UserRoutes login={login} handlerLogout={handlerLogout} /> } />
                ) :  
                <>
                    <Route path="/login" element={<LoginPage handlerLogin={handlerLogin} />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </>
            }
        </Routes>
    );
}