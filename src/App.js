import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [favoritePokemon, setFavoritePokemon] = useState([])

  useEffect(()=>{
      axios.get('https://pokeapi.co/api/v2/pokemon')
          .then(response=>{
            console.log(response.data.results)
            setPokemonData(response.data.results)
          })
  }, []); 

  const handleAddToFavorite = (pokemon, index) => {
    alert('you added pokemon to favorite')
    console.log(pokemon)
    const newPokemonData = pokemonData
    newPokemonData.splice(index, 1)

    setPokemonData(newPokemonData)
    setFavoritePokemon([...favoritePokemon, pokemon])
  }

  const handleRemoveFromFavorites = (pokemon, index) => {
    alert('removing from favorites')
    const newPokemonFavorite = favoritePokemon
    newPokemonFavorite.splice(index, 1)

    setFavoritePokemon(newPokemonFavorite)
    setPokemonData([...pokemonData, pokemon])
  }


  return(
      <div style={{display:'flex', flexDirection: 'row'}}>
        <div style={{flex: 1}}>
          {pokemonData.map((pokemon, index) => {
              return (
              <p key={pokemon.name}>
                {pokemon.name}
                <button onClick={() => handleAddToFavorite(pokemon, index)}>
                  add to favorites
                </button>
              </p> 
              )
          })}
        </div>
        <div  style={{flex: 1}}>
          <p>These are my favorite pokemon</p>
          {
            favoritePokemon.map((pokemon, index) => {
              return (
                <div key={pokemon.name}>
                  <p>
                    {pokemon.name} 
                  </p>
                  <button onClick={() => handleRemoveFromFavorites(pokemon, index)}>
                    remove from favorites
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

export default App;
