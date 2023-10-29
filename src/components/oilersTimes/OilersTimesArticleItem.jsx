import "./oilersTimes.css";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, deleteDoc, collection } from "@firebase/firestore";
import { useState } from "react";
import Prompt from "../prompt/Prompt";

export default function OilersTimesArticleItem({ data, id }) {
  const navigate = useNavigate();
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptAnswer, setPromptAnswer] = useState(false);
  const [deleteArticleID, setDeleteArticleID] = useState("");

  const handleTrueAnswer = () => {
    const articleDoc = doc(db, "articles", deleteArticleID);
    setPromptAnswer((prev) => !prev);
    console.log(promptAnswer);
    deleteDoc(articleDoc);
    navigate("/oilers-times");
    setPromptAnswer((prev) => !prev);
    setShowPrompt((prev) => !prev);
  };

  const handleFalseAnswer = () => {
    setPromptAnswer(false);
    setShowPrompt((prev) => !prev);
  };

  const handleDeleteArticle = (deleteID) => {
    setDeleteArticleID(deleteID);
    const articleDoc = doc(db, "articles", id);
    if (deleteID === id) {
      setShowPrompt((prev) => !prev);
    }
  };

  return (
    <div className="oilters-times-article-item">
      {showPrompt ? (
        <Prompt
          navigate={navigate}
          handleTrueAnswer={handleTrueAnswer}
          handleFalseAnswer={handleFalseAnswer}
        />
      ) : null}
      <Link className="article-button" to={`/${id}`}>
        Read
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{data.title}</h1>
        <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>{data.date}</p>
      </div>

      <button
        className="article-button"
        onClick={() => handleDeleteArticle(id)}
      >
        Delete
      </button>
    </div>
  );
}
