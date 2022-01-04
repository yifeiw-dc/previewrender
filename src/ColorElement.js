import React from "react";

class ColorElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onUpdate(e.target.id, e.target.value);
  }

  render() {
    const id = this.props.colorElement.id;
    const color = this.props.colorElement.color;
    const title = this.props.colorElement.title;
    const style = {
      backgroundColor: color,
    };
    return (
      <fieldset>
        <legend>Enter color for {title}:</legend>
        <input
          id={id}
          onChange={this.handleChange} />
        <span
          style={style}
        >
        &nbsp;&nbsp;
        </span>
      </fieldset>
    );
  }
}

export default ColorElement;