import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom'

class Pokemon extends React.Component {
 
  showIcon = () => {
    if(this.props.pokemon.isfavorite) {  
      return <img
      src="https://icons-for-free.com/iconfiles/png/512/christmas+holiday+shain+sky+star+tree+icon-1320185851991915307.png"
      alt="Favorite Icon"
      className="favorite-icon"
      />
    }
  }

  render() {
    const {name, type, averageWeight, image ,id} = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link to={`/pokemon/${id}`}>Mais infos</Link>
        </div>
        <div className="pokemon-card-media">
        {this.showIcon()}
        <img src={image} alt={`${name} sprite`} />
        </div>
      </div>
    );
  }
}

export default Pokemon;