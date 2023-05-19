import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import setAuthToken from "../components/setAuthToken";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const navigate = useNavigate();
  const [res, setResponse] = useState([]);
  const [login, setLogin] = useState({
    username: "",
    pass: "",
  });
  /* const handleSubmit = (e) => {
    e.preventDefault();

    const arr = res.find((item) => {
      return (
        item.username === e.target[0].value &&
        item.website === e.target[1].value
      );
    });
    if (arr) {
      const token = "token";
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(arr));
      setAuthToken(token);
      navigate("/fakeApi");
    } else {
      return navigate("/");
    }
  };*/
  /*
  const getLogin = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setResponse(res.data));
  };*/
  const handleSubmit = (e) => {
    console.log("prova");

    axios
      .post("http://localhost:3001/login", { body: login })
      .then((res) => console.log(res));
    e.preventDefault();
  };

  const onValChange = (event) => {
    const { name, value } = event.target;
    setLogin((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  /*
  useEffect(() => {
    getLogin();
  }, []);*/

  return (
    <div>
      <NavBar />
      <div className="container">
        <br></br> <br></br>
        <br></br>
        <form
          onSubmit={handleSubmit}
          className="row gy-2 gx-3 align-items-center"
        >
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              name="username"
              onChange={onValChange}
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              name="pass"
              onChange={onValChange}
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
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
