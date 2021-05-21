import React from 'react';
import pokemons from '../data'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isfavorite: false,
    }
  }

  handleClick = async () => {
    await this.setState((prev) => ({
      isfavorite: !prev.isfavorite,
    }))
    localStorage.setItem('updatedPokemon', JSON.stringify(pokemons));
  }

  showIcon = () => {
    if(this.state.isfavorite) {
      return <img
      src="https://icons-for-free.com/iconfiles/png/512/christmas+holiday+shain+sky+star+tree+icon-1320185851991915307.png"
      alt="Favorite Icon"
      className="favorite-icon"
      />
    } 
  }

  pokemondata = () => {
    const {match: {params: {id}}} = this.props;
    const pokemonById = pokemons.find(pokemon => pokemon.id === parseInt(id));
    pokemonById.isfavorite = this.state.isfavorite;
    const { name, type, averageWeight: { value, measurementUnit}, moreInfo, foundAt, summary } = pokemonById;
    const locations = foundAt.map((location) => (
      <div key={location.location}>
        <h4>{location.location}</h4>
        <img src={ location.map } alt="mapa com a localização do pokemon"/>
      </div>
    ))
    return (
      <div>
      <header className="details-header">
      { this.showIcon() }
      <h3>{name}</h3>
      <button onClick={this.handleClick}>Favoritar</button>
      </header>
      <p>Tipo: {type}</p>
      <p> Peso Médio: {value + measurementUnit}</p>
      <a href={moreInfo}>Mais informações</a>
      {locations}
      <p>{summary}</p>
      </div>
    )
  }

  render() {
    return (
      <div>
      <h1>Detalhes do Pokemon</h1>
      {this.pokemondata()}
      </div>
    )
      
    
  }
}

export default Details;