import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import './NewItem.css';

class NewItem extends Component {
  render() {
    const { value, handleChange, handleSubmit } = this.props;

    return (
      <form className="NewItem" onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(value);
      }}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
