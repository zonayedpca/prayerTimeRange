import React, { Component } from 'react';

import { preZero } from '../utils/preZero';

class TimeRemaining extends Component {
  state = {
    timeDiff: this.props.timeDiff
  }

  componentDidMount() {
    const { timeDiff } = this.props;
    setInterval(() => {
      this.setState({ timeDiff: new Date(timeDiff - (1000 * 60)) })
    }, 1000 * 60);
  }

  render() {
    const { timeDiff } = this.state;
    return (
      <h2>{preZero(timeDiff.getHours())}:{timeDiff && preZero(timeDiff.getMinutes())}</h2>
    )
  }
}

export default TimeRemaining;
