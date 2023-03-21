import React, { useState } from "react";

import LoginForm from "./LoginForm";
export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  //the js so that the add items form can communicate with frontend and the backend, and that the buttons can work should be here
  return (
    <div className="form-container">
      <div>
        <header>
          <title>Site Title</title>
          <h2>African Market </h2>
          <div className="navbar">
            <nav>
              <button>
                <a href="/women">Women</a>
              </button>
              <button>
                <a href="/men">Men</a>
              </button>
              <button>
                <a href="/dashboard">Dashboard</a>
              </button>
            </nav>
          </div>
        </header>
      </div>

      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm LoginForm={LoginForm} error={error} />
      )}
    </div>
  );
}
