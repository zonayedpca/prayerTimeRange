import React from 'react';

import Navbar from './Navbar';
import TimeRemaining from './TimeRemaining';

export default ({ currentPrayer: { prayer, timeDiff } }) => {
  return (
    <div className="current-area">
      <Navbar />
      <div className="current-details">
        <div className="current-salaat">
          <p>It's time for</p>
          <h2>{prayer ? prayer : 'Work'}</h2>
        </div>
        <div className="time-remaining">
          {timeDiff && <React.Fragment>
            <p>Time Remaining</p>
            <TimeRemaining timeDiff={timeDiff && timeDiff} />
          </React.Fragment>}
        </div>
      </div>
    </div>
  )
}
