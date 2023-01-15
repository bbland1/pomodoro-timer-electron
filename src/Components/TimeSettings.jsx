import React, { useState } from "react";

function TimeSettings() {
  const [cycleTiming, setCycleTiming] = useState({
    work: '25',
    shortBreak: '5',
    longBreak: '15',
    cycles: '4',
  })

  function handleTimeInputs(e) {
    const { name, value } = e.target;

    setCycleTiming((prevTimeInput) => {
      return {
        ...prevTimeInput,
        [name]: value
      }
    });
  }

  function handleSubmitTime(e) {
    e.preventDefault();
    console.log(cycleTiming);
    console.log(typeof cycleTiming.shortBreak);
  }

  return (
    <form onSubmit={handleSubmitTime}>
      <label>
        Work:
        <input
          name="work"
          type="number"
          onChange={handleTimeInputs}
          value={cycleTiming.work}
        />
      </label>
      <br></br>
      <label>
        Short Break:
        <input
          name="shortBreak"
          type="number"
          onChange={handleTimeInputs}
          value={cycleTiming.shortBreak}
        />
      </label>
      <br></br>
      <label>
        Long Break:
        <input
          name="longBreak"
          type="number"
          onChange={handleTimeInputs}
          value={cycleTiming.longBreak}
        />
      </label>
      <br></br>
      <label>
        Work Cycles:
        <input
          name="cycles"
          type="number"
          onChange={handleTimeInputs}
          value={cycleTiming.cycles}
        />
      </label>
      <input type="submit" />
    </form>)
}

export default TimeSettings;