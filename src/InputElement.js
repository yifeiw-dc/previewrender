import React from "react";

class InputElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    if (e.target.type === "checkbox") {
      this.props.updatePreviewData({ [e.target.id]: e.target.checked });
    } else this.props.updatePreviewData({ [e.target.id]: e.target.value });
  }

  render() {
    const element = this.props.inputElement;
    const input_type = this.props.input_type;
    switch (input_type) {
      case "color":
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
      default:
        return (
          <fieldset className="small custom-pointers">
            <legend>{element.title}</legend>
            <input
              type={element.input_type}
              onChange={this.handleChange}
              id={element.id}
            />
          </fieldset>
        );
    }
  }
}

export default InputElement;
