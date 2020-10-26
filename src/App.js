import React, { useState, useEffect } from 'react';
import { Detail } from './Detail';

export const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results);
        setPokemons(json.results);
      });
  }, []);

  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <button
              onClick={() => {
                setSelectedPokemon(pokemon);
                console.log(pokemon);
              }}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedPokemon && (
        <Detail name={selectedPokemon.name} url={selectedPokemon.url} />
      )}
    </div>
  );
};
