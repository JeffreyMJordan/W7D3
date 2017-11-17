import { withRouter } from 'react-router-dom';
import { selectAllPokemon, selectPokemonItems } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { connect } from 'react-redux';
import ItemDetail from "./item_detail";

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.entities.items[ownProps.match.params.itemId],
  };
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetail));