import React, { Component } from "react";
import Experience from "./Experience";
import { DeleteButton } from "./Buttons";

class ExperienceWrapper extends Component {
  render() {
    const experienceComponents = [];
    for (let i = 0; i < this.props.experienceNumber; i++) {
      experienceComponents.push(
        <div>
          <Experience
            key={i}
            onKey={i}
            onExperienceChange={this.props.changeExperience}
          />
          <DeleteButton onClick={() => this.props.delete(i)} />
        </div>
      );
    }
    return <div>{experienceComponents}</div>;
  }
}
export default ExperienceWrapper;
