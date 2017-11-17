import React from "react";
import { Link, Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
   
  }
  
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  render() {
    const { poke, match, items } = this.props;

    if(poke && poke.moves){
      return (
        <section className="pokemon-detail">
          <figure>
            <img src={poke.image_url} alt={poke.name}/>
          </figure>
    
          <ul>
            <li><h2>{poke.name}</h2></li>
            <li>Type: {poke.poke_type}</li>
            <li>Attack: {poke.attack}</li>
            <li>Defense: {poke.defense}</li>
            <li>Moves: {poke.moves.join(", ")}</li>
          </ul>
          <section className="toys">
            <ul className="toy-list">
              {items.map(item => <li key={item.id}>
                <Link to={`/pokemon/${poke.id}/item/${item.id}`}>
                  <img src={item.image_url} alt="Item image"/>
                </Link>
                </li>)}
            </ul>
            <Route path={`/pokemon/${poke.id}/item/:itemId`} component={ItemDetailContainer}/>
          </section>
        </section>
      );
    }else{
      return ("Loading");

    }
  }
} 

export default PokemonDetail;