import { useState } from "react";
import HeroModal from "./HeroModal";
import "./heroCard.css";

export default function HeroCard({ hero, battletag, heroImage }) {
  const [heroName, heroStats] = hero;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onMouseOver={() => setShowModal((prev) => !prev)}
        onMouseOut={() => setShowModal((prev) => !prev)}
        className="hero-modal-container"
      >
        <img style={{ height: "10rem", width: "10rem" }} src={heroImage} />

        {showModal ? (
          <HeroModal
            heroImage={heroImage}
            setShowModal={setShowModal}
            heroName={heroName}
            heroStats={heroStats}
            battletag={battletag}
          />
        ) : null}
      </div>
      <h2
        className="hero-name-banner"
        style={
          heroName.length > 9
            ? { fontSize: "1.1rem", lineHeight: "2" }
            : { fontSize: "1.5rem" }
        }
      >
        {heroName.toUpperCase()}
      </h2>
    </>
  );
}
