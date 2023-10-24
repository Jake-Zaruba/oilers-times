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
          heroImgUrl = "../src/assets/ana.webp";
          break;
        case "ashe":
          heroImgUrl = "../src/assets/ashe.webp";
          break;
        case "baptiste":
          heroImgUrl = "../src/assets/baptiste.webp";
          break;
        case "bastion":
          heroImgUrl = "../src/assets/bastion.webp";
          break;
        case "brigitte":
          heroImgUrl = "../src/assets/brigitte.webp";
          break;
        case "cassidy":
          heroImgUrl = "../src/assets/cassidy.webp";
          break;
        case "doomfist":
          heroImgUrl = "../src/assets/doomfist.webp";
          break;
        case "dva":
          heroImgUrl = "../src/assets/dva.webp";
          break;
        case "echo":
          heroImgUrl = "../src/assets/echo.webp";
          break;
        case "genji":
          heroImgUrl = "../src/assets/genji.webp";
          break;
        case "hanzo":
          heroImgUrl = "../src/assets/hanzo.webp";
          break;
        case "illari":
          heroImgUrl = "../src/assets/illari.webp";
          break;
        case "junker-queen":
          heroImgUrl = "../src/assets/junker-queen.webp";
          break;
        case "junkrat":
          heroImgUrl = "../src/assets/junkrat.webp";
          break;
        case "kiriko":
          heroImgUrl = "../src/assets/kiriko.webp";
          break;
        case "lifeweaver":
          heroImgUrl = "../src/assets/lifeweaver.webp";
          break;
        case "lucio":
          heroImgUrl = "../src/assets/lucio.webp";
          break;
        case "mei":
          heroImgUrl = "../src/assets/mei.webp";
          break;
        case "mercy":
          heroImgUrl = "../src/assets/mercy.webp";
          break;
        case "moira":
          heroImgUrl = "../src/assets/moira.webp";
          break;
        case "orisa":
          heroImgUrl = "../src/assets/orisa.webp";
          break;
        case "pharah":
          heroImgUrl = "../src/assets/pharah.webp";
          break;
        case "ramattra":
          heroImgUrl = "../src/assets/ramattra.webp";
          break;
        case "reaper":
          heroImgUrl = "../src/assets/reaper.webp";
          break;
        case "reinhardt":
          heroImgUrl = "../src/assets/reinhardt.webp";
          break;
        case "roadhog":
          heroImgUrl = "../src/assets/roadhog.webp";
          break;
        case "sigma":
          heroImgUrl = "../src/assets/sigma.webp";
          break;
        case "sojourn":
          heroImgUrl = "../src/assets/sojourn.webp";
          break;
        case "soldier-76":
          heroImgUrl = "../src/assets/soldier-76.webp";
          break;
        case "sombra":
          heroImgUrl = "../src/assets/sombra.webp";
          break;
        case "symmetra":
          heroImgUrl = "../src/assets/symmetra.webp";
          break;
        case "torbjorn":
          heroImgUrl = "../src/assets/torbjorn.webp";
          break;
        case "tracer":
          heroImgUrl = "../src/assets/tracer.webp";
          break;
        case "widowmaker":
          heroImgUrl = "../src/assets/widowmaker.webp";
          break;
        case "winston":
          heroImgUrl = "../src/assets/winston.webp";
          break;
        case "wrecking-ball":
          heroImgUrl = "../src/assets/wrecking-ball.webp";
          break;
        case "zarya":
          heroImgUrl = "../src/assets/zarya.webp";
          break;
        case "zenyatta":
          heroImgUrl = "../src/assets/zenyatta.webp";
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
        <Loading />
      </>
    );
}
