import { connect } from 'react-redux';
import { createNewPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createNewPokemon: (params) => dispatch(createNewPokemon(params))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonForm));