import React, { Component } from "react";
import Input from "./Input";
import "../App.css";

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
    this.props.onExperienceChange({ [name]: value }, this.props.onKey);
  };

  render() {
    return (
      <>
        <div className="info-box">
          <Input
            type="text"
            name="position"
            placeholder="Position"
            onChange={this.changeData}
          />
          <Input
            type="text"
            name="company"
            placeholder="Company"
            onChange={this.changeData}
          />
          <Input
            type="text"
            name="city"
            placeholder="City"
            onChange={this.changeData}
          />
          <Input
            type="text"
            name="startFrom"
            placeholder="From"
            onChange={this.changeData}
          />
          <Input
            type="text"
            name="ended"
            placeholder="To"
            onChange={this.changeData}
          />
        </div>
      </>
    );
  }
}

export default Experience;
