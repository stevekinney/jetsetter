import React, { Component } from 'react';
import './Item.css';

import AppDispatcher from '../dispatcher';

class Item extends Component {
  toggleItem = () => {
    const { item } = this.props;
    AppDispatcher.dispatch({
      type: 'UPDATE_ITEM',
      item: { ...item, packed: !item.packed },
    });
  };

  removeItem = () => {
    const { item } = this.props;
    AppDispatcher.dispatch({
      type: 'REMOVE_ITEM',
      item,
    });
  };

  render() {
    const { item } = this.props;
    return (
      <article className="Item">
        <label>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={this.toggleItem}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={this.removeItem}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
