import React, { Component } from 'react';
import NewItem from './NewItem';
import Items from './Items';

import ItemStore from '../ItemStore';

import './Application.css';

class Application extends Component {
  state = {
    items: ItemStore.getItems(),
  };

  updateItems = () => {
    const items = ItemStore.getItems();
    this.setState({ items });
  }

  componentDidMount() {
    ItemStore.on('change', this.updateItems);
  }

  componentWillUnmount() {
    ItemStore.off('change', this.updateItems);
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
        />
        <Items title="Packed Items" items={packedItems} />
      </div>
    );
  }
}

export default Application;
