import React, { Component } from 'react';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

let count = 0;

const defaultState = [
  { value: 'Pants', id: count++, packed: false },
  { value: 'Jacket', id: count++, packed: false },
  { value: 'iPhone Charger', id: count++, packed: false },
  { value: 'MacBook', id: count++, packed: false },
  { value: 'Sleeping Pills', id: count++, packed: true },
  { value: 'Underwear', id: count++, packed: false },
  { value: 'Hat', id: count++, packed: false },
  { value: 'T-Shirts', id: count++, packed: false },
  { value: 'Belt', id: count++, packed: false },
  { value: 'Passport', id: count++, packed: true },
  { value: 'Sandwich', id: count++, packed: true },
];

const defaultTripTime = Date.now() + 1000 * 60 * 10;
const calculateTimeLeft = () => {
  const distance = defaultTripTime - Date.now();
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return `in ${minutes} minute(s) and ${seconds} second(s)`;
};

class Application extends Component {
  state = {
    items: defaultState,
    timeLeft: calculateTimeLeft(),
  };

  componentDidMount() {
    this.countDownInterval = setInterval(() => {
      this.setState({ timeLeft: calculateTimeLeft() });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.countDownInterval);
  }

  addItem = item => {
    this.setState({ items: [item, ...this.state.items] });
  };

  removeItem = item => {
    this.setState({
      items: this.state.items.filter(other => other.id !== item.id),
    });
  };

  markAsPacked = item => {
    const otherItems = this.state.items.filter(other => other.id !== item.id);
    const updatedItem = { ...item, packed: !item.packed };
    this.setState({ items: [updatedItem, ...otherItems] });
  };

  markAllAsUnpacked = () => {
    const items = this.state.items.map(item => ({ ...item, packed: false }));
    this.setState({ items });
  };

  render() {
    const { items } = this.state;
    const unpackedItems = items.filter(item => !item.packed);
    const packedItems = items.filter(item => item.packed);

    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <CountDown {...this.state} />
        <Items
          title="Unpacked Items"
          items={unpackedItems}
          onCheckOff={this.markAsPacked}
          onRemove={this.removeItem}
        />
        <Items
          title="Packed Items"
          items={packedItems}
          onCheckOff={this.markAsPacked}
          onRemove={this.removeItem}
        />
        <button className="button full-width" onClick={this.markAllAsUnpacked}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;
