import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  state = {
    searchTerm: ''
  };

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm });
  };

  render() {
    const { title, items, onRemove, onToggle } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={this.state.searchTerm} onChange={this.updateSearchTerm} />
        {items
          .filter(item =>
            // Hmm… this needs some work.
            item.value.toLowerCase().includes(this.state.searchTerm.toLowerCase()),
          )
          .map(item => (
            <Item
              key={item.id}
              onToggle={onToggle}
              onRemove={() => onRemove(item)}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;
