import { connect } from 'react-redux';
import NewItem from '../components/NewItem';

import { updateNewItemValue } from '../actions/new-item-actions.js';
import { addNewItem } from '../actions/items-actions';

const mapStateToProps = ({ newItemValue }) => ({ value: newItemValue });

const mapDispatchToProps = dispatch => ({
  handleChange(event) {
    const value = event.target.value;
    dispatch(updateNewItemValue(value));
  },
  handleSubmit(value) {
    dispatch(addNewItem(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
