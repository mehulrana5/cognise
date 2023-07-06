import React, { useState, useEffect, useContext } from 'react';
import CogContext from '../context/CogContext';


export default function Timer() {

  const context=useContext(CogContext);

  const [time, setTime] = useState(20 * 60); // Initial time set to 20 minutes (in seconds)

  useEffect(() => {
    if (context.mode === 'easy') {
      setTime(20 * 60);
    } else if (context.mode === 'medium') {
      setTime(10 * 60);
    } else if (context.mode === 'hard') {
      setTime(.1 * 60);
    } else {
      setTime(0);
    }
  }, [context.mode]);

  useEffect(() => {
    let interval = null;
    if (context.active && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && context.active) {
      context.updateStatus("", 0);
      context.updateTimeUp(0);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [context.active, time, context.mode]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  return (
    <div>
      <h1>
        Time Remaining: {formatTime(time)}
      </h1>
    </div>
  );
};
