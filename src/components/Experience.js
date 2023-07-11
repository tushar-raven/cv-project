import React, { Component } from "react";
import Input from "./Input";

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      position: {
        text: "",
      },

      company: {
        text: "",
      },

      city: {
        text: "",
      },

      startFrom: {
        year: "",
      },

      ended: {
        year: "",
      },
    };
  }

  changeData = (e) => {
    const { name, value } = e.target;
    this.props.onExperienceChange({ [name]: value });
  };

  render() {
    return (
      <div>
        <Input
          type="text"
          name="position"
          placeholder="Position"
          onChange={this.changePosition}
        />
        <Input
          type="text"
          name="company"
          placeholder="Company"
          onChange={this.changeCompany}
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          onChange={this.changeCity}
        />
        <Input
          type="text"
          name="startFrom"
          placeholder="From"
          onChange={this.changeStartFrom}
        />
        <Input
          type="text"
          name="ended"
          placeholder="To"
          onChange={this.changeEnded}
        />
      </div>
    );
  }
}

export default Experience;
