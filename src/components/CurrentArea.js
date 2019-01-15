import React from 'react';

import Navbar from './Navbar';

export default ({ data: { timings: { Fajr, Dhuhr, Asr, Maghrib, Isha } } }) =>
  <div className="current-area">
    <Navbar />
    <div className="current-details">
      <div className="current-salaat">
        <p>It's time for</p>
        <h2>{Date.now()}</h2>
      </div>
      <div className="time-remaining">
        <p>Time Remaining</p>
        <h2>00:00</h2>
      </div>
    </div>
  </div>
