export async function getPokemonList() {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  ).then((res) => res.json());
  return data.results;
}

export function getPokemonSpriteUrl(idx) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`;
}
