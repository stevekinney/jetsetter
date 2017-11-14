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
      <Filter
        value={itemStore.unpackedItemsFilter}
        onChange={itemStore.updateUnpackedItemsFilter}
      />
    </Items>
  )),
);

const PackedItems = inject('itemStore')(
  observer(({ itemStore }) => (
    <Items
      title="Packed Items"
      items={itemStore.filteredPackedItems}
      total={itemStore.packedItemsLength}
    >
      <Filter
        value={itemStore.packedItemsFilter}
        onChange={itemStore.updatePackedItemsFilter}
      />
    </Items>
  )),
);

// Exercise
const MarkAllAsUnpacked = inject('itemStore')(({ itemStore }) => (
  <button className="full-width" onClick={itemStore.markAllAsUnpacked}>
    Mark All as Unpacked
  </button>
));

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <NewItem />
        <UnpackedItems />
        <PackedItems />
        <MarkAllAsUnpacked />
      </div>
    );
  }
}

export default Application;
