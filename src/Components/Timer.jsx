import React from "react";
import timerStyles from '../moduleCSS/Timer.module.css';

function Timer() {
  return (
    <div>
      <div className={timerStyles.timer}>
        <div className={timerStyles.analog}>
          <span className={timerStyles.digital}>00:00:00</span>
        </div>
      </div>
    </div>
  )
}

export default Timer;