import React from "react";
import "../cssFiles/header.css";
export default function Header() {
  return (
    <header>
      <h1 className="HeaderH1">Void's Memory Game</h1>
      <div className="gameInfo">
        <div className="scoreCont">
          <h2 className="score">Score: 0 </h2>
          <h2 className="bestScore">Best score: 0</h2>
        </div>
        <div className="howToPlay">
          <button className="howToPlayBtn">How To Play</button>
          <h2 className="howToPlayP">
            Get points by clicking on an image but don't click on any more than
            once!
          </h2>
        </div>
      </div>
    </header>
  );
}
