import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./routes/Layout.jsx";
import Error from "./routes/Error.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PlayerCard from "./components/PlayerCard";
import PlayerSearch from "./routes/PlayerSearch";
import OilersTimes, {
  articleLoader,
} from "./components/oilersTimes/OilersTimes";
import OilersTimesAuthorPage, {
  mapLoader,
} from "./components/oilersTimes/OilersTimesAuthorPage";
import OilersTimesArticlePage, {
  articlePageLoader,
} from "./components/oilersTimes/OilersTimesArticlePage";
import TeamCards, { playerLoader } from "./components/TeamCards";
import PlayerStats, { statLoader } from "./components/PlayerStats";
import Home from "./components/Home";

const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/" errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route element={<PlayerSearch />} path="player-search">
        <Route element={<PlayerCard />} path=":name" />
      </Route>

      <Route element={<TeamCards />} path="team-stats" loader={playerLoader} />
      <Route
        element={<PlayerStats />}
        path="/team-stats/:battletag"
        loader={statLoader}
      />
      <Route
        element={<OilersTimes />}
        path="oilers-times"
        loader={articleLoader}
      ></Route>
      <Route
        element={<OilersTimesArticlePage />}
        path=":pageID"
        loader={articlePageLoader}
      />

      <Route
        element={<OilersTimesAuthorPage />}
        path="oilers-times/new-article"
        loader={mapLoader}
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={JSXRouter} />
  </React.StrictMode>
);
