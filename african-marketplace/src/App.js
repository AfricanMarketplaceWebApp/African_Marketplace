import React from "react";

import "./App.css";
import ReactDOM from "react-dom";
import Form from "./components/form";
import Home from "./components/Home";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          {/* <a
            onClick={logout}
            data-testid="logoutButton"
            href="http://localhost:3000/"
          >
            logout
          </a> */}

          {/* {localStorage.getItem("token") && (
            <div>
              {" "}
              <Link to="/protected">Protected Page</Link>
            </div>
          )} */}
          {/* <PrivateRoute exact path="/home" component={Home} /> */}

          {/* <Route exact path="/">
          <Home Home={Home} />
        </Route>
        <Route path="/form">
          <Form Form={Form} />
        </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
