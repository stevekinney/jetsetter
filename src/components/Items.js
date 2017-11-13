import React, { Component } from 'react';
import Item from './Item';
import './Items.css';

class Items extends Component {
  render() {
    const { title, items, onCheckOff, onRemove } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        { this.props.render && this.props.render() }
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
