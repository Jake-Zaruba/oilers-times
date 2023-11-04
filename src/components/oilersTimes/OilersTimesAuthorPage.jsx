import "./oilersTimes.css";
import { db } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export async function mapLoader() {
  const res = await fetch("https://overfast-api.tekrop.fr/maps");
  const json = await res.json();
  const mapData = json;
  return mapData;
}

export default function oilersTimesAuthorPage() {
  const [title, setTitle] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [backgroundMap, setBackgroundMap] = useState("");
  const navigate = useNavigate();
  const mapData = useLoaderData();

  const store = collection(db, "articles");

  const handleSave = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      body: bodyText,
      map: backgroundMap,
      date: new Date().toLocaleDateString(),
    };
    addDoc(store, data);
    localStorage.removeItem("draft");
    navigate("/oilers-times");
  };

  const mapOptions = mapData.map((gameMap) => {
    return (
      <option value={gameMap.screenshot} key={gameMap.name}>
        {gameMap.name}
      </option>
    );
  });

  useEffect(() => {
    const draft = JSON.parse(localStorage.getItem("draft"));
    if (draft) {
      setBodyText(draft);
    }
  }, []);

  return (
    <div className="author-page-container">
      <form className="oilers-times-form">
        <input
          className="title-input"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="body-input"
          placeholder="Details..."
          value={bodyText}
          onChange={(e) => {
            setBodyText(e.target.value);
            localStorage.setItem("draft", JSON.stringify(e.target.value));
          }}
        />
        <select
          value={backgroundMap}
          onChange={(e) => setBackgroundMap(e.target.value)}
          className="map-select"
        >
          <option value="" disabled selected>
            Select a map:
          </option>
          {mapOptions}
        </select>
        <button className="form-button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}
