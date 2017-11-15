import React, { Component } from 'react';

import { removeItem, toggleItem } from '../actions';

export default class WithItemActions extends Component {
  render() {
    return <div>{this.props.render({ removeItem, toggleItem })}</div>;
  }
}
