import { connect } from 'react-redux';

import Filter from '../components/Filter';
import { updateUnpackedItemsFilter } from '../actions/filter-actions';

const mapStateToProps = ({ filter }) => {
  return {
    value: filter.unpackedItemsFilter,
  };
};

const mapDispatchToProps = dispatch => ({
  updateFilter(value) {
    dispatch(updateUnpackedItemsFilter(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
