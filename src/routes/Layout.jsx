import { Outlet, Link, NavLink, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";
import { signOut, getAuth } from "firebase/auth";
import { useContext } from "react";
import { Context } from "../context/AuthContext";

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const auth = getAuth();
  const { user } = useContext(Context);

  async function handleSignout() {
    await signOut(auth);
  }

  return (
    <div>
      {!user ? null : (
        <header
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            backgroundColor: "rgba(51, 51, 51, 0.467)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "4rem",
          }}
        >
          <nav style={{ display: "flex", gap: "5rem" }}>
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
            <button className="logout" onClick={() => handleSignout()}>
              Sign out
            </button>
          </nav>
          {isLoading ? <Loading /> : ""}
        </header>
      )}
      <Outlet />
    </div>
  );
}
