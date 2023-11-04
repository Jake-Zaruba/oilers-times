import "./register.css";
import "./login.css";
import "../mediaQueries.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  async function handleRegistration(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((user) =>
      navigate("/")
    );
  }

  return (
    <div className="login-page-container">
      <div className="login-container">
        <h1 className="oilers-times-header">The Oilers Times</h1>
        <div className="field-container">
          <form
            className="field-container"
            onSubmit={(e) => handleRegistration(e)}
          >
            <label style={{ fontSize: "1.2rem", marginLeft: "0.6rem" }}>
              Email
            </label>
            <input
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              autoComplete="off"
              style={{ marginBottom: "1rem" }}
            />
            <label style={{ fontSize: "1.2rem", marginLeft: "0.6rem" }}>
              Password
            </label>
            <input
              className="login-input password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={!showPassword ? "password" : "text"}
              autoComplete="new-password"
            ></input>
            <button
              className="password-toggle-button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {!showPassword ? (
                <img className="password-icon" src="/show-password.svg" />
              ) : (
                <img src="/hide-password.svg" />
              )}
            </button>
          </form>
        </div>
        <button
          className="article-button login-button"
          onClick={(e) => handleRegistration(e)}
        >
          Sign up
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            alignItems: "center",
            justifySelf: "flex-end",
          }}
        >
          <span className="toggle-register-login-page">
            Already have an account? Log in&nbsp;
            <Link style={{ fontWeight: "600", color: "#333" }} to="/login">
              here
            </Link>
            .
          </span>
        </div>
      </div>
    </div>
  );
}
