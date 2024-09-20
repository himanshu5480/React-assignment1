import React, { useEffect, useRef, useState } from "react";
import Timer from "./Timer.jsx";
import StartButton from "./StartButton.jsx";
import StopButton from "./StopButton.jsx";
import LapButton from "./LapButton.jsx";
import ResetButton from "./ResetButton.jsx";
import Laps from "./Laps.jsx";

const Watch: React.FC = () => {
  const [time, setTime] = useState<number>(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = (): void => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // 10 milliseconds precision
      }, 10);
    }
  };

  const stop = (): void => {
    if (isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsRunning(false);
    }
  };

  const reset = (): void => {
    if (!isRunning) {
      setTime(0);
      setLaps([]);
    }
  };

  const lap = (): void => {
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
