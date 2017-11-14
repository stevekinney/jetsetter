import React, { Component } from 'react';
import { inject } from 'mobx-react';

import './NewItem.css';

@inject('itemStore')
class NewItem extends Component {
  state = {
    value: '',
  };

  shouldComponentUpdate(newProps, newState) {
    return this.state.value !== newState.value;
  }

  handleChange = (event) => {
    const { target } = event;
    if (target instanceof HTMLInputElement) {
      const { value } = target;
      this.setState({ value });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { itemStore } = this.props;
    itemStore.addItem({
      value: this.state.value,
    });
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
