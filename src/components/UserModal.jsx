import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { UserForm } from "./UserForm";

export const UserModal = () => {

    const { userSelected, handleCloseForm } = useContext(UserContext);

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={ {display: "block"} } tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{userSelected ? "Edit User" : "Add User"}</h5>
                            {/* <button type="button" className="btn-close" onClick={handleCloseForm}></button> */}
                        </div>
                        <div className="modal-body">
                            <UserForm userSelected={userSelected} handleCloseForm={handleCloseForm} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}