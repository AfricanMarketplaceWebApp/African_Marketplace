import "./App.css";
import ReactDOM from "react-dom";
import Form from "./components/form";
import Women from "./components/Women";
import Login from "./components/LoginForm";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Men from "./components/men";
import Dashboard from "./components/dashboard";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/women">
            <Women Women={Women} />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path="/dashboard">
            <Dashboard dashboard={Dashboard} />
          </Route>

          <Route path="/men">
            <Men men={Men} />
          </Route>
          <Route path="/">
            <Form Form={Form} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
