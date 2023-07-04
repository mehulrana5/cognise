import React, { useState, useEffect } from 'react';

export default function Timer(props) {
  const [time, setTime] = useState(20*60); // Initial time set to 20 minutes (in seconds)

  useEffect(() => {
    if (props.mode === 'easy') {
      setTime(20 * 60);
    } else if (props.mode === 'medium') {
      setTime(10 * 60);
    } else if (props.mode === 'hard') {
      setTime(.1 * 60);
    } else {
      setTime(0);
    }
  }, [props.mode]);

  useEffect(() => {
    let interval = null;
    if (props.isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && props.isActive) {
        props.updateStatus("", 0);
        props.updateTimeUp(0);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [props.isActive, time, props.mode]);

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
