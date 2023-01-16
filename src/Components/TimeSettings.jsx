import React, { useState } from "react";

function TimeSettings(props) {
  const [newCycleInfo, setNewCycleInfo] = useState({
    work: 25,
    shortBreak: 5,
    longBreak: 15,
    cycles: 4,
  })

  function handleTimeInputs(e) {
    const { name, value } = e.target;

    setNewCycleInfo((prevTimeInput) => {
      return {
        ...prevTimeInput,
        [name]: value
      }
    });
  }

  function handleSubmitTime(e) {
    
    props.setTime(newCycleInfo);
    e.preventDefault();


    setNewCycleInfo({
      work: 25,
      shortBreak: 5,
      longBreak: 15,
      cycles: 4,
    })
  }

  return (
    <form onSubmit={handleSubmitTime}>
      <label>
        Work:
        <input
          name="work"
          type="number"
          onChange={handleTimeInputs}
          value={newCycleInfo.work}
        />
      </label>
      <br></br>
      <label>
        Short Break:
        <input
          name="shortBreak"
          type="number"
          onChange={handleTimeInputs}
          value={newCycleInfo.shortBreak}
        />
      </label>
      <br></br>
      <label>
        Long Break:
        <input
          name="longBreak"
          type="number"
          onChange={handleTimeInputs}
          value={newCycleInfo.longBreak}
        />
      </label>
      <br></br>
      <label>
        Work Cycles:
        <input
          name="cycles"
          type="number"
          onChange={handleTimeInputs}
          value={newCycleInfo.cycles}
        />
      </label>
      <input type="submit" />
    </form>)
}

export default TimeSettings;