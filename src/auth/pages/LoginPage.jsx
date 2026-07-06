import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialLoginForm = {
    username: '',
    password: ''
}

export const LoginPage = ( ) => {

  const { handlerLogin } = useContext(AuthContext);

const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [ name ]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire({icon: 'error', title: 'Error', text: 'Username and password are required'});
        }

        handlerLogin({username, password});
        
        setLoginForm(initialLoginForm);
    }

  return (
    <div className="modal" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modal-body">
              <input className="form-control mb-3" type="text" name="username" placeholder="Username" value={username} onChange={onInputChange} />
              <input className="form-control" type="password" name="password" placeholder="Password" value={password} onChange={onInputChange} />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
