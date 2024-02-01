import React, { useState } from "react";

const SVGPath = ({ d, stroke, strokeLinecap, dataKey }) => {
  const [fillColor, setFillColor] = useState("currentColor");

  const handleMouseEnter = () => {
    setFillColor("var(--hover-color)"); // replace with your desired hover color
  };

  const handleMouseLeave = () => {
    setFillColor("currentColor");
  };

  return (
    <path
      data-key={dataKey}
      d={d}
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      fill={fillColor}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default SVGPath;
