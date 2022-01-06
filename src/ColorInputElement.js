import React from "react";

import InputElement from "./InputElement";

class ColorInputElement extends InputElement {
  render() {
    const element = this.props.inputElement;

    return (
      <fieldset className="small custom-pointers">
        <legend>{element.title}</legend>
        <input
          type={element.input_type}
          onChange={this.handleChange}
          id={element.id}
        />
        <span>{element.value}</span>
      </fieldset>
    );
  }
}

export default ColorInputElement;
