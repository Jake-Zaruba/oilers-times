import { NavLink, useOutletContext } from "react-router-dom";
import "./home.css";
import "../mediaQueries.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useOutletContext();

  return (
    <>
      <div className="home-page-container">
        <div className="clocktower-flicker-animation"></div>
        <div className="building-flicker-animation"></div>
        <div className="ripple-animation-container">
          <div className="ripple-animation-drop"></div>
        </div>
        <div className="ripple-animation-container">
          <div className="ripple-animation-drop"></div>
          <div className="ripple-animation-drop"></div>
          <div className="ripple-animation-drop"></div>
        </div>
        <div className="home-page-links-container">
          <NavLink className="home-page-link" to="team-stats">
            TEAM STATS
          </NavLink>
          <NavLink className="home-page-link" to="player-search">
            SEARCH
          </NavLink>
          <NavLink className="home-page-link" to="oilers-times">
            OILERS TIMES
          </NavLink>
        </div>
      </div>
    </>
  );
}
