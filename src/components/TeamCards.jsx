import { useLoaderData, Link } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import "./teamCards.css";

export async function playerLoader() {
  const players = await Promise.all([
    //FETCH JAKE
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
  ]);

  const resolvedPlayers = await Promise.resolve(players);

  return resolvedPlayers;
}

export default function TeamCards() {
  const players = useLoaderData();
  const urls = ["Luden-11761", "RickeyRansom-1434", "TrillCosby-11719"];
  const [jake, seth, erik] = players;
  console.log(jake, seth, erik);

  const oilers = players.map((player) => {
    return <PlayerCard player={player} />;
  });

  return (
    <div className="team-cards-page-container">
      <div className="team-cards-container">{oilers}</div>
    </div>
  );
}
