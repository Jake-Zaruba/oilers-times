import "./heroModal.css";

export default function HeroModal({
  heroStats,
  heroName,
  battletag,
  heroImage,
}) {
  return (
    <div className="hero-modal">
      <div className="player-stat-card-container">
        <div className="hero-modal-header">
          <h1 className="header-title">{heroName.toUpperCase()}</h1>
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
            src={heroImage}
          />
        </div>

        <div className="stats">
          <h3>K/D</h3>
          <span>{heroStats.kda}</span>
          <h3>Winrate</h3>
          <span>{heroStats?.winrate}%</span>
          <h3>Eliminations</h3>
          <span>{heroStats?.total?.eliminations}</span>
        </div>
        <h2 className="time-played">
          {Math.round(heroStats.time_played / 3600)} hours played
        </h2>
      </div>
    </div>
  );
}
