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
        {token? <div className="container">
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
        : "" }
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


*/
