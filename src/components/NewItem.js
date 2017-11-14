import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import './NewItem.css';

import AppDispatcher from '../dispatcher';

class NewItem extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  shouldComponentUpdate(newProps, newState) {
    return this.state.value !== newState.value;
  }

  handleChange(event) {
    const { target } = event;
    if (target instanceof HTMLInputElement) {
      const { value } = target;
      this.setState({ value });
    }
  }

  handleSubmit(event) {
    const { value } = this.state;

    event.preventDefault();

    AppDispatcher.dispatch({
      type: 'ADD_NEW_ITEM',
      item: { value, packed: false, id: uniqueId() },
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
