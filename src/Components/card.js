import React from "react";

export default function Card({ pokeInfo }) {
  return (
    <div className="div__card main-card">
      <img
        className="img img--pokemon"
        alt="pokemon-graphic"
        src={pokeInfo.pokemonSpriteUrl}
      />
      <p className="p p--description">{pokeInfo.pokemonDescription}</p>
    </div>
  );
}
