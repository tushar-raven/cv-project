import React, { Component } from "react";
import Personal from "./Personal";
import DisplayCV from "./CV";
import { AddButton } from "./Buttons";
import EducationWrapper from "./EducationWrapper";
import ExperienceWrapper from "./ExperienceWrapper";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      formData: {},
      educationFormData: { 0: "" },
      educationNumber: 0,
      experienceFormData: { 0: "" },
      experienceNumber: 0,
    };
  }
  changePersonal = (personalData) => {
    this.setState((prevData) => ({
      formData: { ...prevData.formData, ...personalData },
    }));
  };

  changeEducation = (educationData, key) => {
    this.setState((prevData) => ({
      educationFormData: {
        ...prevData.educationFormData,
        [key]: { ...prevData.educationFormData[key], ...educationData },
      },
    }));
  };

  changeExperience = (experienceData, key) => {
    this.setState((prevData) => ({
      experienceFormData: {
        ...prevData.experienceFormData,
        [key]: { ...prevData.experienceFormData[key], ...experienceData },
      },
    }));
  };

  addEducationComponent = () => {
    this.setState((previousData) => ({
      educationNumber: previousData.educationNumber + 1,
    }));
  };

  addExperienceComponent = () => {
    this.setState((previousData) => ({
      experienceNumber: previousData.experienceNumber + 1,
    }));
  };

  deleteEducationComponent = (key) => {
    this.setState((prevData) => {
      const updatedFormData = { ...prevData.educationFormData };
      delete updatedFormData[key];
      return {
        educationFormData: updatedFormData,
        educationNumber: prevData.educationNumber - 1,
      };
    });
  };

  deleteExperienceComponent = (key) => {
    this.setState((prevData) => {
      const updatedFormData = { ...prevData.experienceFormData };
      delete updatedFormData[key];
      return {
        experienceFormData: updatedFormData,
        experienceNumber: prevData.experienceNumber - 1,
      };
    });
  };

  render() {
    const {
      formData,
      educationNumber,
      experienceNumber,
      educationFormData,
      experienceFormData,
    } = this.state;

    return (
      <div>
        <Personal onPersonalChange={this.changePersonal} />
        <EducationWrapper
          educationNumber={educationNumber}
          changeEducation={this.changeEducation}
          delete={this.deleteEducationComponent}
        />
        <AddButton onClick={this.addEducationComponent} />
        <ExperienceWrapper
          experienceNumber={experienceNumber}
          changeExperience={this.changeExperience}
          delete={this.deleteExperienceComponent}
        />
        <AddButton onClick={this.addExperienceComponent} />

        <DisplayCV
          formData={formData}
          educationFormData={educationFormData}
          experienceFormData={experienceFormData}
          educationNumber={educationNumber}
          experienceNumber={experienceNumber}
        />
      </div>
    );
  }
}

export default Form;
