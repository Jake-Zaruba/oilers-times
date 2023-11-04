import "./oilersTimes.css";
import { useOutletContext } from "react-router-dom";

export default function OilersTimesArticleContainer({ children }) {
  const [menuOpen, setMenuOpen] = useOutletContext();

  return (
    <>
      <div
        className={
          menuOpen
            ? "disabled-homepage-links oilers-times-article-page-container"
            : "oilers-times-article-page-container"
        }
      >
        <h1 className="oilers-times-header article-header">The Oilers Times</h1>
        <div className="oilers-times-article-container">{children}</div>
      </div>
    </>
  );
}
