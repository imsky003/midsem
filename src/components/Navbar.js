import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  let location = useLocation();
  let history = useNavigate();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  const logout = () => {
    localStorage.removeItem("token");
    history("/login")
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark text-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""
                  }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""
                  }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? <form className="d-flex" role="search">
            <Link className="btn btn-primary btn-sm mx-1" to="/login">
              Login
            </Link>
            <Link className="btn btn-primary btn-sm mx-1" to="/signup">
              Signup
            </Link>
          </form> : <button className="btn btn-primary btn-sm" onClick={logout}>Logout</button>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
