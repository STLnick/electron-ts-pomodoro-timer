import React from 'react';

interface Props {
  time: number;
}

const TimerDisplay = ({ time }: Props) => {
  const maybeAddLeadingZero = (seconds: number): string =>
    seconds < 10 ? `0${seconds}` : `${seconds}`;
  const getFormattedClockTime = (timeToFormat: number): string => {
    const min = Math.floor(timeToFormat / 60);
    const sec = maybeAddLeadingZero(timeToFormat % 60);
    return `${min}:${sec}`;
  };

  return (
    <div id="timer">
      <span className="timer_time">{getFormattedClockTime(time)}</span>
    </div>
  );
};

export default TimerDisplay;
