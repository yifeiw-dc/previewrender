import React from "react";
import pageplanData from "./page-element-data";
import Pageplan from "./Pageplan";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <svg
        viewBox="0 0 1000 1000"
        shape-rendering="geometricPrecision"
        viewport-fill="white"
      >
        <Pageplan data={pageplanData} />
      </svg>
    </div>
  );
}
