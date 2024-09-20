import React from "react";

interface ResetButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick, disabled }) => {
  if (disabled) return null; // Render nothing when disabled.
  return (
    <button onClick={onClick} className="bg-blue-700 rounded-lg p-2 border">
      Reset
    </button>
  );
};

export default ResetButton;
