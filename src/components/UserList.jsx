import { UserRow } from "./UserRow"

export const UserList = ( { users = [], handlerRemoveUser, handleSelectUser } ) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <UserRow key={user.id} {...user} handlerRemoveUser={handlerRemoveUser} handleSelectUser={handleSelectUser} />
                ))}
            </tbody>
        </table>
    )
}