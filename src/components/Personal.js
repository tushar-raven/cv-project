import React, { Component } from "react";
// import DisplayCV from "./CV";
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

      address: {
        text: "",
      },

      phone: {
        number: "",
      },

      email: {
        text: "",
      },

      description: {
        text: "",
      },
    };
  }

  changeData = (e) => {
    const { name, value } = e.target;
    this.props.onPersonalChange({ [name]: value });
  };

  render() {
    return (
      <div>
        <Input
          type="text"
          name="fName"
          placeholder="First Name"
          onChange={this.changeData}
        />
        <Input
          type="text"
          name="lName"
          placeholder="Last Name"
          onChange={this.changeData}
        />
        <Input
          type="text"
          name="title"
          placeholder="Title"
          onChange={this.changeData}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          onChange={this.changeData}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={this.changeData}
        />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.changeData}
        />
      </div>
    );
  }
}

export default Personal;
