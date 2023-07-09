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

  changePosition = (e) => {
    this.setState({
      position: {
        text: e.target.value,
      },
    });
  };

  changeCompany = (e) => {
    this.setState({
      company: {
        text: e.target.value,
      },
    });
  };

  changeCity = (e) => {
    this.setState({
      city: {
        text: e.target.value,
      },
    });
  };

  changeStartFrom = (e) => {
    this.setState({
      startFrom: {
        text: e.target.value,
      },
    });
  };
  changeEnded = (e) => {
    this.setState({
      ended: {
        text: e.target.value,
      },
    });
  };

  render() {
    const { position, company, city, startFrom, ended } = this.state;

    return (
      <div>
        <Input
          value={position.text}
          type="text"
          placeholder="Position"
          onChange={this.changePosition}
        />
        <Input
          value={company.text}
          type="text"
          placeholder="Company"
          onChange={this.changeCompany}
        />
        <Input
          value={city.text}
          type="text"
          placeholder="City"
          onChange={this.changeCity}
        />
        <Input
          value={startFrom.text}
          type="text"
          placeholder="From"
          onChange={this.changeStartFrom}
        />
        <Input
          value={ended.text}
          type="text"
          placeholder="To"
          onChange={this.changeEnded}
        />
      </div>
    );
  }
}

export default Experience;
