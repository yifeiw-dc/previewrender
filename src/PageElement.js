import React from "react";

const PageElement = ({ id, title, coords, color }) => {
  const points = coords.map( a => a.x+','+a.y ).join(' ')
  return (
    <g>
      <polygon
        key={`page-element-{id}`}
        points={points}
        stroke="white"
        strokeWidth="1"
        fill={color}
      />
      <text
        x={coords[0].x + 5}
        y={coords[0].y + 15}
        fill="red"
        fontSize="10"
      >
        {title}
      </text>
    </g>
  );
};

export default PageElement;
