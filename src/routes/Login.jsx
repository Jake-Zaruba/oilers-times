import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import "../assets/show-password.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  async function handleLogin(e) {
    signInWithEmailAndPassword(auth, email, password).then((user) =>
      navigate("/")
    );
  }

  return (
    <div className="login-page-container">
      <div className="login-container">
        <h1
          style={{
            position: "absolute",
            top: "28rem",
            right: "calc(50% - 22rem)",
            fontFamily: "UnifrakturMaguntia, cursive",
            fontSize: "6rem",
            width: "44rem",
          }}
        >
          The Oilers Times
        </h1>
        <div className="field-container">
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
            autoComplete="off"
          ></input>
          <button
            className="password-toggle-button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {!showPassword ? (
              <img
                className="password-icon"
                src="../public/show-password.svg"
              />
            ) : (
              <img src="../public/hide-password.svg" />
            )}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            alignItems: "center",
            justifySelf: "flex-end",
          }}
        >
          <button className="article-button" onClick={(e) => handleLogin(e)}>
            Log in
          </button>
          <span
            style={{ position: "fixed", bottom: "25rem", fontSize: "1.4rem" }}
          >
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
