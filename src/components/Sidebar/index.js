import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { loadDataListType, saveListType} from '../../store/actions';

function mapState2Props(state) {
  return {
    listType: state.listType,
  };
}

const mapDispatch2Props = {
  loadDataListType,
  saveListType,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(Sidebar);

export { Enhanced as Sidebar };