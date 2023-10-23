import { Outlet, Link, NavLink, useNavigation } from "react-router-dom";

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <header>
        <nav>
          <NavLink to="/player-search">BattleTag Search</NavLink>
          <NavLink to="/team-cards">Oiler Lan Stats</NavLink>
        </nav>
      </header>
      <h2>{isLoading ? "Loading" : ""}</h2>
      <Outlet />
    </>
  );
}
