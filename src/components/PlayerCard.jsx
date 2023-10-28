import "./playerCard.css";
import { Link } from "react-router-dom";

export default function PlayerCard({ player, winrate, kda, children }) {
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
    case "BankRobber": {
      url = "BankRobber-11133";
      break;
    }
    case "SLEVZ": {
      url = "SLEVZ-11689";
      break;
    }
  }

  // console.log(stats);

  // const { winrate, kda } = stats;

  return (
    <div style={{ position: "relative" }}>
      {children}
      <div className="card-container">
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
            fontWeight: "700",
            lineHeight: "1",
          }}
        >
          <span>Winrate: {winrate}%</span>
          {/* <span>K/D: {kda}</span> */}
        </div>

        <Link to={url}>
          <button>Stats</button>
        </Link>
      </div>
    </div>
  );
}
