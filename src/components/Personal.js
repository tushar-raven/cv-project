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

  handlePhotoChange = (e) => {
    const file = e.target.files[0];
    this.props.onPersonalChange({ photo: URL.createObjectURL(file) });
  };
  render() {
    return (
      <div className="info-box">
        <p>Personal Information</p>
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
        <Input
          type="textarea"
          name="description"
          placeholder="Description"
          onChange={this.changeData}
        />
        <input
          type="file"
          name="profilePhoto"
          onChange={this.handlePhotoChange}
        />
      </div>
    );
  }
}

export default Personal;
