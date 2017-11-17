import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import {merge} from "lodash";

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
    let newState = merge({}, state);
    newState.pokeDisplay = action.payload.pokemon.id;
    return newState;
  default:
    return state;
  }
};

export default uiReducer;