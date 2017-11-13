import React from 'react';
import PropTypes from 'prop-types';

import './CountDown.css';

const CountDown = ({ timeLeft }) => (
  <div className="CountDown">The Lyft will be here in about {timeLeft}.</div>
);

CountDown.propTypes = {
  timeLeft: PropTypes.string,
};

CountDown.defaultProps = {
  timeLeft: 'eventually',
};

export default CountDown;
