import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const UserForm = ({ handlerAddUser, initialUserForm, userSelected, handleCloseForm }) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email } = userForm;

    useEffect(() => {
        if (userSelected) {
            setUserForm({
                ...userSelected,
                password: ''
            });
        }
    }, [userSelected]);

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setUserForm({
            ...userForm,
            [name]: value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!username || (!password && id === '') || !email) {
            return Swal.fire({
                icon: 'error',
                title: 'All fields are required',
                showConfirmButton: false,
            });
        }

        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }

    const onCloseForm = () => {
        setUserForm(initialUserForm);
        handleCloseForm();
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="hidden" name="id" value={id} />
            <input type="text" name="username" className="form-control mb-2" placeholder="Username" value={username} onChange={ onInputChange } />
            {id === '' && <input type="password" name="password" className="form-control mb-2" placeholder="Password" value={password} onChange={ onInputChange } />}
            <input type="email" name="email" className="form-control mb-2" placeholder="Email" value={email} onChange={ onInputChange } />
            <button type="submit" className="btn btn-primary">{id ? 'Update User' : 'Add User'}</button>
            {!handleCloseForm || <button type="button" className="btn btn-secondary ms-2" onClick={ onCloseForm }>Cancel</button>}
        </form>
    )
}