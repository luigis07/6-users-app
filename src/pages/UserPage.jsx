import { UserList } from "../components/UserList";
import { UserModal } from "../components/UserModal";
import { useUsers } from "../hooks/useUsers";

export const UserPage = () => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handleAddUser,
        handlerRemoveUser,
        handleSelectUser,
        handleOpenForm,
        handleCloseForm
    } = useUsers();

    return (
        <>
            {!visibleForm || 
                <UserModal handleAddUser={handleAddUser} initialUserForm={initialUserForm} userSelected={userSelected} handleCloseForm={handleCloseForm} />
            }

            <div className="container mt-5">
                <h2>Users App</h2>

                <div className="row">
                    <div className="col-md-6">
                        {!visibleForm && <button className="btn btn-primary mb-3" onClick={handleOpenForm}>Add User</button>}
                        { users.length === 0 ? <div className="alert alert-warning">No users found</div> : <UserList users={users} handlerRemoveUser={handlerRemoveUser} handleSelectUser={handleSelectUser} /> }
                    </div>
                </div>
            </div>
        </>
    );
}