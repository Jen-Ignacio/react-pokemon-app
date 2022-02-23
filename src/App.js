import React, { useCallback, useEffect, useState } from "react";
import { getPokemonSpriteUrl, getPokemonList } from "./api/utils";

import Header from "./Components/header";
import Select from "./Components/select";
import Card from "./Components/card";

export default function App() {
  const [pokemonList, setPokemonList] = useState([0]);
  const [pokemonSpriteUrl, setPokemonSpriteUrl] = useState(null);
  const [pokemonDescription, setPokemonDescription] = useState(null);

  const setPokeInfo = useCallback(async (e) => {
    setPokemonSpriteUrl(getPokemonSpriteUrl(e));

    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${e}/`
    ).then((res) => res.json());
    return setPokemonDescription(
      pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ")
    );
  }, []);

  useEffect(() => {
    async function getData() {
      const apiData = await getPokemonList();

      setPokemonList(apiData);
    }
    getData();
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <select
          id="pokemonSelect"
          className="select main-select"
          onChange={(e) => setPokeInfo(e.target.value)}
        >
          <option defaultChecked>Select a pokemon...</option>
          <Select pokeList={pokemonList} />
        </select>
        {pokemonDescription === null ? (
          <></>
        ) : (
          <Card pokeInfo={{ pokemonDescription, pokemonSpriteUrl }} />
        )}
      </main>
    </div>
  );
}
