import InputElement from "./InputElement";

class CheckboxInputElement extends InputElement {
  handleChange(e) {
    this.props.updatePreviewData({ [e.target.id]: e.target.checked });
  }
}

export default CheckboxInputElement;
