import React from "react";

const StopButton = ({ onClick, disabled }) => {
  if (disabled) return;
  return (
    <button
      onClick={onClick}
      className="bg-red-700 rounded-lg p-2 border"
    >
      Stop
    </button>
  );
};

export default StopButton;
