import "./oilersTimes.css";

export default function OiltersTimesArticleContainer({ children }) {
  return (
    <>
      <div className="oilters-times-article-page-container">
        <h1 className="oilers-times-header article-header">The Oilers Times</h1>
        <div className="oilers-times-article-container">{children}</div>
      </div>
    </>
  );
}
