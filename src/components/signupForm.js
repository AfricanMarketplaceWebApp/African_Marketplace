import React from "react";

export default function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setconfirmpassword] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      Confirmpassword: ${confirmpassword}
    `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <label>
        Confirm Password:
        <input
          name="confirmpassword"
          type="password"
          value={confirmpassword}
          onChange={(e) => setconfirmpassword(e.target.value)}
          required
        />
      </label>

      <button>Submit</button>
    </form>
  );
}
