import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import pokemons from '../data';
import Pokedex from './Pokedex';
import Details from './Details'
import About from './About';
import NotFound from './NotFound';
import Favorites from './Favorites'

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> Sobre </Link>
        <Link to="/favorites"> Favoritos </Link>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <Pokedex pokemons={pokemons} /> } />
          <Route path="/pokemon/:id" render={(props) => <Details {...props} /> } />
          <Route path="/about" render={() => <About /> } />
          <Route path="/favorites" render={() => <Favorites pokemons={pokemons} /> }/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Home ;