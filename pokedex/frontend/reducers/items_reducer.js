import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import {merge} from "lodash";

const itemsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    
    case RECEIVE_SINGLE_POKEMON:
      let newState = merge({}, state);
      action.payload.items.forEach((item) => {
        newState[item.id] = item;
      });
      return newState;

    default:
      return state;
  }
};

export default itemsReducer;