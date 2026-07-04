import { NavLink } from "react-router-dom"

export const UserRow = ( { id, username, email, handlerRemoveUser, handleSelectUser } ) => {

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
                <NavLink className={'btn btn-secondary btn-sm'} to={'/users/edit/' + id} >Update row</NavLink>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => handlerRemoveUser(id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}