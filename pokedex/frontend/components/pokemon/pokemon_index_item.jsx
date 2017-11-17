import React from "react";
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({poke}) => {
  return (
  <li className="pokemon-index-item">
    <Link to={`/pokemon/${poke.id}`}>
      {poke.name}
      <img src={poke.image_url} alt='Poke image'/>
    </Link>
  </li>);
};

export default PokemonIndexItem;