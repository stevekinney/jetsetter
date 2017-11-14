import { connect } from 'react-redux';
import Items from '../components/Items';

import {
  toggleItem,
  removeItem,
} from '../actions/items-actions'

const mapStateToProps = ({ items, filter }) => {
  return { items: items.filter(item => !item.packed && item.value.includes(filter.unpackedItemsFilter)) };
};

const mapDispatchToProps = dispatch => ({
  onCheckOff(item) {
    dispatch(toggleItem(item));
  },
  onRemove(item) {
    dispatch(removeItem(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
