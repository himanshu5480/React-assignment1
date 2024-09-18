import React from "react";

const ResetButton = ({ onClick, disabled }) => {
  if (disabled) return;
  return (
    <button
      onClick={onClick}
      className="bg-blue-700 rounded-lg p-2 border"
    >
      Reset
    </button>
  );
};

export default ResetButton;
