import React, { Component } from 'react';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

import WithItems from '../containers/WithItems';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <NewItem />
        <WithItems render={({ unpackedItems }) => (
          <Items title="Unpacked Items" items={unpackedItems} />
        )} />
        <WithItems render={({ packedItems }) => (
          <Items title="Packed Items" items={packedItems} />
        )} />
      </div>
    );
  }
}

export default Application;
