import { useParams } from "react-router-dom";
import "./playerStats.css";
import { useState } from "react";
import HeroCard from "./HeroCard";
import PlayerStatCard from "./PlayerStatCard";
import Loading from "./Loading";

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
          heroImgUrl = "/dist/assets/ana.webp";
          break;
        case "ashe":
          heroImgUrl = "/dist/assets/ashe.webp";
          break;
        case "baptiste":
          heroImgUrl = "/dist/assets/baptiste.webp";
          break;
        case "bastion":
          heroImgUrl = "/dist/assets/bastion.webp";
          break;
        case "brigitte":
          heroImgUrl = "/dist/assets/brigitte.webp";
          break;
        case "cassidy":
          heroImgUrl = "/dist/assets/cassidy.webp";
          break;
        case "doomfist":
          heroImgUrl = "/dist/assets/doomfist.webp";
          break;
        case "dva":
          heroImgUrl = "/dist/assets/dva.webp";
          break;
        case "echo":
          heroImgUrl = "/dist/assets/echo.webp";
          break;
        case "genji":
          heroImgUrl = "/dist/assets/genji.webp";
          break;
        case "hanzo":
          heroImgUrl = "/dist/assets/hanzo.webp";
          break;
        case "illari":
          heroImgUrl = "/dist/assets/illari.webp";
          break;
        case "junker-queen":
          heroImgUrl = "/dist/assets/junker-queen.webp";
          break;
        case "junkrat":
          heroImgUrl = "/dist/assets/junkrat.webp";
          break;
        case "kiriko":
          heroImgUrl = "/dist/assets/kiriko.webp";
          break;
        case "lifeweaver":
          heroImgUrl = "/dist/assets/lifeweaver.webp";
          break;
        case "lucio":
          heroImgUrl = "/dist/assets/lucio.webp";
          break;
        case "mei":
          heroImgUrl = "/dist/assets/mei.webp";
          break;
        case "mercy":
          heroImgUrl = "/dist/assets/mercy.webp";
          break;
        case "moira":
          heroImgUrl = "/dist/assets/moira.webp";
          break;
        case "orisa":
          heroImgUrl = "/dist/assets/orisa.webp";
          break;
        case "pharah":
          heroImgUrl = "/dist/assets/pharah.webp";
          break;
        case "ramattra":
          heroImgUrl = "/dist/assets/ramattra.webp";
          break;
        case "reaper":
          heroImgUrl = "/dist/assets/reaper.webp";
          break;
        case "reinhardt":
          heroImgUrl = "/dist/assets/reinhardt.webp";
          break;
        case "roadhog":
          heroImgUrl = "/dist/assets/roadhog.webp";
          break;
        case "sigma":
          heroImgUrl = "/dist/assets/sigma.webp";
          break;
        case "sojourn":
          heroImgUrl = "/dist/assets/sojourn.webp";
          break;
        case "soldier-76":
          heroImgUrl = "/dist/assets/soldier-76.webp";
          break;
        case "sombra":
          heroImgUrl = "/dist/assets/sombra.webp";
          break;
        case "symmetra":
          heroImgUrl = "/dist/assets/symmetra.webp";
          break;
        case "torbjorn":
          heroImgUrl = "/dist/assets/torbjorn.webp";
          break;
        case "tracer":
          heroImgUrl = "/dist/assets/tracer.webp";
          break;
        case "widowmaker":
          heroImgUrl = "/dist/assets/widowmaker.webp";
          break;
        case "winston":
          heroImgUrl = "/dist/assets/winston.webp";
          break;
        case "wrecking-ball":
          heroImgUrl = "/dist/assets/wrecking-ball.webp";
          break;
        case "zarya":
          heroImgUrl = "/dist/assets/zarya.webp";
          break;
        case "zenyatta":
          heroImgUrl = "/dist/assets/zenyatta.webp";
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
              marginBottom: "4rem",
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
        <div className="stat-page-container">
          <Loading />
        </div>
      </>
    );
}
