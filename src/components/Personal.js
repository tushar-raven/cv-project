import React, { Component } from "react";
import DisplayCV from "./CV";
import Input from "./Input";

class Personal extends Component {
  constructor() {
    super();

    this.state = {
      fName: {
        text: "",
      },

      lName: {
        text: "",
      },

      title: {
        text: "",
      },
    };
  }

  changeFirstName = (e) => {
    this.setState({
      fName: {
        text: e.target.value,
      },
    });
  };

  changeLastName = (e) => {
    this.setState({
      lName: {
        text: e.target.value,
      },
    });
  };

  changeTitle = (e) => {
    this.setState({
      title: {
        text: e.target.value,
      },
    });
  };

  render() {
    const { fName, lName, title } = this.state;
    return (
      <div>
        <Input
          value={fName.text}
          type="text"
          placeholder="First Name"
          onChange={this.changeFirstName}
        />
        <Input
          value={lName.text}
          type="text"
          placeholder="Last Name"
          onChange={this.changeLastName}
        />
        <Input
          value={title.text}
          type="text"
          placeholder="Title"
          onChange={this.changeTitle}
        />
        <DisplayCV fName={fName.text} lName={lName.text} title={title.text} />
      </div>
    );
  }
}

export default Personal;
