import { useState, useContext } from "react";
import "./login.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../mediaQueries.css";
import { Context } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const { user } = useContext(Context);

  async function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((user) =>
      navigate("/")
    );
  }

  if (user) {
    return <Navigate to="/" replace={true} />;
  } else {
    return (
      <div className="login-page-container">
        <div className="login-container">
          <h1 className="oilers-times-header">The Oilers Times</h1>
          <div className="field-container">
            <form className="field-container" onSubmit={(e) => handleLogin(e)}>
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
            onClick={(e) => handleLogin(e)}
          >
            Log in
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
              Don't have an account? Create one&nbsp;
              <Link style={{ fontWeight: "600", color: "#333" }} to="/register">
                here
              </Link>
              .
            </span>
          </div>
        </div>
      </div>
    );
  }
}
