import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/loginUser",
        {
          userId: email,
          password: password,
          role: role,
        }
      );

      if (response.data === true) {
        alert("Login successful!");

        if (role === "admin") {
          navigate("/adminhome");
        } else if (role === "recruiter") {
          navigate("/recruterhome");
        } else if (role === "user") {
          navigate("/userhome");
        }
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Check console for details.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="select-wrapper">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className={!role ? "placeholder-option" : ""}
          >
            <option value="" disabled hidden>
              Login as a
            </option>
            <option value="user">User</option>
            <option value="recruiter">Recruiter</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit">Login</button>
      </form>

      <div className="reg">
        <Link to="/register">Don't have an account? Register here</Link>
      </div>
    </div>
  );
}

export default Login;
