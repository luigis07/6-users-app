import { useReducer, useState } from "react";
import { userReducer } from "../reducers/userReducer";
import Swal from "sweetalert2";

const initialUsers = [
    { id: 1, username: "John Doe", password: "password1", email: "john@example.com" },
    { id: 2, username: "Jane Smith", password: "password2", email: "jane@example.com" },
    { id: 3, username: "Alice Johnson", password: "password3", email: "alice@example.com" }
];

const initialUserForm = {
    id: '',
    username: '',
    password: '',
    email: ''
}

export const useUsers = () => {
    const [users, dispatch] = useReducer(userReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(null);
    const [visibleForm, setVisibleForm] = useState(false);

    const handleAddUser = (user) => {
        const type = (user.id === '') ? 'ADD_USER' : 'UPDATE_USER';

        dispatch({ type, payload: user });

        Swal.fire({
            icon: 'success',
            title: user.id ? 'User updated successfully' : 'User added successfully',
            showConfirmButton: false,
        });

        handleCloseForm();
    }

    const handlerRemoveUser = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({ type: 'REMOVE_USER', payload: id });
                Swal.fire({
                    icon: 'success',
                    title: 'User deleted successfully',
                    showConfirmButton: false,
                });
            }
        });
    }

    const handleSelectUser = (user) => {
        setVisibleForm(true);
        setUserSelected({...user});
    }

    const handleOpenForm = () => {
        setVisibleForm(true);
    }

    const handleCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handleAddUser,
        handlerRemoveUser,
        handleSelectUser,
        handleOpenForm,
        handleCloseForm
    }
}