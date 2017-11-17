import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

export const selectPokemonItems = state => {
  const pokemon = state.entities.pokemon[state.ui.pokeDisplay];
  if (pokemon)
    return pokemon.item_ids.map(id => state.entities.items[id]);
  else
    return [];
};