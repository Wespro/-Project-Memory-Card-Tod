import React, { useState } from "react";
import "../cssFiles/header.css";
export default function Header({ score, bestScore }) {
  const [howToPlayOn, setHowToPlayOn] = useState(false);
  function handleHowTopPlay(e) {
    const howToPlayP = document.querySelector(".howToPlayP");
    console.log(howToPlayP);
    if (howToPlayP.style.display === "none") {
      howToPlayP.style.display = "block";
      setHowToPlayOn(true);
    } else {
      howToPlayP.style.display = "none";
      setHowToPlayOn(false);
    }
  }
  return (
    <header>
      <h1 className="HeaderH1">Void's Memory Game</h1>
      <div className="gameInfo">
        <div className="scoreCont">
          <h2 className="score">Score: {score} </h2>
          <h2 className="bestScore">Best score: {bestScore}</h2>
        </div>
        <div className="howToPlay">
          <button onClick={handleHowTopPlay} className="howToPlayBtn">
            How To Play
          </button>
          <h2 style={{ display: "none" }} className="howToPlayP">
            Click a card only once to earn pionts.
          </h2>
        </div>
      </div>
    </header>
  );
}
