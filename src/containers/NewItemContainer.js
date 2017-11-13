import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewItem from '../components/NewItem';

import { updateNewItemValue } from '../actions/new-item-actions.js';
import { addNewItem } from '../actions/items-actions';

const mapStateToProps = ({ newItemValue }) => ({ value: newItemValue });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewItemValue,
    addNewItem
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
