import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import ItemStore from './store/ItemStore';
import Application from './components/Application';

import './index.css';

const itemStore = new ItemStore();

ReactDOM.render(
  <Provider itemStore={itemStore}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
