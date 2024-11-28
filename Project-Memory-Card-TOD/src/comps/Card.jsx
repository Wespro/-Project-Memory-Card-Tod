import React from "react";
import "../cssFiles/cards.css";
export default function Card({ text, pokeNum }) {
  return (
    <div className="card">
      <div className="imgCont">
        <img
          className="cardImg"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeNum}.svg`}
          alt={text + "Image"}
        />
      </div>
      <h2 className="cardName">{text}</h2>
    </div>
  );
}
