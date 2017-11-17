import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  state = {
    searchTerm: '',
  };

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm });
  };

  render() {
    const { title, items, onCheckOff, onRemove } = this.props;
    const { searchTerm } = this.state;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        { this.props.children }
        {items
          .map(item => (
            <Item
              key={item.id}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;
