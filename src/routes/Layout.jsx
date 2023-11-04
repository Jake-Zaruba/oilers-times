import { Outlet, Link, NavLink, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";
import { signOut, getAuth } from "firebase/auth";
import { useContext, useState } from "react";
import { Context } from "../context/AuthContext";

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = getAuth();
  const { user } = useContext(Context);

  async function handleSignout() {
    await signOut(auth);
  }

  function handleMenuToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setMenuOpen((prev) => !prev);
  }

  return (
    <div>
      {!user ? null : (
        <div
          className="menu-button mobile-nav-wrapper"
          onClick={(e) => handleMenuToggle(e)}
          role="navigation"
        >
          <div className="btn-mobile-nav">
            <div
              className={
                !menuOpen
                  ? "close-top-nav-line-animation top-nav-line"
                  : "top-nav-line-animation top-nav-line"
              }
            ></div>
            <div
              className={
                !menuOpen
                  ? "close-bottom-nav-line-animation bottom-nav-line"
                  : "bottom-nav-line-animation bottom-nav-line"
              }
            ></div>
          </div>
        </div>
      )}

      {!user ? null : (
        <header className={!menuOpen ? "closed-menu" : "open-menu"}>
          <nav
            className={!menuOpen ? "closed-menu" : ""}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <NavLink
              className={({ isActive }) => {
                isActive ? "active" : "";
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink to="/player-search">Search</NavLink>
            <NavLink to="/team-stats">Team Stats</NavLink>
            <NavLink to="/oilers-times">Oilers Times</NavLink>
          </nav>
          <button className="logout" onClick={() => handleSignout()}>
            Sign out
          </button>
          <button
            className={
              !menuOpen
                ? "disabled-homepage-links disabled-homepage-button"
                : "mobile-logout "
            }
            onClick={() => handleSignout()}
          >
            Sign out
          </button>
          {isLoading ? <Loading /> : ""}
        </header>
      )}
      <Outlet context={[menuOpen, setMenuOpen]} />
    </div>
  );
}
