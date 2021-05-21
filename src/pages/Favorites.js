import React from 'react';
import Pokemon from '../components/Pokemon';
import './pokedex.css';

class Favorites extends React.Component {
    
    fetchFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('updatedPokemon'));
        // const { pokemons } = this.props;
        if ( favorites ) {
        const filteredPokemons = favorites.filter((pokemon) => pokemon.isfavorite === true);
            if ( filteredPokemons.length > 0 ) {
                return filteredPokemons.map((pokemon) => <Pokemon key={pokemon.name} pokemon={pokemon}/>)
            }
        } return <p>Não há pokemons favoritos</p>
    }

    render() {
        return (
            <div>
            <h1>Favoritos</h1>
            {this.fetchFavorite()}
            </div>
        )
    }
}

export default Favorites;