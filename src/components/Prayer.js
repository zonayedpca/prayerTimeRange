import React from 'react';

import { amPm } from '../utils/amPm';

export default ({ prayer, time }) => {
  return (
    <div className="prayer general">
      <h4>{prayer}</h4>
      <p>Will Start At <strong>{amPm(time)}</strong></p>
    </div>
  )
}
