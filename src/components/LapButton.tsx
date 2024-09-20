import React from "react";

interface LapButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const LapButton: React.FC<LapButtonProps> = ({ onClick, disabled }) => {
  if (disabled) return null; // Render nothing when disabled.
  return (
    <button onClick={onClick} className="bg-yellow-700 rounded-lg p-2 border">
      Lap
    </button>
  );
};

export default LapButton;
