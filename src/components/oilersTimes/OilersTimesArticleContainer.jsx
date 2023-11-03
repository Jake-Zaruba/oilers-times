import "./oilersTimes.css";
import { useOutletContext } from "react-router-dom";

export default function OiltersTimesArticleContainer({ children }) {
  const [menuOpen, setMenuOpen] = useOutletContext();

  return (
    <>
      <div
        className={
          !menuOpen
            ? "oilters-times-article-page-container"
            : "disabled-homepage-links"
        }
      >
        <h1 className="oilers-times-header article-header">The Oilers Times</h1>
        <div className="oilers-times-article-container">{children}</div>
      </div>
    </>
  );
}
