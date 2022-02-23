import React from 'react';

export default function Select({pokeList}) {
  return pokeList.map((pokemon, idx) => {
    return (
      <option key={idx} value={idx + 1}>
        {pokemon.name}
      </option>
    );
  });
};
