import React, { Component } from 'react';
import WithItemActions from '../containers/WithItemActions';
import Item from './Item';
import './Items.css';

class Items extends Component {
  render() {
    const { title, items } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        {items.map(item => (
          <WithItemActions render={(actions) => (
            <Item key={item.id} {...item} {...actions} />
          )} />
        ))}
      </section>
    );
  }
}

export default Items;
