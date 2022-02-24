import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmitChange = () => {
    alert(`${this.state.text}`);
  };
  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmitChange}>
        <div>
          <h1>
            <u>Form</u>
          </h1>
        </div>
        <div>
          <label>Enter your text : </label>
          <input type="text" value={text} onChange={this.handleTextChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
