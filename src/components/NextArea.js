import React from 'react';

import Prayer from './Prayer';

export default ({ prayers: { today, tomorrow } }) =>
  <div className="next-area">
    <div className="section-title">
      <h3>Next Prayers</h3>
    </div>
    <div className="prayers today">
      <h4>Today</h4>
      {Object.keys(today).map(prayer => {
        if(prayer === 'Sunrise' || prayer === 'Sunset' || prayer === 'Imsak' || prayer === 'Midnight')
          return true;
        return <Prayer key={prayer} prayer={prayer} time={today[prayer]} />
      })}
    </div>
    <div className="prayers tomorrow">
      <h4>Tomorrow</h4>
      {Object.keys(tomorrow).map(prayer => {
        if(prayer === 'Sunrise' || prayer === 'Sunset' || prayer === 'Imsak' || prayer === 'Midnight')
          return true;
        return <Prayer key={prayer} prayer={prayer} time={today[prayer]} />
      })}
      <div className="prayer general done">
        <h4>Done Demo</h4>
        <p>Finished</p>
      </div>
    </div>
  </div>
