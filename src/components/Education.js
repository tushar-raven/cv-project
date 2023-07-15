import React, { Component } from "react";
import Input from "./Input";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      uniName: {
        text: "",
      },

      degree: {
        text: "",
      },

      uniCity: {
        text: "",
      },

      uniStartFrom: {
        year: "",
      },

      uniEnded: {
        year: "",
      },
    };
  }

  changeData = (e) => {
    const { name, value } = e.target;
    const uniqueId = this.props.onKey;
    const data = { [name]: value };
    this.props.onEducationChange(data, uniqueId);
  };

  render() {
    return (
      <>
        <Input
          type="text"
          name="uniName"
          placeholder="University Name"
          onChange={this.changeData}
        />
        <Input
          name="degree"
          type="text"
          placeholder="Degree"
          onChange={this.changeData}
        />
        <Input
          type="text"
          name="uniCity"
          placeholder="City"
          onChange={this.changeData}
        />
        <Input
          type="text"
          name="uniStartFrom"
          placeholder="From"
          onChange={this.changeData}
        />
        <Input
          type="text"
          name="uniEnded"
          placeholder="To"
          onChange={this.changeData}
        />
      </>
    );
  }
}

export default Education;
