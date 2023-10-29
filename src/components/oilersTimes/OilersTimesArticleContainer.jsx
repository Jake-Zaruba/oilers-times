import "./oilersTimes.css";

export default function OiltersTimesArticleContainer({ children }) {
  return (
    <>
      <div className="oilters-times-article-container">{children}</div>
      <h1
        style={{
          position: "absolute",
          top: "10rem",
          right: "calc(50% - 22rem)",
          fontFamily: "UnifrakturMaguntia, cursive",
          fontSize: "6rem",
          width: "44rem",
        }}
      >
        The Oilers Times
      </h1>
    </>
  );
}
