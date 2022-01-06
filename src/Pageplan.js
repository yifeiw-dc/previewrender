import React from "react";
import pageElements from "./PageElementData";
import PageSvgGroup from "./PageSvgGroup";

function Pageplan(data) {
  const previewElements = pageElements.map((pe) => {
    let updatedOption = {};
    switch (pe.group) {
      case "menus":
      case "primary":
      case "secondary":
        updatedOption = { color: data.data[pe.group] };
        break;
      case "headlinetext":
        updatedOption = {
          text: data.data[pe.group] ? "Sample Headline" : "",
          fontSize: 60,
          opacity: 0,
        };
        break;
      default:
        updatedOption = { opacity: data.data[pe.group] ? 1 : 0 };
    }

    return { ...pe, ...updatedOption };
  });

  return previewElements.map((pe) => <PageSvgGroup key={pe.id} {...pe} />);
}

export default Pageplan;
