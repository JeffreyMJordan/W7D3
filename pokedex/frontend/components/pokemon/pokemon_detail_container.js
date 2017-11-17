import { withRouter } from 'react-router-dom';
import { selectAllPokemon, selectPokemonItems } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';
import PokemonDetail from "./pokemon_detail";

const mapStateToProps = state => {
  return {
    poke: state.entities.pokemon[state.ui.pokeDisplay],
    items: selectPokemonItems(state)
  };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));