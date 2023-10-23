import { useParams } from "react-router-dom";
import "./playerStats.css";
import { useState } from "react";
import HeroCard from "./HeroCard";
import PlayerStatCard from "./PlayerStatCard";

export function statLoader() {
  return null;
}

export default function PlayerStats() {
  const { battletag } = useParams();
  const [playerStats, setPlayerStats] = useState({});
  const [dataReceived, setDataReceived] = useState(false);
  const [heroArray, setHeroArray] = useState([]);

  useState(() => {
    async function fetchHeroes() {
      const data = await fetch(
        `https://overfast-api.tekrop.fr/players/${battletag}/stats/summary`
      ).then((res) => res.json().then((data) => setPlayerStats(data)));
      setDataReceived(true);
    }

    fetchHeroes();
  }, []);

  if (dataReceived) {
    const { heroes } = playerStats;
    console.log(heroes);
    const heroArray = Object.entries(heroes);

    let heroImgUrl;

    const heroSelect = heroArray.map((hero) => {
      console.log(hero);
      switch (hero[0]) {
        case "ana":
          heroImgUrl = "../../public/ana.webp";
          break;
        case "ashe":
          heroImgUrl = "../../public/ashe.webp";
          break;
        case "baptiste":
          heroImgUrl = "../../public/baptiste.webp";
          break;
        case "bastion":
          heroImgUrl = "../../public/bastion.webp";
          break;
        case "brigitte":
          heroImgUrl = "../../public/brigitte.webp";
          break;
        case "cassidy":
          heroImgUrl = "../../public/cassidy.webp";
          break;
        case "doomfist":
          heroImgUrl = "../../public/doomfist.webp";
          break;
        case "dva":
          heroImgUrl = "../../public/dva.webp";
          break;
        case "echo":
          heroImgUrl = "../../public/echo.webp";
          break;
        case "genji":
          heroImgUrl = "../../public/genji.webp";
          break;
        case "hanzo":
          heroImgUrl = "../../public/hanzo.webp";
          break;
        case "illari":
          heroImgUrl = "../../public/illari.webp";
          break;
        case "junker-queen":
          heroImgUrl = "../../public/junker-queen.webp";
          break;
        case "junkrat":
          heroImgUrl = "../../public/junkrat.webp";
          break;
        case "kiriko":
          heroImgUrl = "../../public/kiriko.webp";
          break;
        case "lifeweaver":
          heroImgUrl = "../../public/lifeweaver.webp";
          break;
        case "lucio":
          heroImgUrl = "../../public/lucio.webp";
          break;
        case "mei":
          heroImgUrl = "../../public/mei.webp";
          break;
        case "mercy":
          heroImgUrl = "../../public/mercy.webp";
          break;
        case "moira":
          heroImgUrl = "../../public/moira.webp";
          break;
        case "orisa":
          heroImgUrl = "../../public/orisa.webp";
          break;
        case "pharah":
          heroImgUrl = "../../public/pharah.webp";
          break;
        case "ramattra":
          heroImgUrl = "../../public/ramattra.webp";
          break;
        case "reaper":
          heroImgUrl = "../../public/reaper.webp";
          break;
        case "reinhardt":
          heroImgUrl = "../../public/reinhardt.webp";
          break;
        case "roadhog":
          heroImgUrl = "../../public/roadhog.webp";
          break;
        case "sigma":
          heroImgUrl = "../../public/sigma.webp";
          break;
        case "sojourn":
          heroImgUrl = "../../public/sojourn.webp";
          break;
        case "soldier-76":
          heroImgUrl = "../../public/soldier-76.webp";
          break;
        case "sombra":
          heroImgUrl = "../../public/sombra.webp";
          break;
        case "symmetra":
          heroImgUrl = "../../public/symmetra.webp";
          break;
        case "torbjorn":
          heroImgUrl = "../../public/torbjorn.webp";
          break;
        case "tracer":
          heroImgUrl = "../../public/tracer.webp";
          break;
        case "widowmaker":
          heroImgUrl = "../../public/widowmaker.webp";
          break;
        case "winston":
          heroImgUrl = "../../public/winston.webp";
          break;
        case "wrecking-ball":
          heroImgUrl = "../../public/wrecking-ball.webp";
          break;
        case "zarya":
          heroImgUrl = "../../public/zarya.webp";
          break;
        case "zenyatta":
          heroImgUrl = "../../public/zenyatta.webp";
          break;
      }
      return (
        <div key={hero[0]} className="hero-card">
          <HeroCard
            battletag={battletag}
            id={hero[0]}
            hero={hero}
            heroImage={heroImgUrl}
          />
        </div>
      );
    });

    return (
      <>
        <div className="stat-page-container">
          <PlayerStatCard battletag={battletag} playerStats={playerStats} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
              width: "90vw",
              position: "absolute",
              bottom: "0",
              fontSize: "1rem",
              marginBottom: "2rem",
            }}
          >
            {heroSelect}
          </div>
        </div>
      </>
    );
  }

  // console.log(playerStats);
  else
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
}
