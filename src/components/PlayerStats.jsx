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
          heroImgUrl = "/ana.webp";
          break;
        case "ashe":
          heroImgUrl = "/ashe.webp";
          break;
        case "baptiste":
          heroImgUrl = "/baptiste.webp";
          break;
        case "bastion":
          heroImgUrl = "/bastion.webp";
          break;
        case "brigitte":
          heroImgUrl = "/brigitte.webp";
          break;
        case "cassidy":
          heroImgUrl = "/cassidy.webp";
          break;
        case "doomfist":
          heroImgUrl = "/doomfist.webp";
          break;
        case "dva":
          heroImgUrl = "/dva.webp";
          break;
        case "echo":
          heroImgUrl = "/echo.webp";
          break;
        case "genji":
          heroImgUrl = "/genji.webp";
          break;
        case "hanzo":
          heroImgUrl = "/hanzo.webp";
          break;
        case "illari":
          heroImgUrl = "/illari.webp";
          break;
        case "junker-queen":
          heroImgUrl = "/junker-queen.webp";
          break;
        case "junkrat":
          heroImgUrl = "/junkrat.webp";
          break;
        case "kiriko":
          heroImgUrl = "/kiriko.webp";
          break;
        case "lifeweaver":
          heroImgUrl = "/lifeweaver.webp";
          break;
        case "lucio":
          heroImgUrl = "/lucio.webp";
          break;
        case "mei":
          heroImgUrl = "/mei.webp";
          break;
        case "mercy":
          heroImgUrl = "/mercy.webp";
          break;
        case "moira":
          heroImgUrl = "/moira.webp";
          break;
        case "orisa":
          heroImgUrl = "/orisa.webp";
          break;
        case "pharah":
          heroImgUrl = "/pharah.webp";
          break;
        case "ramattra":
          heroImgUrl = "/ramattra.webp";
          break;
        case "reaper":
          heroImgUrl = "/reaper.webp";
          break;
        case "reinhardt":
          heroImgUrl = "/reinhardt.webp";
          break;
        case "roadhog":
          heroImgUrl = "/roadhog.webp";
          break;
        case "sigma":
          heroImgUrl = "/sigma.webp";
          break;
        case "sojourn":
          heroImgUrl = "/sojourn.webp";
          break;
        case "soldier-76":
          heroImgUrl = "/soldier-76.webp";
          break;
        case "sombra":
          heroImgUrl = "/sombra.webp";
          break;
        case "symmetra":
          heroImgUrl = "/symmetra.webp";
          break;
        case "torbjorn":
          heroImgUrl = "/torbjorn.webp";
          break;
        case "tracer":
          heroImgUrl = "/tracer.webp";
          break;
        case "widowmaker":
          heroImgUrl = "/widowmaker.webp";
          break;
        case "winston":
          heroImgUrl = "/winston.webp";
          break;
        case "wrecking-ball":
          heroImgUrl = "/wrecking-ball.webp";
          break;
        case "zarya":
          heroImgUrl = "/zarya.webp";
          break;
        case "zenyatta":
          heroImgUrl = "/zenyatta.webp";
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
