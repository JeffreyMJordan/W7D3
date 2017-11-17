import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route, Link } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonForm from './pokemon_form';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div className="pokedex">
        <Link to='/'>Home</Link>
        <Link to='/form'>Create New Pokemon</Link>
        <ul>
          {
            this.props.pokemon.map(poke => (
              <PokemonIndexItem key={poke.id} poke={poke} />
            ))
          }
        </ul>
        <Route exact path='/pokemon/:pokemonId' component={PokemonDetailContainer}/>
        <Route exact path='/form' component={PokemonForm}/>
      </div>
    );
  }
}

export default PokemonIndex;