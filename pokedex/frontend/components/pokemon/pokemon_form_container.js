import { connect } from 'react-redux';
import { createNewPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';


const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  createNewPokemon: () => dispatch(createNewPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);