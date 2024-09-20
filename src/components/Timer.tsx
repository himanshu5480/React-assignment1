import React from "react";

interface TimerProps {
  time: number;
}

const Timer: React.FC<TimerProps> = ({ time }) => {
  const milliseconds = ("00" + (time % 1000)).slice(-3);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);

  return (
    <div className="flex justify-center gap-4 text-white text-3xl">
      <div className="h-20 w-20 bg-slate-900 border border-1 flex justify-center items-center">
        {minutes}
      </div>
      <div className="h-20 w-20 bg-slate-900 border border-1 flex justify-center items-center">
        {seconds}
      </div>
      <div className="h-20 w-20 bg-slate-900 border border-1 flex justify-center items-center">
        {milliseconds}
      </div>
    </div>
  );
};

export default Timer;
