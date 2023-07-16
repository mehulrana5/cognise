import React, { useState, useEffect, useContext } from 'react';
import CogContext from '../context/CogContext';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default function Timer() {
  const context = useContext(CogContext);
  const [time, setTime] = useState(20 * 60); // Initial time set to 20 minutes (in seconds)

  useEffect(() => {
    if (context.mode === 'easy') {
      setTime(20 * 60);
    } else if (context.mode === 'medium') {
      setTime(10 * 60);
    } else if (context.mode === 'hard') {
      setTime(0.1 * 60);
    } else {
      setTime(0);
    }
  }, [context.mode]);
  
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  return (
    <div>
      <div style={{position:'fixed',bottom:'10px',right:'10px',zIndex:'1'}}>
        <CountdownCircleTimer
          isPlaying={context.active}
          key={context.active}
          duration={time} 
          colors={[['#00b00f']]} // Customize the color of the progress bar
          strokeWidth={6} // Customize the thickness of the progress bar
          size={100} // Customize the size of the circular timer
          rotation='counterclockwise'
          onComplete={() => {
            context.setActive(0);
            context.setTimeup(0);
          }}
          >
          {({ remainingTime }) => formatTime(remainingTime)}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
