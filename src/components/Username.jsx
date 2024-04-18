import { useState, useContext } from "react";
import { db } from "../firebase";
import { Context } from "../context/AuthContext";
import { addDoc, collection } from "@firebase/firestore";

export default function Username() {
  const [username, setUsername] = useState("");
  const { user } = useContext(Context);
  function createUsername() {
    const newUser = {
      username: username,
      UID: user.uid,
    };
    addDoc(store, newUser);
  }

  const store = collection(db, "users");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={() => createUsername()} className="article-button">
          Submit username
        </button>
      </div>
    </div>
  );
}
