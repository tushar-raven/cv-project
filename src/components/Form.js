import React, { Component } from "react";
import Personal from "./Personal";
// import Education from "./Education";
import Experience from "./Experience";
import DisplayCV from "./CV";
import { AddButton } from "./Buttons";
import EducationWrapper from "./EducationWrapper";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      formData: {},
    };

    this.state = {
      educationFormData: [],
    };

    this.state = {
      educationNumber: 0,
    };
  }
  changePersonal = (personalData) => {
    this.setState((prevData) => ({
      formData: { ...prevData.formData, ...personalData },
    }));
  };

  changeEducation = (educationData, key) => {
    this.setState((prevData) => ({
      //formData: { ...prevData.formData, ...educationData },
      formData: {
        ...prevData.formData,
        [key]: { ...prevData.formData[key], ...educationData },
      },
    }));
  };

  changeExperience = (experienceData) => {
    this.setState((prevData) => ({
      formData: { ...prevData.formData, ...experienceData },
    }));
  };

  addComponent = () => {
    this.setState((previousData) => ({
      educationNumber: previousData.educationNumber + 1,
    }));
  };

  render() {
    const { formData, educationNumber } = this.state;
    console.log(formData);

    return (
      <div>
        <Personal onPersonalChange={this.changePersonal} />
        <EducationWrapper
          educationNumber={educationNumber}
          changeEducation={this.changeEducation}
        />
        <AddButton onClick={this.addComponent} />
        <Experience onExperienceChange={this.changeExperience} />
        <DisplayCV formData={formData} />
      </div>
    );
  }
}

export default Form;
