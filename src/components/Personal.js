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

  changeAddress = (e) => {
    this.setState({
      address: {
        text: e.target.value,
      },
    });
  };

  changeNumber = (e) => {
    this.setState({
      phone: {
        number: e.target.value,
      },
    });
  };

  changeEmail = (e) => {
    this.setState({
      email: {
        text: e.target.value,
      },
    });
  };

  render() {
    const { fName, lName, title, address, phone, email } = this.state;
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
        <Input
          value={address.text}
          type="text"
          placeholder="Address"
          onChange={this.changeAddress}
        />
        <Input
          value={phone.number}
          type="tel"
          placeholder="Phone Number"
          onChange={this.changeNumber}
        />

        <Input
          value={email.text}
          type="email"
          placeholder="Email"
          onChange={this.changeEmail}
        />

        <DisplayCV
          fName={fName.text}
          lName={lName.text}
          title={title.text}
          address={address.text}
          phone={phone.number}
          email={email.text}
        />
      </div>
    );
  }
}

export default Personal;
