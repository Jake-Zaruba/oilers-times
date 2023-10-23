import PlayerStats from "./PlayerStats";
import "./playerCard.css";
import { Link } from "react-router-dom";

export default function PlayerCard({ player }) {
  let url = "";
  switch (player.username) {
    case "Luden": {
      url = "Luden-11761";
      break;
    }
    case "RickeyRansom": {
      url = "RickeyRansom-1434";
      break;
    }
    case "TrillCosby": {
      url = "TrillCosby-11719";
      break;
    }
  }

  return (
    <>
      <div className="card-container">
        {/* <img className="oiler-image" src={imageUrl}></img> */}
        <h2>{player.username}</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ borderRadius: "50%" }} src={player.avatar} />
          <p style={{ fontSize: "1.2rem" }}>{player.title}</p>
        </div>
        <span></span>
        <Link to={url}>
          <button>Stats</button>
        </Link>
      </div>
    </>
  );
}
