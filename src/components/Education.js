import React, { Component } from "react";
import Input from "./Input";
import AddButton from "./Buttons";
import DisplayCV from "./CV";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      universityName: {
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

  changeUniversityName = (e) => {
    this.setState({
      universityName: {
        text: e.target.value,
      },
    });
  };

  changeDegree = (e) => {
    this.setState({
      degree: {
        text: e.target.value,
      },
    });
  };

  changeUniCity = (e) => {
    this.setState({
      uniCity: {
        text: e.target.value,
      },
    });
  };

  changeUniStartFrom = (e) => {
    this.setState({
      uniStartFrom: {
        text: e.target.value,
      },
    });
  };

  changeUniEnded = (e) => {
    this.setState({
      uniEnded: {
        text: e.target.value,
      },
    });
  };

  render() {
    const { universityName, degree, uniCity, uniStartFrom, uniEnded } =
      this.state;

    return (
      <>
        <Input
          value={universityName.text}
          type="text"
          placeholder="University Name"
          onChange={this.changeUniversityName}
        />
        <Input
          value={degree.text}
          type="text"
          placeholder="Degree"
          onChange={this.changeDegree}
        />
        <Input
          value={uniCity.text}
          type="text"
          placeholder="City"
          onChange={this.changeUniCity}
        />
        <Input
          value={uniStartFrom.text}
          type="text"
          placeholder="From"
          onChange={this.changeUniStartFrom}
        />
        <Input
          value={uniEnded.text}
          type="text"
          placeholder="To"
          onChange={this.changeUniEnded}
        />

        <AddButton />

        <DisplayCV
          universityName={universityName.text}
          degree={degree.text}
          uniCity={uniCity.text}
          uniStartFrom={uniStartFrom.text}
          uniEnded={uniEnded.text}
        />
      </>
    );
  }
}

export default Education;
