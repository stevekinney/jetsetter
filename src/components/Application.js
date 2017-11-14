import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const UnpackedItems = inject('itemStore')(
  observer(({ itemStore }) => (
    <Items
      title="Unpacked Items"
      items={itemStore.unpackedItems}
    />
  )),
);

const PackedItems = inject('itemStore')(
  observer(({ itemStore }) => (
    <Items
      title="Packed Items"
      items={itemStore.packedItems}
    />
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
