import React from 'react';

export default ({ currentPrayer: { prayer, start, end } }) =>
  <div className="current-info">
    <div className="current location">
      <p>Location</p>
      <h4>Kharar, Mohali</h4>
    </div>
    <div className="current started">
      <p>Started</p>
      <h4>{start}</h4>
    </div>
    <div className="current will-end">
      <p>Will End</p>
      <h4>{end}</h4>
    </div>
  </div>
