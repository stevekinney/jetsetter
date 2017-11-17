import React, { Component } from 'react';
import NewItem from './NewItem';
import Items from './Items';
import Filter from './Filter';

import './Application.css';

import { inject, observer } from 'mobx-react';

const PackedItems = inject('itemList')(
  observer(({ itemList }) => (
    <Items title="Packed Items" items={itemList.packedItems}>
      <Filter
        searchTerm={itemList.packedItemsFilter}
        onChange={itemList.updatePackedFilter}
      />
    </Items>
  )),
);

const UnpackedItems = inject('itemList')(
  observer(({ itemList }) => (
    <Items title="Unpacked Items" items={itemList.unpackedItems} />
  )),
);

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <NewItem onSubmit={() => {}} />
        <UnpackedItems />
        <PackedItems />
        <button className="button full-width" onClick={() => {}}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;
