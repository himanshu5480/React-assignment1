import React from "react";

interface StopButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const StopButton: React.FC<StopButtonProps> = ({ onClick, disabled }) => {
  if (disabled) return null; // Render nothing when disabled.
  return (
    <button onClick={onClick} className="bg-red-700 rounded-lg p-2 border">
      Stop
    </button>
  );
};

export default StopButton;
