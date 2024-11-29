import React, { useEffect, useState, useId } from "react";
import Card from "./Card";
import { data } from "./tmepData";
import "../cssFiles/cards.css";
// import "../assets/sounds/correct-6033";
export default function Cards({ score, setScore, setBestScore }) {
  const [pokemonListInitial, setPokemonListInitial] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  //////////////////////////////////////////
  useEffect(() => {
    let connect = true;
    fetch("https://pokeapi.co/api/v2/pokemon").then((res) =>
      res.json().then((data) => {
        if (connect) {
          let myPokemonList = data.results.filter((pokemon, index) => {
            if (index < 11) {
              return (pokemon.initalNum = index);
            }
          });
          setPokemonList(myPokemonList);
          setPokemonListInitial(myPokemonList);
        }
      })
    );

    return () => {
      connect = false;
    };
  }, []);
  //////////////////////////////////////////
  function shuffelCardsEvent(e) {
    const newCards = [...pokemonList];
    for (let i = 0; i < newCards.length; i++) {
      let random = Math.floor(Math.random() * pokemonList.length);
      [newCards[i], newCards[random]] = [newCards[random], newCards[i]];
    }

    if (!isSelected(e)) {
      setPokemonList(newCards);
    } else {
      resetGame();
    }
  }
  //////////////////////////////////////////
  function isSelected(e) {
    const cardKey = e.target.attributes.datakey.value;
    if (!selectedCards.includes(cardKey)) {
      setSelectedCards([...selectedCards, cardKey]);
      setScore((pervS) => {
        return pervS + 1;
      });
      playSound(true);
      return false;
    }
    playSound(false);
    return true;
  }
  //////////////////////////////////////////
  function resetGame() {
    console.log("here");
    setSelectedCards([]);
    setPokemonList(pokemonListInitial);
    setBestScore((prevScore) => (prevScore > score ? prevScore : score));
    setScore(0);
    setSelected(null);
  }
  //////////////////////////////////////////
  function playSound(response) {
    if (response) {
      const correct = new Audio("../assets/sounds/correct-6033.mb3");
      console.log(correct);
      correct.play;
    } else {
      const wrong = new Audio("../assets/sounds/wrong.mp3");
      wrong.play;
    }
  }
  //////////////////////////////////////////
  function CardsDisplay() {
    if (pokemonList) {
      const cards = pokemonList.map((card, index) => (
        <Card
          onClick={function (e) {
            setSelected((s) => {
              return e.target.classList[1];
            });
            shuffelCardsEvent(e);
          }}
          key={card.name}
          text={card.name}
          pokeNum={card.initalNum}
          className={card.name}
        />
      ));
      return cards;
    }
  }
  return <div className="Cards">{CardsDisplay()}</div>;
}
