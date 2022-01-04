import React from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

class ColorElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onUpdate(this.props.colorElement.id, e);
  }

  render() {
    const color = this.props.colorElement.color;
    const title = this.props.colorElement.title;

    return (
      <fieldset className="small custom-pointers">
        <legend>{title}</legend>
        <HexColorPicker
          color={color}
          onChange={this.handleChange} />
        <HexColorInput 
          color={color} 
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default ColorElement;