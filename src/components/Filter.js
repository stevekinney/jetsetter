import React, { PureComponent } from 'react';

export default class Filter extends PureComponent {
  handleChange = (event) => {
    const value = event.target.value;
    this.props.onChange(value);
  }

  render() {
    return (
      <input className="Items-searchTerm" value={this.props.value} onChange={this.handleChange} />
    )
  }
}
