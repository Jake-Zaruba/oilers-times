import "./prompt.css";

export default function Prompt({
  handleTrueAnswer,
  handleFalseAnswer,
  children,
}) {
  return (
    <div className="prompt-container">
      <h2>{children}</h2>
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
