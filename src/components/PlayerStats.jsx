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
          heroImgUrl = "/dist/ana.webp";
          break;
        case "ashe":
          heroImgUrl = "/dist/ashe.webp";
          break;
        case "baptiste":
          heroImgUrl = "/dist/baptiste.webp";
          break;
        case "bastion":
          heroImgUrl = "/dist/bastion.webp";
          break;
        case "brigitte":
          heroImgUrl = "/dist/brigitte.webp";
          break;
        case "cassidy":
          heroImgUrl = "/dist/cassidy.webp";
          break;
        case "doomfist":
          heroImgUrl = "/dist/doomfist.webp";
          break;
        case "dva":
          heroImgUrl = "/dist/dva.webp";
          break;
        case "echo":
          heroImgUrl = "/dist/echo.webp";
          break;
        case "genji":
          heroImgUrl = "/dist/genji.webp";
          break;
        case "hanzo":
          heroImgUrl = "/dist/hanzo.webp";
          break;
        case "illari":
          heroImgUrl = "/dist/illari.webp";
          break;
        case "junker-queen":
          heroImgUrl = "/dist/junker-queen.webp";
          break;
        case "junkrat":
          heroImgUrl = "/dist/junkrat.webp";
          break;
        case "kiriko":
          heroImgUrl = "/dist/kiriko.webp";
          break;
        case "lifeweaver":
          heroImgUrl = "/dist/lifeweaver.webp";
          break;
        case "lucio":
          heroImgUrl = "/dist/lucio.webp";
          break;
        case "mei":
          heroImgUrl = "/dist/mei.webp";
          break;
        case "mercy":
          heroImgUrl = "/dist/mercy.webp";
          break;
        case "moira":
          heroImgUrl = "/dist/moira.webp";
          break;
        case "orisa":
          heroImgUrl = "/dist/orisa.webp";
          break;
        case "pharah":
          heroImgUrl = "/dist/pharah.webp";
          break;
        case "ramattra":
          heroImgUrl = "/dist/ramattra.webp";
          break;
        case "reaper":
          heroImgUrl = "/dist/reaper.webp";
          break;
        case "reinhardt":
          heroImgUrl = "/dist/reinhardt.webp";
          break;
        case "roadhog":
          heroImgUrl = "/dist/roadhog.webp";
          break;
        case "sigma":
          heroImgUrl = "/dist/sigma.webp";
          break;
        case "sojourn":
          heroImgUrl = "/dist/sojourn.webp";
          break;
        case "soldier-76":
          heroImgUrl = "/dist/soldier-76.webp";
          break;
        case "sombra":
          heroImgUrl = "/dist/sombra.webp";
          break;
        case "symmetra":
          heroImgUrl = "/dist/symmetra.webp";
          break;
        case "torbjorn":
          heroImgUrl = "/dist/torbjorn.webp";
          break;
        case "tracer":
          heroImgUrl = "/dist/tracer.webp";
          break;
        case "widowmaker":
          heroImgUrl = "/dist/widowmaker.webp";
          break;
        case "winston":
          heroImgUrl = "/dist/winston.webp";
          break;
        case "wrecking-ball":
          heroImgUrl = "/dist/wrecking-ball.webp";
          break;
        case "zarya":
          heroImgUrl = "/dist/zarya.webp";
          break;
        case "zenyatta":
          heroImgUrl = "/dist/zenyatta.webp";
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
