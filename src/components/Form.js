import React, { Component } from "react";
import Personal from "./Personal";
import DisplayCV from "./CV";
import { AddButton } from "./Buttons";
import EducationWrapper from "./EducationWrapper";
import ExperienceWrapper from "./ExperienceWrapper";
import JsPDF from "jspdf";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      formData: {},
      educationFormData: { 0: "" },
      educationNumber: 1,
      experienceFormData: { 0: "" },
      experienceNumber: 1,
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

  generatePDF = () => {
    const report = new JsPDF("p", "px", [1290, 860]);
    report.html(document.querySelector("#cv")).then(() => {
      report.save(`${this.formData?.fName} + resume.pdf`);
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
        <div className="info-boxes">
          <Personal onPersonalChange={this.changePersonal} />

          <p className="info-box-name">Education(Fill latest first)</p>
          <EducationWrapper
            educationNumber={educationNumber}
            changeEducation={this.changeEducation}
            delete={this.deleteEducationComponent}
          />
          <AddButton onClick={this.addEducationComponent} />

          <p className="info-box-name">Experience(Fill latest first)</p>
          <ExperienceWrapper
            experienceNumber={experienceNumber}
            changeExperience={this.changeExperience}
            delete={this.deleteExperienceComponent}
          />
          <AddButton onClick={this.addExperienceComponent} />
          <button className="pdf" onClick={this.generatePDF}>
            Generate PDF
          </button>
        </div>
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
