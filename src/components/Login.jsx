import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validators";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must contain an uppercase, lowercase, number, and special character"
      );
      return;
    }

    // Hardcoded credentials
    if (email === "user@mail.com" && password === "Test@1234") {
      localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");
      navigate("/users");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
