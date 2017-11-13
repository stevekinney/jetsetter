import React, { Component } from 'react';
import NewItemContainer from '../containers/NewItemContainer';
import PackedItemsContainer from '../containers/PackedItemsContainer';
import UnpackedItemsContainer from '../containers/UnpackedItemsContainer';
import MarkAllAsUnpackedContainer from '../containers/MarkAllAsUnpackedContainer';
import UnpackedFilterContainer from '../containers/UnpackedFilterContainer';
import PackedFilterContainer from '../containers/PackedFilterContainer';
import CountDownContainer from '../containers/CountdownContainer';

import './Application.css';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <NewItemContainer />
        <CountDownContainer />
        <UnpackedItemsContainer title="Unpacked Items" render={() => <UnpackedFilterContainer />} />
        <PackedItemsContainer title="Packed Items" render={() => <PackedFilterContainer />} />
        <MarkAllAsUnpackedContainer />
      </div>
    );
  }
}

export default Application;
