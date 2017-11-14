import React from 'react';

import './CountDown.css';

const CountDown = ({ timeLeft }) => (
  <div className="CountDown">The Lyft will be here in about {timeLeft}.</div>
);

export default CountDown;
