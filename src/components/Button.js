import React from "react";

const Button = ({
  text,
  bgColor,
  borderRadius,
  color,
  size,
  icon,
  customFunc,
  width,
}) => {
  return (
    <button
      type="button"
      onClick={customFunc}
      style={{ background: bgColor, color, borderRadius, width }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width}`}
    >
      {text || icon}
    </button>
  );
};

export default Button;
