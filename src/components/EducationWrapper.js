import React, { Component } from "react";
import Education from "./Education";
import { DeleteButton } from "./Buttons";

class EducationWrapper extends Component {
  render() {
    const educationComponents = [];
    for (let i = 0; i < this.props.educationNumber; i++) {
      educationComponents.push(
        <div>
          <Education
            key={i}
            onKey={i}
            onEducationChange={this.props.changeEducation}
          />
          <DeleteButton onClick={() => this.props.delete(i)} />
        </div>
      );
    }
    return <div>{educationComponents}</div>;
  }
}
export default EducationWrapper;
