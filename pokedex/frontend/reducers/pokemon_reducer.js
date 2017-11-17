import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import {merge} from "lodash";
const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    
    case RECEIVE_SINGLE_POKEMON:
      let newState = merge({}, state);
      newState[action.payload.pokemon.id] = action.payload.pokemon;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;