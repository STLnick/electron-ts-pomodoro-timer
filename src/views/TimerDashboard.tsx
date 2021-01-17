import React, { useCallback, useEffect, useState } from 'react';
import TimerDisplay from '../components/TimerDisplay';

const TimerDashboard = () => {
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [time, setTime] = useState(300);
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  const decrementTime = (): void => {
    setTime((prevTime) => prevTime - 1);
  };

  const startTimer = useCallback((): void => {
    const id = window.setInterval(decrementTime, 1000);
    setIntervalId(id);
  }, []);

  const stopTimer = useCallback((): void => {
    if (intervalId) clearInterval(intervalId);
  }, [intervalId]);

  useEffect(() => {
    if (timerIsRunning) startTimer();
    else stopTimer();
  }, [startTimer, stopTimer, timerIsRunning]);

  const handleRequest = async (): Promise<string> => {
    const res = await fetch('http://localhost:3000', {});
    return res.json();
  };

  const logResponse = async (): Promise<void> => {
    const text = await handleRequest();
    console.log(text);
  };

  const handleTimerToggle = (): void => {
    setTimerIsRunning((prevState) => !prevState);
  };

  return (
    <div className="timer-dashboard">
      <TimerDisplay time={time} />
      <button type="button" onClick={handleTimerToggle}>
        {timerIsRunning ? 'Stop' : 'Start'}
      </button>
      <button type="button" onClick={handleRequest}>
        REQUEST
      </button>
    </div>
  );
};

export default TimerDashboard;
