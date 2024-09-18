import React, { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import LapButton from "./LapButton";
import ResetButton from "./ResetButton";
import Laps from "./Laps";

const Watch = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // 10 milliseconds precision
      }, 10);
    }
  };

  const stop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const reset = () => {
    if (!isRunning) {
      setTime(0);
      setLaps([]);
    }
  };

  const lap = () => {
    if (isRunning) {
      setLaps([...laps, time]);
    }
  };
  return (
    <div className="h-screen bg-slate-500 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-3">
        <Timer time={time} />
        <div className="flex justify-center gap-5 text-xl font-semibold text-white">
          <StartButton onClick={start} disabled={isRunning} />
          <StopButton onClick={stop} disabled={!isRunning} />
          <LapButton onClick={lap} disabled={!isRunning} />
          <ResetButton onClick={reset} disabled={isRunning || time === 0} />
        </div>
        <Laps laps={laps} />
      </div>
    </div>
  );
};

export default Watch;
