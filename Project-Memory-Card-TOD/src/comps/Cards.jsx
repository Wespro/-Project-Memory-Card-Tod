import React, { useEffect, useState, useId } from "react";
import Card from "./Card";
import { data } from "./tmepData";
import "../cssFiles/cards.css";
export default function Cards() {
  const [pokemonList, setPokemonList] = useState(null);
  useEffect(() => {
    let connect = true;
    fetch("https://pokeapi.co/api/v2/pokemon").then((res) =>
      res.json().then((data) => {
        if (connect) {
          let myPokemonList = data.results.filter((pokemon, index) => {
            if (index < 10) {
              return pokemon;
            }
          });
          setPokemonList(myPokemonList);
        }
      })
    );

    return () => {
      connect = false;
    };
  }, []);

  function CardsDisplay() {
    if (pokemonList) {
      const cards = pokemonList.map((card, index) => (
        <Card
          key={card.name}
          text={card.name}
          pokeNum={index + 1}
          className={card.name}
        />
      ));
      console.log(pokemonList);
      return cards;
    }
  }
  return <div className="Cards">{CardsDisplay()}</div>;
}
