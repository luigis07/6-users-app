import { UserForm } from "../components/UserForm"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const RegisterPage = ( { users=[], handlerAddUser, initialUserForm } ) => {
  
    const [userSelected, setUserSelected] = useState(initialUserForm);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if(id) {
            const user = users.find(user => user.id == id) || initialUserForm;
            setUserSelected(user);
        }
    }, [id]);

    return (
    <div className="container mt-4">
        <h4>{ userSelected.id > 0 ? 'Edit' : 'Register'} User</h4>
        <div className="row">
            <div className="col-12 col-md-6">
                <UserForm
                    userSelected={userSelected}
                    handlerAddUser={(user) => {
                        handlerAddUser(user);
                        navigate("/users");
                    }}
                    initialUserForm={initialUserForm}
                />
            </div>
        </div>
    </div>
  )
}
