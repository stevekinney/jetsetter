import React, { Component } from 'react';
import './NewItem.css';

class NewItem extends Component {
  handleChange = (event) => {
    const value = event.target.value;
    this.props.updateNewItemValue(value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.props;
    this.props.addNewItem(value);
  }

  render() {
    const { value } = this.props;

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
