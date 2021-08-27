import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../helpers/axiosWithAuth";

const initialValues = { username: "", password: "" };

const Login = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const { push } = useHistory();
  const [error, setError] = useState();

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.username !== "Lambda" || formValues.password !== "School") {
      setError("Username or Password not valid.");
    }

    axiosWithAuth()
      .post("/api/login/", formValues)
      .then((res) => {
        console.log(res);
      })
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        push("/");
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <div>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <div>
            {" "}
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              data-testid="username"
              name="username"
              type="text"
              value={formValues.username}
              onChange={handleChanges}
            />
          </div>

          <div>
            {" "}
            <label htmlFor="password">Password</label>
            <input
              id="password"
              data-testid="password"
              name="password"
              value={formValues.password}
              onChange={handleChanges}
              type="password"
            />
          </div>

          <button>Login</button>
        </form>
      </div>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;
