export const Navbar = ( {login, handlerLogout} ) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <span className="navbar-brand">Users App</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <span className="nav-item nav-link text-primary mx-3">{login.user?.username}</span>
                <button className="btn btn-outline-danger" onClick={handlerLogout}>Logout</button>
            </div>
        </div>
    </nav>
  )
}
