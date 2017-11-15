import React, { Component } from 'react';

import ItemStore from '../ItemStore';

export default class WithItems extends Component {
  state = {
    items: ItemStore.getItems(),
  };

  updateItems = () => {
    const items = ItemStore.getItems();
    this.setState({ items });
  };

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

    return <div>{this.props.render({ unpackedItems, packedItems })}</div>;
  }
}
