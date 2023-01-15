import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import timerStyles from '../moduleCSS/Timer.module.css';

function Timer() {
  const [countdown, setCountdown] = useState(false);
  const [workCycles, setWorkCycles] = useState(0);

  function startTimer() {
    setCountdown(!countdown)
  }

  const children = ({ remainingTime }, color) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
  
    const formatMin = minutes.toString().padStart(2, '0');
    const formatSec = seconds.toString().padStart(2, '0');
  
    return (
      <div style={color}>
        <span>title</span>
        <p className={timerStyles.digital}>{formatMin}:{formatSec}</p>
      </div>)
  }

  return (
    <div>
      <div className={timerStyles.timer}>
      <CountdownCircleTimer
        isPlaying={countdown}
        duration={60}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        size={270}
        >{children}
      </CountdownCircleTimer>
        <div className={timerStyles.controls}>
          <button onClick={startTimer}>Start</button>
          <button onClick={startTimer}>Pause</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Timer;