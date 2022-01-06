import React from "react";
import pageElements from "./PageElementData";
import ColorElement from "./ColorElement";
import Pageplan from "./Pageplan";
import "./styles.css";

class PreviewGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.handleElementColorChange = this.handleElementColorChange.bind(this);
    this.state = {
      pageElements,
    };
  }

  handleElementColorChange(id, color) {
    const updatedPageElements = this.state.pageElements.map((pE) => {
      if (pE.id === id) {
        return { ...pE, color: color };
      }
      return pE;
    });
    this.setState({ pageElements: updatedPageElements });
  }

  render() {
    const colorElementsList = this.state.pageElements.map((ce) => (
      <ColorElement
        key={ce.id}
        colorElement={ce}
        onUpdate={this.handleElementColorChange}
      />
    ));

    return (
      <div>
        <div className="ColorElements inline">
          <h1>Page Elements Color</h1>
          <ul>{colorElementsList}</ul>
        </div>
        <div className="PreviewRender inline">
          <h1>Generated Preview</h1>
          <svg viewBox="0 0 1000 1000" shapeRendering="geometricPrecision">
            <Pageplan data={this.state} />
          </svg>
        </div>
      </div>
    );
  }
}

export default PreviewGenerator;
