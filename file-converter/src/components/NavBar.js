import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-lg bg-light">
        {token ? (
          <div className="container">
            <Link to="/fakeApi" className="navbar-brand">
              HOME
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <Link to="/dragndrop" className="list nav-link">
                    DRAG AND DROP
                  </Link>
                  <li className="nav-item">
                    <button className="btn btn-primary" onClick={logout}>
                      LOGOUT
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default NavBar;

/*
import aubay from "./aubay.png";

  <Link to="/" className="navbar-brand">
        <img src={aubay} alt="logo" width="60" height="60"></img>
      </Link>

<nav className="navbar bg-light fixed-top">

</nav>


<div className="container">
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
            <ul className="navbar-nav">
              <Link to="/dragndrop" className="list nav-link">
                DRAG AND DROP
              </Link>
            </ul>
            <ul className="navbar-nav">
              <Link to="/fakeApi" className="list nav-link">
                FAKE API
              </Link>
            </ul>
         
              <button className="btn btn-primary" onClick={logout}>
                LOGOUT
              </button>
          
            
          </div>
        </div>
        */
