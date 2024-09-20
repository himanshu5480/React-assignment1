import React from "react";

interface StartButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const StartButton: React.FC<StartButtonProps> = ({ onClick, disabled }) => {
  if (disabled) return null; // Changed `return;` to `return null;` to render nothing.
  return (
    <button onClick={onClick} className="bg-green-700 rounded-lg p-2 border">
      Start
    </button>
  );
};

export default StartButton;
