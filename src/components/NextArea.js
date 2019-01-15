import React from 'react';

export default ({ data: { timings: { Fajr, Dhuhr, Asr, Maghrib, Isha } } }) =>
  <div className="next-area">
    <div className="section-title">
      <h3>Next Prayers</h3>
    </div>
    <div className="prayers">
      <div className="prayer general">
        <h4>Fajr</h4>
        <p>Will Start At {Fajr}</p>
      </div>
      <div className="prayer general">
        <h4>Dhuhr</h4>
        <p>Will Start At {Dhuhr}</p>
      </div>
      <div className="prayer general">
        <h4>Asr</h4>
        <p>Will Start At {Asr}</p>
      </div>
      <div className="prayer general done">
        <h4>Maghrib</h4>
        <p>Will Start At {Maghrib}</p>
      </div>
      <div className="prayer general">
        <h4>Isha</h4>
        <p>Will Start At {Isha}</p>
      </div>
    </div>
  </div>
