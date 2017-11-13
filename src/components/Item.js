import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Item.css';

class Item extends Component {
  render() {
    const { packed, id, value, onCheckOff, onRemove } = this.props;
    return (
      <article className="Item">
        <label htmlFor={id}>
          <input
            type="checkbox"
            checked={packed}
            onChange={onCheckOff}
            id={id}
          />
          {value}
        </label>
        <button className="Item-remove" onClick={onRemove}>
          Remove
        </button>
      </article>
    );
  }
}

Item.propTypes = {
  packed: PropTypes.bool,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onCheckOff: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

Item.defaultProps = {
  packed: false,
};

export default Item;
