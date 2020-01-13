import { connect } from 'react-redux';
import ListCocktail from './ListCocktail';
import { loadDataListCocktail } from '../../store/actions';

function mapState2Props(state) {
  return {
    listCocktail: state.listCocktail,
    listType: state.listType,
    error: state.error,
  };
}

const mapDispatch2Props = {
  loadDataListCocktail,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(ListCocktail);

export { Enhanced as ListCocktail };