import React, { Component } from 'react';
import Perf from 'react-addons-perf';
import './PerformanceTools.css';

const start = () => {
  console.log('Starting profiling…');
  Perf.start();
};

const stop = () => {
  Perf.stop();
  Perf.printWasted();
  console.log('Stopping profiling…');
};

class PerformanceTools extends Component {
  constructor() {
    super();
    this.state = { isRunning: false };
    this.startProfiling = this.startProfiling.bind(this);
    this.stopProfiling = this.stopProfiling.bind(this);
  }

  shouldComponentUpdate(newProps, newState) {
    return this.state.isRunning !== newState.isRunning;
  }

  startProfiling() {
    start();
    this.setState({ isRunning: true });
  }

  stopProfiling() {
    stop();
    this.setState({ isRunning: false });
  }

  render() {
    const { isRunning } = this.state;
    return (
      <div className="PerformanceTools">
        {
          isRunning ?
            <button onClick={this.stopProfiling}>Stop Profiling</button> :
            <button onClick={this.startProfiling}>Start Profiling</button>
        }
      </div>
    );
  }
}

window.startProfiling = start;
window.stopProfiling = stop;

export default PerformanceTools;
