import React from "react";

// Convert time to formatted string
const formatTime = (time: number): string => {
  const milliseconds = ("00" + (time % 1000)).slice(-3);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  return `${minutes}:${seconds}:${milliseconds}`;
};

interface LapsProps {
  laps: number[];
}

const Laps: React.FC<LapsProps> = ({ laps }) => {
  return (
    <div className="h-[200px]">
      <div className="text-xl font-bold text-white">Laps</div>
      <div className="max-h-[200px] border overflow-y-auto text-lg font-semibold text-gray-100">
        {laps.map((lap, index) => (
          <div key={index}>
            Lap {index + 1}: {formatTime(lap)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laps;
