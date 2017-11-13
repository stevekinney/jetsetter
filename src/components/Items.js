import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './Items.css';

class Items extends Component {
  render() {
    console.log({items});
    const { title, items, onCheckOff, onRemove, searchTerm, updateSearchTerm } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        {/* <input
          className="Items-searchTerm"
          value={searchTerm}
          onChange={updateSearchTerm}
        /> */}
        {items.map(item => (
            <Item
              key={item.id}
              onCheckOff={() => onCheckOff(item.id)}
              onRemove={() => onRemove(item.id)}
              {...item}
            />
          ))}
      </section>
    );
  }
}

export default Items;
