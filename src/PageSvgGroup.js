import React from "react";

const PageSvgGroup = ({ id, text, coords, color, opacity, fontSize }) => {
  const points = coords.map((a) => a.x + "," + a.y).join(" ");
  return (
    <g>
      <polygon
        key={`page-element-{id}`}
        points={points}
        stroke="white"
        strokeWidth=".1"
        strokeOpacity={opacity || 0}
        fill={color}
        opacity={opacity}
      />
      <text
        x={coords[0].x + 5}
        y={coords[0].y + 15}
        fill="black"
        fontSize={fontSize}
      >
        {text}
      </text>
    </g>
  );
};

export default PageSvgGroup;
