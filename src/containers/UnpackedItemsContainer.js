import { connect } from 'react-redux';
import Items from '../components/Items';

import {
  toggleItem,
  removeItem,
} from '../actions/items-actions'

const mapStateToProps = ({ items, filter }) => {
  return { items: items.present.filter(item => !item.packed && item.value.includes(filter.unpackedItemsFilter)) };
};

const mapDispatchToProps = (dispatch) => ({
  onCheckOff(id) {
    dispatch(toggleItem(id))
  },
  onRemove(id) {
    dispatch(removeItem(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
