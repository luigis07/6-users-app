import { Routes, Route, Navigate } from "react-router-dom"
import { UserPage } from "../pages/UserPage"
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";

export const UserRoutes = ( { login, handlerLogout } ) => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handleSelectUser,
        handleOpenForm,
        handleCloseForm
    } = useUsers();
    
  return (
    <>
        <Navbar login= {login} handlerLogout={handlerLogout} />
        <Routes>
                <Route path="/" element={<UserPage 
                    users={users}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    visibleForm={visibleForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handleSelectUser={handleSelectUser}
                    handleOpenForm={handleOpenForm}
                    handleCloseForm={handleCloseForm}
                />} />
                <Route path="users/register" element={<RegisterPage handlerAddUser={handlerAddUser} initialUserForm={initialUserForm} />} />
                <Route path="users/edit/:id" element={<RegisterPage users={users} handlerAddUser={handlerAddUser} initialUserForm={initialUserForm} />} />
                <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </>
  )
}
