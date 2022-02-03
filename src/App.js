import React, { useEffect, useState } from "react";
import {
  getPokemonSpriteUrl,
  getPokemonDescription,
  getPokemonList,
} from "./api/utils";
import Card from "./Components/card";

// async function logData() {
//   const list = await getPokemonList();
//   console.log(list);

//   const pokemon = await getPokemonDescription();
//   console.log(pokemon);
// }

// logData();

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDescription, setPokemonDescription] = useState(
    getPokemonDescription
  );
  const [pokemonSpriteUrl, setPokemonSpriteUrl] = useState(getPokemonSpriteUrl);

  useEffect(() => {
    async function getData() {
      const apiData = await getPokemonList();

      setPokemonList(apiData);
    }

    getData();
  }, []);

  const pokemonNames = pokemonList.map((pokemon, idx) => {
    return (
      <option key={idx} value={idx + 1}>
        {pokemon.name}
      </option>
    );
  });

  function setPokemonInfo(e) {
    setPokemonDescription(getPokemonDescription(e));
    setPokemonSpriteUrl(getPokemonSpriteUrl(e));
    console.log([pokemonDescription, pokemonSpriteUrl]);
    return [pokemonDescription, pokemonSpriteUrl];
  }

  return (
    <div className="app">
      <select
        id="pokemonSelect"
        onChange={(e) => setPokemonInfo(e.target.value)}
      >
        {pokemonNames}
      </select>
      <Card />
    </div>
  );
}
