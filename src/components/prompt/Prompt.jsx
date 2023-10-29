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
          style={{
            backgroundColor: "rgba(183, 17, 56, 0.5)",
            width: "8rem",
            color: "#333",
          }}
          className="article-button"
        >
          Cancel
        </button>
        <button
          onClick={() => handleTrueAnswer()}
          style={{
            backgroundColor: "rgba(148, 204, 89, 0.5)",
            width: "8rem",
            color: "#333",
          }}
          className="article-button"
        >
          Yes
        </button>
      </div>
    </div>
  );
}
