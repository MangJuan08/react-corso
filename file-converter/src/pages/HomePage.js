import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const userLogin = {
  username: "Kamren",
  password: "demarco.info",
};
const HomePage = () => {
  const [response, setResponse] = useState([]);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);

    console.log(response);
    
    const arr = response.filter(item => 
     item.username === login.username && item.website === login.password
    );
    console.log(arr);
  };

  const getLogin = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setResponse(res));
  };

  useEffect(() => {
    getLogin();
  }, []);

  return (
    <div className="container">
      <br></br>{" "}
      <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center">
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
  );
};

export default HomePage;
