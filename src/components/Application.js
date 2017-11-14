import React, { Component } from 'react';
import NewItem from './NewItem';
import Items from './Items';

import ItemStore from '../ItemStore';

import './Application.css';

class Application extends Component {
  listener;
  state = {
    items: ItemStore.getItems(),
  };

  componentDidMount() {
    this.listener = ItemStore.on('change', () => {
      const items = ItemStore.getItems();
      this.setState({ items });
    });
  }

  componentWillUnmount() {
    ItemStore.off('change', this.listener);
  }

  render() {
    const { items } = this.state;
    const unpackedItems = items.filter(item => !item.packed);
    const packedItems = items.filter(item => item.packed);

    return (
      <div className="Application">
        <NewItem />
        <Items
          title="Unpacked Items"
          items={unpackedItems}
          onCheckOff={this.markAsPacked}
          onRemove={this.removeItem}
        />
        <Items title="Packed Items" items={packedItems} />
      </div>
    );
  }
}

export default Application;
