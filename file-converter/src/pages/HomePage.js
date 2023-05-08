import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import setAuthToken from "../components/setAuthToken";
import { useNavigate  } from "react-router-dom";
import NavBar from "../components/NavBar";


const HomePage = () => {
   const navigate = useNavigate();
  const [res, setResponse] = useState([]);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();


    const arr = res.find((item) => {
      return (
        item.username === e.target[0].value &&
        item.website === e.target[1].value
      );
    });
    if(arr) {
      const token = "token";
      localStorage.setItem("token",token);
      setAuthToken(token);
      navigate("/fakeApi")
    }
    else
    {
      return navigate("/");
    }
  };

  const getLogin = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setResponse(res.data));
  };

  useEffect(() => {
    getLogin();
  }, []);

  return (<div>
    <NavBar/>
    <div className="container">
      <br></br>{" "}
      <form
        onSubmit={handleSubmit}
        className="row gy-2 gx-3 align-items-center"
      >
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInput">
            Name
          </label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            Username
          </label>
          <div className="input-group">
            <div className="input-group-text">PASSWORD</div>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default HomePage;
