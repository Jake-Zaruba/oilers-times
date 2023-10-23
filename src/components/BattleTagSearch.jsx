import { useState } from "react";
import PlayerCard from "./PlayerCard";

export default function BattleTagSearch() {
  const [playerData, setPlayerData] = useState({});
  const [playerStats, setPlayerStats] = useState({});
  const [battleTag, setBattleTag] = useState("");
  const [battleId, setBattleId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);

  async function handleSearch() {
    setIsLoading(true);
    //FETCH PLAYER SUMMARY
    const resData = await fetch(
      `https://overfast-api.tekrop.fr/players/${battleTag}-${battleId}/summary`
    ).then((res) => res.json());
    setPlayerData(resData);

    //FETCH PLAYER STATS
    const resStats = await fetch(
      `https://overfast-api.tekrop.fr/players/${battleTag}-${battleId}/stats/summary`
    ).then((res) => res.json());
    setPlayerStats(resStats);
    setIsLoading(false);
    setDataReceived(true);
    console.log(battleTag);
  }

  return (
    <>
      <label>BattleTag</label>
      <input value={battleTag} onChange={(e) => setBattleTag(e.target.value)} />
      <label>BattleId</label>
      <input value={battleId} onChange={(e) => setBattleId(e.target.value)} />
      <button onClick={() => handleSearch()}>Search BattleTag</button>
      {!dataReceived ? (
        <h1>Search for a BattleTag</h1>
      ) : (
        <PlayerCard player={playerData} />
      )}
    </>
  );
}
