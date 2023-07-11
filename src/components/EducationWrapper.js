import React, { Component } from "react";
import Education from "./Education";

class EducationWrapper extends Component {
  render() {
    const educationComponents = [];
    for (let i = 0; i < this.props.educationNumber; i++) {
      educationComponents.push(
        <Education
          key={i}
          onKey={i}
          onEducationChange={this.props.changeEducation}
        />
      );
    }
    return <div>{educationComponents}</div>;
  }
}
export default EducationWrapper;
