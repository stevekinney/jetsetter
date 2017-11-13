import React, { Component } from 'react';
import NewItemContainer from '../containers/NewItemContainer';
import PackedItemsContainer from '../containers/PackedItemsContainer';
import UnpackedItemsContainer from '../containers/UnpackedItemsContainer';

import './Application.css';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <NewItemContainer />
        <UnpackedItemsContainer title="Unpacked Items" />
        <PackedItemsContainer title="Packed Items" />
      </div>
    );
  }
}

export default Application;
