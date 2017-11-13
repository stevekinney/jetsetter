import { connect } from 'react-redux';
import values from 'lodash/values';
import Items from '../components/Items';

import { toggleItem, removeItem } from '../actions/items-actions';

const mapStateToProps = ({ items }) => {
  console.log({items, arr: values(items).filter(item => item.packed)});
  return { items: values(items).filter(item => item.packed) };
};

const mapDispatchToProps = dispatch => ({
  onCheckOff(id) {
    dispatch(toggleItem(id));
  },
  onRemove(id) {
    dispatch(removeItem(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
