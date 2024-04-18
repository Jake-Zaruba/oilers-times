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
import Login from "./routes/Login";
import Register from "./routes/Register";
import { AuthContext } from "./context/AuthContext";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Username from "./components/Username";
import Polls from "./routes/Polls";

const JSXRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/" errorElement={<Error />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        element={
          <ProtectedRoute>
            <PlayerSearch />
          </ProtectedRoute>
        }
        path="player-search"
      >
        <Route
          element={
            <ProtectedRoute>
              <PlayerCard />
            </ProtectedRoute>
          }
          path=":name"
        />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <TeamCards />
          </ProtectedRoute>
        }
        path="team-stats"
        loader={playerLoader}
      />
      <Route
        element={
          <ProtectedRoute>
            <PlayerStats />
          </ProtectedRoute>
        }
        path="/team-stats/:battletag"
        loader={statLoader}
      />
      <Route
        element={
          <ProtectedRoute>
            <Polls />
          </ProtectedRoute>
        }
        path="/polls"
      />
      <Route
        element={
          <ProtectedRoute>
            <OilersTimes />
          </ProtectedRoute>
        }
        path="oilers-times"
        loader={articleLoader}
      ></Route>
      <Route
        element={
          <ProtectedRoute>
            <OilersTimesArticlePage />
          </ProtectedRoute>
        }
        path=":pageID"
        loader={articlePageLoader}
      />

      <Route
        element={
          <ProtectedRoute>
            <OilersTimesAuthorPage />
          </ProtectedRoute>
        }
        path="oilers-times/new-article"
        loader={mapLoader}
      />
      <Route
        element={
          <ProtectedRoute>
            <Username />
          </ProtectedRoute>
        }
        path="set-username"
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={JSXRouter} />
    </AuthContext>
  </React.StrictMode>
);
