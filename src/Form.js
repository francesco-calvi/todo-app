import React from "react";

class Form extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    event.preventDefault();
    if (this.state.value.trim() === "") {
      alert("scrivi qualcosa");
      return;
    }
    this.props.submit(this.state.value);
    this.setState({
      value: "",
    });
  };

  onChangeText = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleChange}>
        <input
          style={{ outline: "none" }}
          className="input"
          type="text"
          placeholder="New task ..."
          value={this.state.value}
          onChange={this.onChangeText}
        ></input>
      </form>
    );
  }
}

export default Form;
