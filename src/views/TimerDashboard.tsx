import React from 'react';

interface Props {}

const TimerDashboard = (props: Props) => {
  return (
    <div className="timer-dashboard">
      <div className="timer">
        <span id="minutes">5</span>:<span id="seconds">00</span>
      </div>
      <button type="button">Start</button>
    </div>
  );
};

export default TimerDashboard;
