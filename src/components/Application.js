import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import NewItem from './NewItem';
import Items from './Items';
import Filter from './Filter';

import './Application.css';

const UnpackedItems = inject('itemStore')(
  observer(({ itemStore }) => (
    <Items
      title="Unpacked Items"
      items={itemStore.filteredUnpackedItems}
      total={itemStore.unpackedItemsLength}
    >
  )),
);

const PackedItems = inject('itemStore')(
  observer(({ itemStore }) => (
    <Items
      title="Packed Items"
  )),
);

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <NewItem />
        <UnpackedItems />
        <PackedItems />
      </div>
    );
  }
}

export default Application;
