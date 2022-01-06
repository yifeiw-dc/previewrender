import React from "react";

class InputElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.updatePreviewData({ [e.target.id]: e.target.value });
  }

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
      </fieldset>
    );
  }
}

export default InputElement;
