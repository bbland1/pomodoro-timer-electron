import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimeSettings from './TimeSettings.jsx';
import timerStyles from '../moduleCSS/Timer.module.css';

function Timer() {
  const [countdown, setCountdown] = useState(false);
  const [cycleInfo, setCycleInfo] = useState({
    work: 0,
    shortBreak: 0,
    longBreak: 0,
    cycles: 0,
  });
  const [key, setKey] = useState(0);

  useEffect(() => {
    console.log(`after change: ${cycleInfo.work}`);
  }, [cycleInfo])

  function setTiming(timing) {
    console.log(`timing coming in: ${timing.work}`)
    console.log(`before change: ${cycleInfo.work}`);
    setCycleInfo({
      work: timing.work * 60,
      shortBreak: timing.shortBreak * 60,
      longBreak: timing.longBreak * 60,
      cycles: timing.cycles
    });
  }

  // function setDurationAndCycles(cycleInfo) {
  //   let cycleCount = 0;

  //   if (cycleCount )
  // }

  function startPauseTimer() {
    setCountdown(!countdown)
  }

  function resetTimer() {
    setKey(prevKey => prevKey + 1);
  }

  const children = ({ remainingTime, color }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    const formatMin = minutes.toString().padStart(2, '0');
    const formatSec = seconds.toString().padStart(2, '0');

    return (
      <div style={{ color }}>
        <div>It's time to</div>
        <div className={timerStyles.digital}>{formatMin}:{formatSec}</div>
        <div>Work</div>
      </div>)
  }

  return (
    <div>
      <div className={timerStyles.timer}>
        <CountdownCircleTimer
          isPlaying={countdown}
          duration={cycleInfo.work}
          colors={["#285430", "#5F8D4E", "#A4BE7B", "#CCD6A6", "#DAE2B6"]}
          // colorsTime={[60, 48, 36, 24, 0]}
          size={270}
          strokeWidth={12}
          children={children}
          key={key}
          onComplete={() => {
            return { shouldRepeat: true }
          }}>
        </CountdownCircleTimer>
        <div className={timerStyles.controls}>
          <button onClick={startPauseTimer}>{countdown ? "Pause" : "Start"}</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
      <TimeSettings setTime={setTiming} />
    </div>
  )
}

export default Timer;