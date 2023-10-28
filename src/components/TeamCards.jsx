import { useLoaderData, Link } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import "./teamCards.css";

export async function playerLoader() {
  const players = await Promise.all([
    //FETCH JAKE PROFILE
    fetch(`https://overfast-api.tekrop.fr/players/Luden-11761/summary`).then(
      (res) => res.json().then((data) => data)
    ),
    //FETCH SETH
    fetch(
      `https://overfast-api.tekrop.fr/players/RickeyRansom-1434/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH ERIK
    fetch(
      `https://overfast-api.tekrop.fr/players/TrillCosby-11719/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH SETH ALT
    fetch(
      `https://overfast-api.tekrop.fr/players/BankRobber-11133/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH ERIK ALT
    fetch(`https://overfast-api.tekrop.fr/players/SLEVZ-11689/summary`).then(
      (res) => res.json().then((data) => data)
    ),
    //FETCH JAKE
    fetch(`https://overfast-api.tekrop.fr/players/Luden-11761/summary`).then(
      (res) => res.json().then((data) => data)
    ),
    //FETCH JAKE
    fetch(`https://overfast-api.tekrop.fr/players/Luden-11761/summary`).then(
      (res) => res.json().then((data) => data)
    ),
    //FETCH JAKE
    fetch(`https://overfast-api.tekrop.fr/players/Luden-11761/summary`).then(
      (res) => res.json().then((data) => data)
    ),
    //FETCH JAKE
    fetch(`https://overfast-api.tekrop.fr/players/Luden-11761/summary`).then(
      (res) => res.json().then((data) => data)
    ),
    //FETCH JAKE
    fetch(`https://overfast-api.tekrop.fr/players/Luden-11761/summary`).then(
      (res) => res.json().then((data) => data)
    ),
    //FETCH DYLAN
    // fetch(
    //   `https://overfast-api.tekrop.fr/players/dylaodylao-1369/summary`
    // ).then((res) => res.json().then((data) => data)),
    // //FETCH RYAN
    // fetch(`https://overfast-api.tekrop.fr/players/DALEDANTONY-1212/summary`).then(
    //   (res) => res.json().then((data) => data)
    // ),
    // //FETCH ABBY
    // fetch(`https://overfast-api.tekrop.fr/players/Airwilda-1596/summary`).then(
    //   (res) => res.json().then((data) => data)
    // ),
    // //FETCH ISAAC
    // fetch(`https://overfast-api.tekrop.fr/players/itwilda-1717/summary`).then(
    //   (res) => res.json().then((data) => data)
    // ),
    //FETCH TANNER
    // fetch(`https://overfast-api.tekrop.fr/players/TnTaves-1528/summary`).then(
    //   (res) => res.json().then((data) => data)
    // ),
    //FETCH TANNER
    // fetch(`https://overfast-api.tekrop.fr/players/TnTaves-1528/summary`).then(
    //   (res) => res.json().then((data) => data)
    // ),
  ]);

  const stats = await Promise.all([
    //FETCH JAKE STATS
    fetch(
      `https://overfast-api.tekrop.fr/players/Luden-11761/stats/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH SETH STATS
    fetch(
      `https://overfast-api.tekrop.fr/players/RickeyRansom-1434/stats/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH ERIK STATS
    fetch(
      `https://overfast-api.tekrop.fr/players/TrillCosby-11719/stats/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH ERIK STATS
    fetch(
      `https://overfast-api.tekrop.fr/players/TrillCosby-11719/stats/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH ERIK STATS
    fetch(
      `https://overfast-api.tekrop.fr/players/TrillCosby-11719/stats/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH JAKE STATS
    fetch(
      `https://overfast-api.tekrop.fr/players/Luden-11761/stats/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH JAKE STATS
    fetch(
      `https://overfast-api.tekrop.fr/players/Luden-11761/stats/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH JAKE STATS
    fetch(
      `https://overfast-api.tekrop.fr/players/Luden-11761/stats/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH JAKE STATS
    fetch(
      `https://overfast-api.tekrop.fr/players/Luden-11761/stats/summary`
    ).then((res) => res.json().then((data) => data)),
    //FETCH JAKE STATS
    fetch(
      `https://overfast-api.tekrop.fr/players/Luden-11761/stats/summary`
    ).then((res) => res.json().then((data) => data)),
  ]);

  const resolvedPlayers = await Promise.resolve(players);
  const resolvedStats = await Promise.resolve(stats);

  return [resolvedPlayers, resolvedStats];
}

export default function TeamCards() {
  const [players, stats] = useLoaderData();

  const teamOneStats = stats.slice(0, 5);
  const { general } = teamOneStats;
  const teamTwoStats = stats.slice(5, 10);

  const teamOne = players.slice(0, 5);
  const teamTwo = players.slice(5, 10);

  const teamOneMappedStats = teamOneStats.map((item) => {
    return item.general;
  });

  const teamTwoMappedStats = teamTwoStats.map((item) => {
    return item.general;
  });

  const houstonOilersStats = teamOneStats.map((item) => {
    return item.general.winrate;
  });

  const memphisRobbersStats = teamTwoStats.map((item) => {
    return item.general.winrate;
  });

  const houstonOilersWinrate = parseFloat(
    0.2 *
      houstonOilersStats.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
  ).toFixed(2);

  const memphisRobbersWinrate = parseFloat(
    0.2 *
      memphisRobbersStats.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
  ).toFixed(2);

  const houstonOilers = teamOne.map((player, index) => {
    return (
      <PlayerCard player={player} winrate={teamOneMappedStats[index].winrate}>
        <div
          className={
            teamOneMappedStats[index].winrate >
            teamTwoMappedStats[index].winrate
              ? "team-card-line team-card-line-green"
              : "team-card-line team-card-line-red"
          }
        ></div>
      </PlayerCard>
    );
  });

  const memphisRobbers = teamTwo.map((player, index) => {
    return (
      <>
        <PlayerCard
          player={player}
          winrate={teamTwoMappedStats[index].winrate}
        />
      </>
    );
  });

  return (
    <div className="team-cards-page-container">
      <div className="team-cards-teams-container">
        <div className="team-cards-container">{houstonOilers}</div>
        {/* <div className="teams-text-container">
          <h1 className="teams-text teams-text-header">HOUSTON OILERS</h1>
          <h3 className="teams-text teams-text-subtext">VS</h3>
          <h1 className="teams-text teams-text-header">MEMPHIS ROBBERS</h1>
        </div> */}
        <div className="team-cards-container">{memphisRobbers}</div>
      </div>
      <div
        className="stat-favor-indicator"
        style={
          houstonOilersWinrate > memphisRobbersWinrate
            ? {
                top: "4rem",
                background:
                  "linear-gradient(to bottom, #95CC59, #95CC59 10%,transparent 90%,transparent)",
                opacity: "70%",
              }
            : {
                bottom: "0rem",
                background:
                  "linear-gradient(to top, #B71138, #B71138 10%,transparent 90%,transparent)",
                opacity: "70%",
              }
        }
      ></div>
    </div>
  );
}
