import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  toggleItem = () => {
    const { item } = this.props;
    this.props.toggleItem(item);
  };

  removeItem = () => {
    const { item } = this.props;
    this.props.removeItem(item);
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
