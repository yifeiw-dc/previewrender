import React from "react";

import previewInputs from "./PreviewInputs";
import InputElement from "./InputElement";

import PageElementList from "./PageElementList";

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
      return (
        <InputElement
          key={previewInput.id}
          inputElement={previewInput}
          updatePreviewData={this.updatePreviewData}
          input_type={previewInput.input_type}
        />
      );
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
            <PageElementList data={this.state.inputValues} />
          </svg>
        </div>
      </div>
    );
  }
}

export default PreviewGenerator;
