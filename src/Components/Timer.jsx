import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import timerStyles from '../moduleCSS/Timer.module.css';

function Timer() {
  const [timer, setTimer] = useState('01:00');
  const [workCycles, setWorkCycles] = useState(0);

  let cycles = 0;

  let workTime = 25 * 60;
  let shortBreakTime = 5 * 60;
  let longBreakTime = 30 * 60;

  function countDown(count) {
    let count_min = Math.floor(workTime / 60);
    let count_sec = workTime % 60;



  }

  function startTimer(workTime) {

  }

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
  
    const formatMin = minutes.toString().padStart(2, '0');
    const formatSec = seconds.toString().padStart(2, '0');
  
    return `${formatMin}:${formatSec}`
  }
  return (
    <div>
      <div className={timerStyles.timer}>
      <CountdownCircleTimer
        isPlaying
        duration={60}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        size={270}
        >{children}
      </CountdownCircleTimer>
        <div className={timerStyles.controls}>
          <button >Start</button>
          <button>Pause</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Timer;