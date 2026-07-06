import { useContext } from "react"
import { UserRow } from "./UserRow"
import { UserContext } from "../context/UserContext"

export const UserList = () => {

    const { users } = useContext(UserContext);

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
                    <UserRow key={user.id} {...user} />
                ))}
            </tbody>
        </table>
    )
}