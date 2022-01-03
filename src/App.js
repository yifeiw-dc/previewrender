import React from "react";
import floorplanData from "./floorplan-data";
import Floorplan from "./Floorplan";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <svg
        viewBox="-1000 -1000 14000 11000"
        shape-rendering="geometricPrecision"
      >
        <Floorplan data={floorplanData} />
      </svg>
    </div>
  );
}
