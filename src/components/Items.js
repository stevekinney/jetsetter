import React, { Component } from 'react';
import Item from './Item';
import './Items.css';

class Items extends Component {
  render() {
    const { title, items, total } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length} / {total})
        </h2>
        { this.props.children }
        {items.map(item => <Item key={item.id} item={item} />)}
      </section>
    );
  }
}

export default Items;
