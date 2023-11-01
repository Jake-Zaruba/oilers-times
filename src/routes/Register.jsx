import "./register.css";
import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  async function handleRegistration(e) {
    createUserWithEmailAndPassword(auth, email, password).then((user) =>
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
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="off"
          />
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
          <button
            className="article-button"
            onClick={(e) => handleRegistration(e)}
          >
            Sign up
          </button>
          <span
            style={{ position: "fixed", bottom: "25rem", fontSize: "1.4rem" }}
          >
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
