import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext";

export const UserRow = ({id, username, email}) => {

    const { handleSelectUser, handlerRemoveUser } = useContext(UserContext);

    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button className="btn btn-secondary" onClick={() => handleSelectUser({ id, username, email })}>
                    Update
                </button>
            </td>
            <td>
                <NavLink className={'btn btn-secondary'} to={'/users/edit/' + id} >Update row</NavLink>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => handlerRemoveUser(id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}