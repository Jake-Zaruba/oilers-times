import "./prompt.css";

export default function Prompt({
  handleTrueAnswer,
  handleFalseAnswer,
  navigate,
}) {
  return (
    <div className="prompt-container">
      <h2>Are you sure you want to delete this article?</h2>
      <div style={{ display: "flex", gap: "3rem" }}>
        <button
          onClick={() => handleFalseAnswer()}
          style={{ backgroundColor: "#b7113864" }}
          className="article-button"
        >
          Cancel
        </button>
        <button
          onClick={handleTrueAnswer}
          style={{ backgroundColor: "#94cc595c" }}
          className="article-button"
        >
          Yes
        </button>
      </div>
    </div>
  );
}
