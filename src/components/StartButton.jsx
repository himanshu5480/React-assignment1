import React from "react";

const StartButton = ({ onClick, disabled }) => {
  if (disabled) return;
  return (
    <button onClick={onClick} className="bg-green-700 rounded-lg p-2 border">
      Start
    </button>
  );
};

export default StartButton;
