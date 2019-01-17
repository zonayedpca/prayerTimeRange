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
          <h2>{prayer}</h2>
        </div>
        <div className="time-remaining">
          <p>Time Remaining</p>
          <TimeRemaining timeDiff={timeDiff} />
        </div>
      </div>
    </div>
  )
}
