import "./playerStatcard.css";

export default function PlayerStatCard({ playerStats, battletag }) {
  let playerImage = "";
  switch (battletag) {
    case "Luden-11761": {
      playerImage =
        "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ddc10d3d22c0b3cd2817270ec973b621961f9e3472c273e2928df375958cb130.png";
      break;
    }
    case "RickeyRansom-1434": {
      playerImage =
        "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e5ae000b704c10ba688598133351f1c5d00cc071585fba69631401c4097fa10e.png";
      break;
    }
    case "TrillCosby-11719": {
      playerImage =
        "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e5ae000b704c10ba688598133351f1c5d00cc071585fba69631401c4097fa10e.png";
      break;
    }
  }

  const hoursPlayed = Math.round(playerStats.general.time_played / 3600);

  return (
    <div className="player-stat-card-container">
      <div className="header">
        <h1 className="header-title">Lifetime</h1>
        <span className="battletag">{battletag}</span>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            height: "15rem",
            width: "15rem",
            border: "3px solid white",
            borderRadius: "50%",
          }}
          src={playerImage}
        />
      </div>

      <div className="stats">
        <h3>K/D</h3>
        <span>{playerStats?.general?.kda}</span>
        <h3>Winrate</h3>
        <span>{playerStats?.general?.winrate}%</span>
        <h3>Eliminations</h3>
        <span>{playerStats?.general?.total?.eliminations}</span>
      </div>
      <h2 className="time-played">
        {hoursPlayed === 1
          ? `${hoursPlayed} hour played`
          : `${hoursPlayed} hours played`}
      </h2>
    </div>
  );
}
