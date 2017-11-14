import React, { Component } from 'react';

import calculateTimeLeft from '../lib/calculate-time-left';

import './CountDown.css';

export default class CountDown extends Component {
  state = {
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

  render() {
    const { timeLeft } = this.state;
    return (
      <div className="CountDown">
        The Lyft will be here in about {timeLeft}.
      </div>
    );
  }
}
