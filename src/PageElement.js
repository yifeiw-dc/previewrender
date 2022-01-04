import React from "react";

const PageElement = ({ id, coords, fill }) => {
  const points = coords.map( a => a.x+','+a.y ).join(' ')
  const final_fill=fill
  return (
    <g>
      <polygon
        key={`page-element-{id}`}
        points={points}
        stroke="white"
        strokeWidth="1"
        fill={final_fill}
      />
      <text
        x={coords[0].x + 5}
        y={coords[0].y + 15}
        fill="red"
        fontSize="10"
      >
        {id}
      </text>
    </g>
  );
};

PageElement.defaultProps = {
  fill: 'grey',
};


export default PageElement;
