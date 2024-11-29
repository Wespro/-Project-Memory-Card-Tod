import React from "react";
import "../cssFiles/cards.css";
export default function Card({ text, pokeNum, onClick }) {
  return (
    <div datakey={text} onClick={onClick} className="card">
      <div datakey={text} className="imgCont">
        <img
          datakey={text}
          className={"cardImg" + " " + "cardImg" + pokeNum}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeNum}.svg`}
          alt={text + "Image"}
        />
      </div>
      <h2 datakey={text} className="cardName">
        {text}
      </h2>
    </div>
  );
}
