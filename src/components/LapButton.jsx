import React from "react";

const LapButton = ({ onClick, disabled }) => {
  if (disabled) return;
  return (
    <button
      onClick={onClick}
      className="bg-yellow-700 rounded-lg p-2 border"
    >
      Lap
    </button>
  );
};

export default LapButton;
