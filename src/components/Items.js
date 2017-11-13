import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './Items.css';

class Items extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  updateSearchTerm(event) {
    const searchTerm = event.target.value.toLowerCase();
    this.setState({
      searchTerm,
    });
  }

  render() {
    const { title, items, onCheckOff, onRemove } = this.props;
    const { searchTerm } = this.state;
    return (
      <section className="Items">
        <h2>{ title } ({items.length})</h2>
        <input className="Items-searchTerm" value={searchTerm} onChange={this.updateSearchTerm} />
        {items.filter(item => item.value.toLowerCase().includes(searchTerm)).map(item => (
          <Item
            key={item.id}
            onCheckOff={() => onCheckOff(item)}
            onRemove={() => onRemove(item)}
            {...item}
          />
        ))}
      </section>
    );
  }
}

Items.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      packed: PropTypes.bool,
      id: PropTypes.number,
    }),
  ).isRequired,
  onCheckOff: PropTypes.func,
  onRemove: PropTypes.func,
};

Items.defaultProps = {
  onCheckOff: () => {},
  onRemove: () => {},
};

export default Items;
