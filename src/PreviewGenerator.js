import React from "react";

import previewInputs from "./PreviewInputs";
import InputElement from "./InputElement";
import CheckboxInputElement from "./CheckboxInputElement";
import ColorInputElement from "./ColorInputElement";

import Pageplan from "./Pageplan";

import "./styles.css";

class PreviewGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.updatePreviewData = this.updatePreviewData.bind(this);
    this.state = { inputValues: {} };
  }

  updatePreviewData(inputData) {
    var inputValues = Object.assign({}, this.state.inputValues, inputData);

    this.setState({ inputValues: inputValues });
  }

  render() {
    const inputElementList = previewInputs.map((previewInput) => {
      switch (previewInput.input_type) {
        case "checkbox":
          return (
            <CheckboxInputElement
              key={previewInput.id}
              inputElement={previewInput}
              updatePreviewData={this.updatePreviewData}
            />
          );
        case "color":
          return (
            <ColorInputElement
              key={previewInput.id}
              inputElement={previewInput}
              updatePreviewData={this.updatePreviewData}
            />
          );
        default:
          return (
            <InputElement
              key={previewInput.id}
              inputElement={previewInput}
              updatePreviewData={this.updatePreviewData}
            />
          );
      }
    });

    return (
      <div>
        <div className="ColorElements inline">
          <h1>Page Element Inputs</h1>
          <ul>{inputElementList}</ul>
        </div>
        <div className="PreviewRender inline">
          <h1>Generated Preview</h1>
          <svg viewBox="0 0 1000 1000" shapeRendering="geometricPrecision">
            <Pageplan data={this.state.inputValues} />
          </svg>
        </div>
      </div>
    );
  }
}

export default PreviewGenerator;
