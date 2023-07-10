import React, { Component } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import DisplayCV from "./CV";
// import { AddButton, DeleteButton } from "./Buttons";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      formData: {},
    };
  }
  changePersonal = (personalData) => {
    this.setState((previousData) => ({
      ...previousData,
      ...personalData,
    }));
  };

  changeEducation = (educationData) => {
    this.setState((previousData) => ({
      ...previousData,
      ...educationData,
    }));
  };

  changeExperience = (experienceData) => {
    this.setState((previousData) => ({
      ...previousData,
      ...experienceData,
    }));
  };

  render() {
    const { formData } = this.state;
    return (
      <div>
        <Personal onPersonalChange={this.changePersonal} />
        <Education onEducationChange={this.changeEducation} />
        <Experience onExperienceChange={this.changeExperience} />
        <DisplayCV formData={formData} />
      </div>
    );
  }
}

export default Form;
