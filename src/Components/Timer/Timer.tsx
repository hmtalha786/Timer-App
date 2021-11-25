import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";
import "./Timer.css";

const Timer = () => {
  const [disable, setDisable] = useState(false);
  let [hours, setHours] = useState<number>(0);
  let [minutes, setMinutes] = useState<number>(0);
  let [seconds, setSeconds] = useState<number>(0);
  let [access, setAccess] = useState<any>();
  let start = () => {
    setDisable(true);
    setAccess(
      setInterval(() => {
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
          setMinutes(minutes);
        } else if (minutes > 59) {
          seconds = 0;
          minutes = 0;
          hours++;
          setHours(hours);
        } else {
          setSeconds(seconds);
          seconds += 1;
        }
      }, 1000)
    );
  };
  const pause = () => {
    setDisable(false);
    clearInterval(access);
  };
  const Reset = () => {
    setDisable(false);
    clearInterval(access);
    setSeconds(0);
    setHours(0);
    setMinutes(0);
  };
  return (
    <div className="timeBox">
      <span>
        {hours}:{minutes}:{seconds}
      </span>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="allButtons" style={{ display: "flex" }}>
          {disable ? (
            <Buttons title="Start" click={start} disable={disable} />
          ) : (
            <Buttons title="Start" click={start} disable={false} />
          )}
          <Buttons title="Pause" click={pause} disable={false} />
          <Buttons title="Reset" click={Reset} disable={false} />
        </div>
      </div>
    </div>
  );
};

export default Timer;
