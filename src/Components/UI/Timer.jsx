import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimeSettings from './TimeSettings.jsx';
import timerStyles from '../CSS/Timer.module.css';

function Timer() {
  // TODO: Look into useReducer maybe if all these states are needed or refactor
  const [countdown, setCountdown] = useState(false);
  const [timeInfo, setTimeInfo] = useState({
    work: 1500,
    shortBreak: 300,
    longBreak: 900,
    cycles: 4,
  });
  const [cycleCount, setCycleCount] = useState(0);
  const [durationInfo, setDurationInfo] = useState(0);
  const [key, setKey] = useState(0);

  function setTiming(timing) {
    setTimeInfo({
      work: timing.work * 60,
      shortBreak: timing.shortBreak * 60,
      longBreak: timing.longBreak * 60,
      cycles: timing.cycles
    });

    // setDurationInfo(timing.work);
  }

  function setDurationAndCycles() {
    console.log(`cycle count: ${cycleCount}`);
    setCycleCount(cycleCount + 1);
    
    if (cycleCount > 8){
      setCountdown(!countdown);
      setCycleCount(0);
      return false
    } else if (cycleCount % 8 === 0) {
      console.log(`long break`);
      setDurationInfo(timeInfo.longBreak);
      return true
    } else if (cycleCount % 2 === 0) {
      console.log(`short break`);
      setDurationInfo(timeInfo.shortBreak);
      return true
    } else {
      console.log(`work time`);
      setDurationInfo(timeInfo.work);
      return true
    }
  }

  function startPauseTimer() {
    if (cycleCount === 0) {
      setCycleCount(cycleCount + 2);
    }
    setCountdown(!countdown);
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
        <div>It's time for</div>
        <div className={timerStyles.digital}>{formatMin}:{formatSec}</div>
        <div>test</div>
      </div>)
  }

  return (
    <div>
      <div className={timerStyles.timer}>
        <CountdownCircleTimer
          isPlaying={countdown}
          duration={!durationInfo ? timeInfo.work : durationInfo}
          colors={["#285430", "#5F8D4E", "#A4BE7B", "#CCD6A6", "#DAE2B6"]}
          // colorsTime={[60, 48, 36, 24, 0]}
          size={270}
          strokeWidth={12}
          children={children}
          key={key}
          onComplete={() => {
            let shouldRepeat = setDurationAndCycles();

            return { shouldRepeat: shouldRepeat }
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